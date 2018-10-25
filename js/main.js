Vue.component('post-component', {
   props: ['row'],
   methods: {
      home() {
         this.$emit('home');
      }
   },
   template: `
      <div>
         <h2>{{ row.title }}</h2>
         <small class="text-muted">{{ row.category_name }}</small>
         <p class="card-text mt-3 mb-2">{{ row.body }}</p>
         <div class="form-group mt-4">
            <button @click="home()" class="btn btn-default">&laquo; Back</button>
         </div>
      </div>
   `
});

Vue.component('posts-component', {
   props: ['posts'],
   data() {
      return {

      }
   },
   methods: {
      viewPost(id) {
         this.$emit('viewPost', id);
      }
   },
   template: `
      <div>
         <h2 class="mb-3">Posts</h2>
         <div v-for="blog in posts">
            <div class="card mb-3">
               <div class="card-body">
                  <h4 class="card-title"><a href="#" @click.prevent="viewPost(blog.id)">{{blog.title}}</a></h4>
                  <p class="card-text">{{blog.body}}</p>
               </div>
               <div class="card-footer">
                  <small class="text-muted">{{blog.category_name}}</small>
                  <small class="text-muted float-right">{{blog.created_at}}</small>
               </div>
            </div>
         </div>
         <div class="form-group text-center mt-4">
            <button class="btn btn-default">Load more...</button>
         </div>
      </div>
   `
})


var app = new Vue({
   el: '#app',
   data: {
      blogs: [],
      post: {},
      all: true
   },
   methods: {
      readPost(id) {
         fetch("api/read_single.php?id=" + id)
            .then(response => response.json())
            .then((data) => {
               this.post = data;
               console.log(data);
            });
         this.all = false
      },
      back() {
         this.all = true;
      }
   },
   mounted() {
      console.log("mounted!");
      fetch("api/read.php")
         .then(response => response.json())
         .then((data) => {
            this.blogs = data;
         })
   },
   template: `
      <div>
         <posts-component v-if="all" :posts="blogs"  @viewPost="readPost($event)"></posts-component>
         <post-component v-else :row="post" @home="back()"></post-component>
      </div>
   `
});