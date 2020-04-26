<template>
<div id="add-blog">
    <h2>Add New Blog Post</h2>
    <form>
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
    </form>











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
export default {
    
    data(){
        return{
            blog:{
                title:'',
                content:'',
                type:[],
                author:''
            },
            authors:['AAA','BBB','CCC']
        }

    },
    methods:{

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