const contacts = {
    namespaced : true,
    state: {
        list: ["Microfost", "Zapple", "Foggle", "Hacebook"]
    },
    mutations: {
        setItem(state, itemName) {
            state.list.push(itemName)
        }
    },
    getters: {
        _itemList: state => state.list
    }
}

export default contacts;
