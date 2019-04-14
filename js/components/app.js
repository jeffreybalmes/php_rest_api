import PostsList from './posts-component.js';
import PostSingle from './post-component.js';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js';
import searchBlogs from '../mixins/searchMixin.js';
import Footer from './footer.js';

export default {
   name: 'App',
   components: {
      'posts-component': PostsList,
      'post-component': PostSingle,
      'app-navbar': Navbar,
      'app-sidebar': Sidebar,
      'app-footer': Footer
   },
   data() {
      return {
         allPosts: true,
         blogs: [],
         post: {},
         filter: '',
         categories: [],
      }
   },
   methods: {
      readPost(id) {
         fetch("api/post/read_single.php?id=" + id)
            .then(response => response.json())
            .then((data) => {
               this.post = data;
            });
         this.allPosts = false
      },
      back() {
         this.allPosts = true;
      },
      updateList(search) {
         this.filter = search;
      }
   },
   mounted() {
      console.log("mounted!");
      fetch("api/post/read.php")
         .then(response => response.json())
         .then((blogs) => {
            this.blogs = blogs;
         })
      fetch("api/category/read.php")
         .then(response => response.json())
         .then((categories) => {
            this.categories = categories;
         })
   },
   mixins: [searchBlogs],
   template: `
      <div>
         <app-navbar></app-navbar>
         <div class="container mb-5">
            <div class="row mt-4">

               <div class="col-md-8">
                  <posts-component
                     v-if="allPosts"
                     :posts="filteredBlogs"
                     @viewPost="readPost($event)">
                  </posts-component>

                  <post-component
                     v-else
                     :row="post"
                     @home="back()">
                  </post-component>
               </div> <!-- /.col-md-8 -->

               <app-sidebar
                  :cats="categories"
                  :show="allPosts"
                  @updateList="back(); updateList($event)">
               </app-sidebar>

            </div>
         </div>
         <app-footer></app-footer>
      </div>
   `
};