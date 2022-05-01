export default {
    data: () => ({
        permission: false
    }),
    methods: {
        getPermission() {
        }
    },
    computed: {
        globalPermission() {
            return this.permission
        }
    }
}
