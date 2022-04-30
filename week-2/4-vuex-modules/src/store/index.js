import {createStore} from "vuex";
import products from "./modules/products"
import contacts from "./modules/contacts"

const store = createStore({
    state: {
        appName: "kablosuzkediApp",
        theme: "dark",
        sidebar: true,
    },
    getters: {
        _getAppName: state => state.appName,
        _isSideBarEnabled: state => state.sidebar,
    },
    modules: {
        products,
        contacts,
    }
})
export default store;
