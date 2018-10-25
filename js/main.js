Vue.component('posts-component', {
   props: ['post'],
   template: `
      <div class="card mb-3">
         <div class="card-body">
            <h4 class="card-title"><a :href="'single.php?id='+post.id">{{post.title}}</a></h4>
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
      blogs: []
   },
   mounted() {
      console.log("mounted!");
      fetch("api/read.php")
         .then(response => response.json())
         .then((data) => {
            this.blogs = data;
         })
   }
});