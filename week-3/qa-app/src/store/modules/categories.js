import appAxios from "@/axios/appAxios";

export default {
    namespaced: true,
    state: {
        list: [],
    },
    mutations: {
        setList(state, list) {
            state.list = list;
        }
    },
    actions: {
        fetchList({commit}) {
            appAxios.get("/categories").then(({data: categoryList}) => {
                commit("setList", categoryList || [])
            })
        }
    },
    getters: {
        categoryList: state => state.list
    }
}
