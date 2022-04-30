const products = {
    namespaced : true,
    state: {
        list: ["Bardak", "Defter", "Lamba", "Çaydanlık"]
    },
    mutations: {
        setItem(state, productName) {
            state.list.push(productName)
        }
    },
    getters: {
        _itemList: state => state.list,
        // _orderedList : state => state.list.sort((a,b) => a > b )
    },
}

export default products;
