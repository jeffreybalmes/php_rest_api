import searchInput from '../components/searchInput.js';

export default {
   name: 'admin-table',
   components: {
      'search-box': searchInput,
   },
   props: ['posts'],
   data() {
      return {
         value: ''
      }
   },
   methods: {
      filter(value) {
         this.$emit('updateList', value);
      },
      editPost(id) {
         this.$emit('editPost', id);
      },
      showAddForm() {
         this.$emit('showAddForm');
      },
      deletePost(...args) {
         this.$emit('deletePost', args);
      }
   },
   template: `
      <div class="col-10 mb-5">
         <h2 class="mb-3 ml-1 mt-4">Posts</h2>
         <a href="create.php" class="btn btn-primary mr-5" @click.prevent="showAddForm()">Add Post</a>
         <div class="float-right">
            <search-box @updateList="filter($event)"></search-box>
         </div>
         <div class="table-responsive">
            <table class="table table-striped">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Title</th>
                     <th scope="col">Body</th>
                     <th scope="col">Category</th>
                     <th scope="col">Command</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="blog, i in posts">
                     <th scope="row">{{blog.id}}</th>
                     <td>{{blog.title}}</td>
                     <td>
                        {{blog.body.length < 50 ? blog.body : blog.body.substring(0, 49)+" [...]"}}
                     </td>
                     <td>{{blog.category_name}}</td>
                     <td>
                        <button @click="editPost(blog.id)" class="btn btn-outline-secondary btn-sm">Edit</button>
                        <button class="btn btn-outline-danger btn-sm" @click="deletePost(blog.id, i)">Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div> <!-- /.col-10 -->
   `
}