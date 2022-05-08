<template>
<div>
  <h3>index page</h3>
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData({ app : { $axios : axios}}) {
    // console.log(vm);
    return axios.get("/questions").then(({ data : list}) => {
      return { list };
    })
  },
  methods: {},
}
</script>
