<template>
  <div class="container">
    <div class="row mt-5">
      <PlaceList />
    </div>
  </div>
</template>

<script>
import PlaceList from "@/components/PlaceList"

export default {
  components: {
    PlaceList
  },
  data() {
    return {
      provideData : {
        placeList: [
          {
            id: 1,
            title: "Fethiye",
            description: "Çok güzel bir yer. Ölü denizde öldüm",
            link: "https://www.fethiye.com",
            image: "https://picsum.photos/536/354?random=1"
          },
          {
            id: 2,
            title: "Antalya",
            description: "Antalya güzel fakat şöyle böyle.. ya da şuradan gidiyorsun buraya.",
            link: "https://www.fethiye.com",
            image: "https://picsum.photos/536/354?random=2"
          },
          {
            id: 3,
            title: "Muğla",
            description: "Burada gidebileceğiniz bir sürü tarihi mekan var kaçırmayın",
            link: "https://www.fethiye.com",
            image: "https://picsum.photos/536/354?random=3"
          },
          {
            id: 4,
            title: "Mardin",
            description: "Doğunun incisi. Gün doğuşunu izleyebileceğiniz yegane yer.",
            link: "https://www.fethiye.com",
            image: "https://picsum.photos/536/354?random=4"
          },
        ],
        cardColor : "#efefef",
      }
    }
  },
  provide(){
    return {
      providedPlaceList : this.provideData.placeList,
      cardColor : this.provideData.cardColor,
      deleteItem : this.deleteItem,
      addItem : this.addNewPlace
    }
  },
  methods: {
    addNewPlace(item) {
      this.provideData.placeList.push({
        id: new Date().getTime(),
        ...item,
        title : `${item.title} #${new Date().getTime()}`
      })
    },
    deleteItem(itemId) {
      console.log(itemId);
      const itemIndex = this.provideData.placeList.findIndex(i => i.id === itemId)
      this.provideData.placeList.splice(itemIndex, 1);
    }
  },
  watch : {
    // "providedData.placeList"(placeList){
    //   console.log(placeList);
    // }
    "providedData.placeList" : {
      deep : true,
      handler(placeList){
        console.log(placeList)
      }
    }
  }
}
</script>
