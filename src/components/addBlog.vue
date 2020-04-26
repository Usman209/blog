<template>
<div id="add-blog">
    <h2>Add New Blog Post</h2>
    <form v-if="!submitted">
     <label>Blog Title</label>
    <input type="text" v-model.lazy="blog.title" required>
    <label>Blog Content</label>
     <!-- an example of input binding is v-model.lazy.trim . as we add blog we prevernt it not update live . instead on live. it show when whole paragraph complete. -->
    <textarea v-model.lazy.trim="blog.content"></textarea>


   <div id="checkboxes">
<label>Node-Vue</label>
<input type="checkbox" value="Mevn" v-model="blog.type">
<label>Node-React</label>
<input type="checkbox" value="Mern" v-model="blog.type">
<label>Node-Angular</label>
<input type="checkbox" value="Mean" v-model="blog.type">

</div>
<label>Authors:</label>

<select v-model="blog.author">

<option v-for="author in authors" :key="author"> {{author}}</option>
</select>

<button v-on:click.prevent="post1">Add Blog</button>
<button v-on:click.prevent="post2">axios Add Blog</button>

    </form>

    <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
    </div>



<div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Developer Type</p>
<ul>
    <li v-for="types in blog.type" :key="types">{{types}}</li>
</ul>
<p>Author:{{blog.author}}</p>
        </div>
    
</div>




</template>

<script>
import axios from 'axios';

export default {
    
    data(){
        return{
            blog:{
                title:'',
                content:'',
                type:[],
                author:''
            },
            authors:['AAA','BBB','CCC'],
            submitted:false
        }

    },
    methods:{

        post1:function(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title:this.blog.title,
                content:this.blog.content,
                userId:1
            }).then(function(data){
                console.log(data)
                this.submitted=true
            })
        },
    post2() {
    axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    //   body: this.postBody
     title:this.blog.title,
    content:this.blog.content,
    userId:1
    })
    .then(response => {
        alert("Form was submitted successfully");
        console.log(response.data)
        this.submitted=true

        return response
    })
    .catch(e => {
      this.errors.push(e)
    })

    },
    }
}
</script>
<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
display: inline-block;;
margin-right: 10px;
}
#checkboxes label{
    display: inline-block;;
}
</style>