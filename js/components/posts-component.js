export default {
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
      <div v-if="posts.length > 0">
         <h2 class="mb-3">Posts</h2>
         <div v-for="blog in posts">
            <div class="card mb-3">
               <div class="card-body">
                  <h4 class="card-title"><a href="#" @click.prevent="viewPost(blog.id)">{{blog.title}}</a></h4>
                  <p class="card-text">{{blog.body.length < 250 ? blog.body : blog.body.substring(0, 249)+" [...]"}}</p>
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
      <div v-else>
         <h2 class="mb-3">No Posts Found...</h2>
      </div>
   `
};