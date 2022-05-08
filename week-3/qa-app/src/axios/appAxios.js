import axios from "axios";
import store from "@/store";

const appAxiosInstance = axios.create({
    baseURL : "http://localhost:3000"
})

appAxiosInstance.interceptors.request.use(config => {
    store.commit("setLoading", true);
    return config;
})

appAxiosInstance.interceptors.response.use(response => {
    setTimeout(() => store.commit("setLoading", false), 300)
    return response;
})


export default appAxiosInstance;


