import {createStore} from 'vuex'

const store = createStore({
    state: {
        fullName: "Defne Kandemir",
        itemList: [
            {id: 1, text: "Masa"},
            {id: 2, text: "Kürek"},
            {id: 3, text: "Lavabo"},
            {id: 4, text: "Tencere"},
        ],
        currentUser: {
            username: "gkandemir",
            password: "123123123",
            permissions: []
        }
    },
    mutations: {
        setNewItem(state, itemValue) {
            state.itemList.push({
                id: new Date().getTime(),
                text: itemValue
            })
        }
    },
    actions: {
        addNewItem({commit}, itemValue) {
            setTimeout(() => {
                commit("setNewItem", itemValue);
            }, 1000)
        }
    },
    getters: {
        _currentUser(state) {
            const tmpUser = {
                ...state.currentUser
            }
            delete tmpUser.password
            delete tmpUser.permissions
            return tmpUser
        },
        _itemList: state => state.itemList,
        // _itemList(state){
        //     return state.itemList
        // }
    }
});

export default store;
