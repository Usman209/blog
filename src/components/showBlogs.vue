<template>
    
    <div v-theme:column="'narrow'" id="show-blog">
<h1>All blog posts</h1>
<div v-for="blog in blogs" :key="blog" class="single-blog">
    <!-- custom directive -->
    <h2 v-rainbow>{{blog.title}}</h2>
    <article>{{blog.body}}</article>
</div>
</div>
</template>

<script>
// import axios from 'axios'
export default {
    data(){

    return{
        blogs:[]

    }
    },
    methods:{

    },
    created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        // console.log(data)
        this.blogs=data.body.slice(0,10);
    })
},
// created() {
    // axios.get(`http://jsonplaceholder.typicode.com/posts`)
    // .then(response => {
    // JSON responses are automatically parsed.
    // this.posts = response.data
    //   this.blogs = response.body.slice(0,10)  // slice not working with axios 


// }).catch(e => {
 //console.log(e)
//})

}


</script>



<style>
#show-blog{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
<style>
#show-blog{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>