<script>
import {mapGetters} from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  data: () => ({
    favoriteList: [],
  }),
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser",
      isAuthenticated : "users/isAuthenticated"
    }),
    createdAtInfo() {
      return this._createdAtInfo(this.item.user.full_name, this.item.created_at)
    },
    commentCount() {
      const count = this.item?.comments?.length || 0;
      return count > 0 ? `${count} cevap` : 'Cevap Yok'
    },
    lastCommentDate() {
      const lastComment = this.item?.comments?.[this.item?.comments.length - 1]
      return lastComment ? this.timesAgo(lastComment.created_at) : "-"
    },
    isFavorite() {
      return Boolean(this.favoriteItem)
    },
    favoriteItem() {
      return this.favoriteList.find(f => f.questionId === this.item.id && f.userId === this.currentUser.id);
    },
    favoriteClasses() {
      return {
        "text-muted": !this.isFavorite,
        "text-primary": this.isFavorite,
      }
    }
  },
  methods: {
    toggleFavorite() {

      let REQUEST_METHOD = "POST";
      let REQUEST_URL = `/favorites`;
      let REQUEST_DATA = {
        userId: this.currentUser.id,
        questionId: this.item.id,
        created_at: new Date()
      };

      if(this.isFavorite){
        REQUEST_METHOD = "DELETE";
        REQUEST_URL += `/${this.favoriteItem.id}`;
        REQUEST_DATA = undefined;
      }

      this.$appAxios({
        method : REQUEST_METHOD,
        url : REQUEST_URL,
        data : REQUEST_DATA
      }).then(({ status, data : newFavorite }) => {
        if(status === 200 && REQUEST_METHOD === "DELETE") this.favoriteList = this.favoriteList.filter(f => f.id !== this.favoriteItem.id)
        if(status === 201 && REQUEST_METHOD === "POST") this.favoriteList.push(newFavorite);
      })

      // if (this.isFavorite) {
      //   this.$appAxios.delete(`/favorites/${this.favoriteItem.id}`).then(({status}) => {
      //     if (status === 200) this.favoriteList = this.favoriteList.filter(f => f.id !== this.favoriteItem.id)
      //   })
      // } else {
      //   const favoriteObject = {
      //     userId: this.currentUser.id,
      //     questionId: this.item.id,
      //     created_at: new Date()
      //   }
      //   this.$appAxios.post("/favorites", favoriteObject).then(({status, data: newFavorite}) => {
      //     if (status === 201) this.favoriteList.push(newFavorite);
      //   })
      // }
    }
  },
  mounted() {
    const {favorites: favoriteList} = this.item;
    this.favoriteList = favoriteList || [];
  }
}
</script>
<template>
  <div class="card text-left mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title">{{ item.title }}</h5>
        <span><i v-if="isAuthenticated" @click="toggleFavorite" class="fa fa-heart" :class="favoriteClasses"></i></span>
      </div>
      <div class="mt-3">
        <p class="text-muted" v-html="item.details"></p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="custom-text-light">
            <i class="fa fa-user-circle me-1"></i>
            {{ createdAtInfo }}
          </div>
          <div class="custom-text-light">
            {{ item.category.title || "-" }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-muted py-3 question-footer d-flex justify-content-between align-items-center">
      <div>
              <span class="comment-container">
                <i class="custom-text-light fa fa-user-circle me-1"></i>
                <small class="text-dark">{{ commentCount }}</small>
              </span>
        <span class="custom-seperator"> | </span>
        <small class="custom-text-light">{{ lastCommentDate }}</small>
      </div>
      <button @click="$router.push({ name : 'QuestionDetailView', params : { id : item.id}})"
              class="btn-sm btn btn-primary">Soruyu görüntüle
      </button>
    </div>
  </div>
</template>
