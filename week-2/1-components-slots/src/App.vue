<template>
  <div class="row mt-5">
    <div class="col-6 offset-3">
      <div class="list-group">
        <ListItem v-for="item in itemList" :key="item.id" :item="item"/>
      </div>
    </div>
  </div>

  <app-modal>
    <!--      <template #header>-->
    <!--        <h1 class="text-danger">Delete Item</h1>-->
    <!--      </template>-->
    <!--    <template v-slot:header>-->
    <template #header>
      <h3 class="text-danger">Header</h3>
    </template>

    <!--   <template v-slot:content>-->
    <template #content>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor dolore earum enim laborum odit
        omnis praesentium, quasi recusandae sapiente sed sunt vero vitae! Beatae est non temporibus. Aspernatur,
        officiis.
      </div>
    </template>

    <template v-slot:footer>
      <h4>Footer</h4>
    </template>


    <h1 class="bg-danger">Default Slots</h1>
  </app-modal>
</template>

<script>
import ListItem from "@/components/ListItem" // @ = /src/
import appModal from "@/components/appModal" // @ = /src/
export default {
  components: {
    ListItem,
    appModal
  },
  data() {
    return {
      itemList: [
        {id: 1, title: "Haber 1", content: "<strong>Bu Haber Kaçmaz</strong>"},
        {
          id: 2,
          title: "Haber 2",
          content: `<a target="_blank" href="https://youtube.com/kablosuzkedii">kablosuzkedi</a>`
        },
        {id: 3, title: "Haber 3", content: `<h3>Bu Nasıl Bir Rezalet!</h3>`},

      ],

    }
  }
}
</script>
