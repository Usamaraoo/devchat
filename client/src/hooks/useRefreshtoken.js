import axios from "../apies/axios";
import useAuth from "./useAuth";

export default function useRefreshtoken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const res = await axios.get("/refresh", { withCredentials: true });
  };
}
