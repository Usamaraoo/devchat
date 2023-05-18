import { axiosPrivate } from "../apies/axios";
import { useEffect } from "react";
import useRefreshtoken from "../hooks/useRefreshtoken";
import useAuth from "../hooks/useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshtoken();
    const { auth } = useAuth();
    useEffect(() => {
        // attaching token using req interceptors
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                  console.log('attaching token',config);
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );
            // checking access token on resonse
        const responseIntercept = axiosPrivate.interceptors.response.use(
            // if response is ok let go 
            response => response,
            // if error
            async (error) => {
                const prevRequest = error?.config;
                // check error type and if 403 call refresh token function 
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();// will call refresh accesstoken api 
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;