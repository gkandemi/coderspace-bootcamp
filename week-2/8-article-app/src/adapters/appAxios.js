import axios from "axios";

const appAxios = axios.create({
    baseURL : "http://localhost:3000"
})

export default appAxios;
