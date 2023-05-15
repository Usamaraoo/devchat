import axios from "../apies/axios";
import useAuth from "./useAuth";

// this custom hook will refresh the access token and update in user state
export default function useRefreshtoken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    try {
      const res = await axios.get("/api/refresh/token", { withCredentials: true });
      setAuth((prev) => {
        console.log("previous state", JSON.stringify(prev));
        console.log("New token", res.data.accessToken);
        return { ...prev, accessToken: res.data.accessToken };
      });
      return res.data.accessToken;
    } catch (error) {
      console.log(error);
    }
  };
  return refresh;
}
