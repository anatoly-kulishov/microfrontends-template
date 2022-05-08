import axios from "axios";
import { GlobalStore } from "redux-micro-frontend";
import { setErrorAC } from "./Error/action-creators";
import { GlobalStoreFolders } from "./globalStoreUtils";
import { getAuthToken } from "./utils";

const globalStore = GlobalStore.Get();

const axiosInst = axios.create({
  baseURL: process.env.BASE_URL,
});

axiosInst.interceptors.response.use(
  (response) => response,
  (error) => {
    globalStore.DispatchGlobalAction(
      GlobalStoreFolders.API,
      setErrorAC(error.response.status)
    );
    throw error;
  }
);

axiosInst.interceptors.request.use(async (config) => {
  try {
    const token = await getAuthToken();
    config.headers.Authorization = token;
  } catch {
    return config;
  }
  return config;
});

export default axiosInst;
