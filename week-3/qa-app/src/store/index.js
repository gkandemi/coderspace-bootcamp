import { createStore } from 'vuex'
import categories from "@/store/modules/categories";
import users from "@/store/modules/users";
import questions from "@/store/modules/questions";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    loadingState : false
  },
  getters: {
    loadingState : state => state.loadingState
  },
  mutations: {
    setLoading(state, status){
      state.loadingState = status;
    }
  },
  actions: {
    initApp({ dispatch }){
      dispatch("categories/fetchList")
    }
  },
  modules: {
    categories,
    users,
    questions
  },
  plugins: [createPersistedState({
    paths: ["users.user", "questions.list"],
    key : "qa-app",
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
})
