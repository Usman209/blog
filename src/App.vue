<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>
    <h3>Mid</h3>
    <list-blog></list-blog>
  </div>
</template>

<script>
// import addBlog from './components/addBlog'
import showBlogs from "./components/showBlogs";
import listBlogs from "./components/listBlog";

export default {
  components: {
    // 'add-blog':addBlog,
    "show-blog": showBlogs,
    "list-blog": listBlogs,
  },
};
</script>

<style></style>
