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
        fetchList({commit, rootGetters}, queryParams) {
            let REQUEST_URL = `/questions?_expand=category&_expand=user&_embed=comments&_embed=favorites`
            if (queryParams?.categoryIds) {
                // [1, 2, 8]
                let categoryQueryParams = queryParams?.categoryIds?.map(c => `categoryId=${c}`) // ['categoryId=1', 'categoryId=2', 'categoryId=8']
                categoryQueryParams = queryParams?.categoryIds?.map(c => `categoryId=${c}`).join("&") // categoryId=1&categoryId=2&categoryId=8
                REQUEST_URL += `&${categoryQueryParams}`
            }

            if (queryParams?.query) {
                REQUEST_URL += `&q=${queryParams?.query}`
            }

            if (!queryParams?.query && !queryParams?.categoryIds) {
                const userCategoryID = rootGetters["users/currentUser"]?.categoryId;
                REQUEST_URL += `&categoryId=${userCategoryID}`
            }

            // _expand=category => questions array'inde categoryId = categories araması yapıp dokümani buraya ekliyor..
            appAxios.get(REQUEST_URL).then(({data: questionList}) => {
                commit("setList", questionList || [])
            })
        }
    },
    getters: {
        questionList: state => state.list
    }
}
