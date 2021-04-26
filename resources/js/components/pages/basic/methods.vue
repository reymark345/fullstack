<template>
    <div>
      <h1>The number is : {{views}}</h1>
      <button @click="updateCounter(1)">Increase</button>
      <button @click="updateCounter(-1)">Increase</button>
      <br>
      <br><br>

      <div v-for ="(user,i) in blogs" :key="i" v-if="blogs.length">
          <h1>{{user.title}}</h1>
          <p>{{user.post}}</p>
    </div>
    <br>
    <br>
    <br>
    
    <div>
        <h1 v-if="showItem">show item if "showItem" is true</h1> 
        <h1 v-else>show item if "showItem" is false</h1>

    </div>

    <button @click="showItem = !showItem">Change </button>



    </div>
</template> 
<script>
export default {
    data(){
        return{
            views : 0,
            blogs : [],
            showItem : false

        }
    },
    methods:{
        updateCounter(number){
            this.views += number;
        },
        changeshowitem(){
            this.showItem = !this.showItem

        }
    },
    created(){

        this.views = 100
        let posts = [{title: 'this is blog 1', 'post' : 'this is blog post 1', id:1},
                {title: 'this is blog 2', 'post' : 'this is blog post 2', id:2},
                {title: 'this is blog 3', 'post' : 'this is blog post 3', id:3},
                {title: 'this is blog 4', 'post' : 'this is blog post 4', id:4},]
        this.blogs = posts
    }
}
</script>