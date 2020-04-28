<template>
  <div v-theme:column="'wide'" id="show-blog">
    <h1>All blog posts</h1>
    <input type="text" v-model="search" placeholder="Search blog" />
    <div v-for="blog in filterBlog" :key="blog" class="single-blog">
      <!-- custom directive -->
      <h2 v-rainbow>{{ blog.title | to - uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        // console.log(data)
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "....";
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      },
    },
  },
  mixins: [searchMixin],
};
</script>
<style>
#show-blog {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
<style>
#show-blog {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
