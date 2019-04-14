export default {
   name: 'create',
   props: ['cats'],
   data() {
      return {
         status: {},
         post: {
            title: '',
            body: '',
            category_id: ''
         }
      }
   },
   methods: {
      addPost(post) {
         fetch("api/post/create.php", {
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(post)
         })
         .then(response => response.json())
         .then((message) => {
            this.status = message;
            this.post.title = '';
            this.post.body = '';
            this.post.category_id = '';
         })
      },
      back() {
         this.$emit('back');
      }
   },
   template: `
      <div class="col-9">
         <span class="alert alert-success float-right mt-4" role="alert">{{status.message}}</span>
         <h2 class="ml-5 mt-4 mb-3">New Post</h2>
         <form class="ml-5" method="post" @submit.prevent="addPost(post)">
            <div class="row">
               <div class="col-md-8">
                  <div class="form-group">
                     <label>Title</label>
                     <input type="text" class="form-control" name="title" v-model="post.title">
                  </div>
                  <div class="form-group">
                     <label>Body</label>
                     <textarea class="form-control" name="body" rows="9" v-model="post.body"></textarea>
                  </div>
                  <label class="my-1 mr-2">Categories</label>
                  <select class="custom-select my-1 mr-sm-2" name="category_id" v-model="post.category_id">
                     <option selected>Choose...</option>
                     <option v-for="category in cats" :value="category.id">{{category.name}}</option>
                  </select>
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