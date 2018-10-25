Vue.component('post-component', {
   template: `
      <div class="col-md-8">
         <h2><?php echo $post_arr['title']; ?></h2>
         <small class="text-muted"><?php echo $post_arr['category_name']; ?></small>
         <p class="card-text mt-3 mb-2"><?php echo $post_arr['body']; ?></p>
         <div class="form-group mt-4">
            <a href="index.php" class="btn btn-default">&laquo; Back</a>
         </div>
      </div>
   `
});

Vue.component('posts-component', {
   props: ['post'],
   data() {
      return {
         infos: []
      }
   },
   methods: {
      viewSingle() {
         this.$emit('viewSingle', 'testing')
      }
   },
   template: `
      <div class="card mb-3">
         <div class="card-body">
            <h4 class="card-title"><button @click="viewSingle()">{{post.title}}</button></h4>
            <p class="card-text">{{post.body}}</p>
         </div>
         <div class="card-footer">
            <small class="text-muted">{{post.category_name}}</small>
            <small class="text-muted float-right">{{post.created_at}}</small>
         </div>
      </div>
   `
})


var app = new Vue({
   el: '#app',
   data: {
      blogs: [],
      component: 'posts-component'
   },
   methods: {
      read_single(id) {
         console.log("viewing...!");
         fetch("api/read_single.php?id=" + id)
            .then(response => response.json())
            .then((data) => {
               this.infos = data;
               console.log(this.infos);
            })
      },
      sayHi() {
         console.log('hi');
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
         <h1 @viewSingle="sayHi()">Hi to all.</h1>
         <component :post="blog" v-for="blog in blogs" :is="component" :component="component"></component>
      </div>
   `
});