<template>
  <div class="container">
    <div class="row mt-5">
      <!--      <app-card title="Kanada" description="Kanada Yazın Güzel Ama Kışın Allah Belasını Versin. -30 derece nedir abi yaa.." link="https://www.canada.gov.ca" image="https://picsum.photos/536/354" />-->
      <!--      <app-card title="Türkiye" description="Dünya'nın en güzel ve en kıymeti bilinmeyen ülkesi."  link="https://www.turkey.gov.tr" image="https://picsum.photos/seed/picsum/536/354" />-->
      <PlaceList :items="placeList" :addItem="addNewPlace" @delete-item="deleteItem"/>
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
      ]
    }
  },
  methods: {
    addNewPlace(item) {
      this.placeList.push({
        id: new Date().getTime(),
        ...item
      })
    },
    deleteItem(itemId) {
      this.placeList = this.placeList.filter(i => i.id !== itemId)
    }
  }
}
</script>
