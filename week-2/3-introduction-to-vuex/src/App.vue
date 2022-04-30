<template>
  <div class="container mt-5">
    <h3 class="text-center">Vuex</h3>
    <div class="row">
      <div class="col-6 offset-3 card p-2">
        <app-text/>
        {{ $store.state.currentUser }}
        <!--        {{ $store.state.fullName }}-->
        <!--        {{ $store.state.itemList }}-->
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6 offset-3 card p-2 mb-2">
        <input type="text" class="form-control" placeholder="Item Name" v-model="itemValue">
        <button class="btn btn-sm btn-primary mt-3" @click="addNewItem">Ekle</button>
      </div>
      <div class="col-6 offset-3 card p-2">
        <item-list/>
      </div>
    </div>
  </div>
</template>

<script>
import appText from "@/components/appText"
import itemList from "@/components/ItemList"
import {mapMutations} from "vuex";

export default {
  components: {
    appText, itemList
  },
  data() {
    return {
      itemValue: null
    }
  },
  methods: {
    ...mapMutations({
      setNewItem: "setNewItem"
    }),
    // customMethod(){}
    // addNewItem() {
    //   // this.$store.state.itemList.push(this.itemValue)
    //   this.$store.commit("setNewItem", this.itemValue)
    //   this.itemValue = null;
    // },
    // ...mapMutations(["setNewItem"])
    // ...mapActions(["addNewItem"])
    addNewItem() {
      // this.setNewItem(this.itemValue);
      this.$store.dispatch("addNewItem", this.itemValue)
      this.itemValue = null;
    },

  }
}
</script>
