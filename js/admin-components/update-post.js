export default {
   name: 'update',
   props: ['cats', 'blog'],
   data() {
      return {
         status: {},
      }
   },
   methods: {
      updatePost(blog) {
         fetch("api/post/update.php", {
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(blog)
         })
         .then(response => response.text())
         .then((message) => {
            this.status = message;
            this.back();
         })
      },
      back() {
         this.$emit('back');
      }
   },
   template: `
      <div class="col-9">
         <span class="alert alert-success float-right mt-4" role="alert">{{status.message}}</span>
         <h2 class="ml-5 mt-4 mb-3">Update Post</h2>
         <form class="ml-5" method="post" @submit.prevent="updatePost(blog)">
            <div class="row">
               <div class="col-md-8">
                  <div class="form-group">
                     <label>Title</label>
                     <input type="text" class="form-control" name="title" v-model="blog.title">
                  </div>
                  <div class="form-group">
                     <label>Body</label>
                     <textarea class="form-control" name="body" rows="9" v-model="blog.body">
                        {{blog.body}}
                     </textarea>
                  </div>
                  <label class="my-1 mr-2">Categories</label>
                  <select class="custom-select my-1 mr-sm-2" name="category_id" v-model="blog.category_id">
                     <option v-for="category in cats" :value="category.id" :selected="blog.category_name == category.name">
                        {{category.name}}
                     </option>
                  </select>
                  <input type="hidden" name="id" v-model="blog.id"/>
                  <div class="form-group mt-4">
                     <button type="submit" class="btn btn-primary" name="submit">Save</button>
                     <a href="#" @click.prevent="back()" class="btn btn-secondary">Cancel</a>
                  </div>
               </div> <!-- /.col-md-8 -->
               <div class="col-md-4"></div> <!-- /.col-md-4 -->
            </div> <!-- /.row -->
         </form>
      </div>
   `
}