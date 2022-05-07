import { createStore } from 'vuex'
import categories from "@/store/modules/categories";
import users from "@/store/modules/users";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    initApp({ dispatch }){
      dispatch("categories/fetchList")
    }
  },
  modules: {
    categories,
    users
  },
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
})
