import axios from "axios";

const appAxios = axios.create({
    headers : {
        myCustomHeader : "TokenKey-App"
    },
    baseURL : "http://localhost:3000"
})

appAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(JSON.parse(config.data || '{}'))
    console.log("Request", config);
    return config;
});

// Add a response interceptor
appAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Response", response)
    return response;
});

export default appAxios;
