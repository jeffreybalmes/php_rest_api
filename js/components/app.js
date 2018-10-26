import PostsList from './posts-component.js';
import PostSingle from './post-component.js';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js';

export default {
   name: 'App',
   components: {
      'posts-component': PostsList,
      'post-component': PostSingle,
      'app-navbar': Navbar,
      'app-sidebar': Sidebar
   },
   data() {
      return {
         blogs: [],
         post: {},
         all: true
      }
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
         <app-navbar></app-navbar>
         <div class="container">
            <div class="row mt-4">
               <div class="col-md-8">
                  <posts-component v-if="all" :posts="blogs"  @viewPost="readPost($event)"></posts-component>
                  <post-component v-else :row="post" @home="back()"></post-component>
               </div> <!-- /.col-md-8 -->
               <app-sidebar></app-sidebar>
            </div>
         </div>
      </div>
   `
};