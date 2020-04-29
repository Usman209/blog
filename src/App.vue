<template>
  <div>
    <app-header></app-header>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <router-view> </router-view>
    <!-- <list-blog></list-blog> -->
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlogs from "./components/showBlogs";
import header from "./components/header";

// import listBlogs from "./components/listBlog";

export default {
  components: {
    'add-blog':addBlog,
    'show-blog': showBlogs,
    'app-header':header

    // "list-blog": listBlogs,
  },
  data(){
    return{}
  }
};
</script>

<style></style>
