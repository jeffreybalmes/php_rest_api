export default {
   name: 'category-table',
   props: ['cats'],
   data() {
      return {
         status: {},
         edit: false,
         category: {
            name: '',
            id: ''
         },
         info: 'add new category...'
      }
   },
   methods: {
      addCategory() {
         if (this.category.name == '') {
            alert('Please give a category name.');
         } else {
            if (this.edit === false) {
               // Add
               fetch("api/category/create.php", {
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                  },
                  method: 'POST',
                  body: JSON.stringify({
                     name: this.category.name
                  }),
               })
                  .then(response => response.json())
                  .then((message) => {
                     this.$emit('updateCategoryList');
                     this.status = message;
                     this.category.name = ''
                     this.category.id = ''
                     this.info = 'add new category...'
                  })
            } else {
               // Update
               fetch("api/category/update.php", {
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                  },
                  method: 'PUT',
                  body: JSON.stringify(this.category)
               })
                  .then(response => response.json())
                  .then((message) => {
                     this.$emit('updateCategoryList');
                     this.status = message;
                     this.edit = false;
                     this.category.name = ''
                     this.category.id = ''
                     this.info = 'add new category...'
                  })
            }
         }
      },
      editCategory(cat) {
         this.edit = true;
         this.category.name = cat.name;
         this.category.id = cat.id;
         this.info = `edit ${cat.name} category`;
      },
      deleteCategory(...args) {
         this.$emit('deleteCategory', args);
      }
   },
   template: `
      <div class="col-5 mb-5">
         <h2 class="mb-3 ml-1 mt-4">Categories</h2>

         <form method="post" @submit.prevent="addCategory()">
            <div class="input-group mb-3">
               <input type="text"
                  class="form-control"
                  name="name"
                  :placeholder="info"
                  v-model="category.name">

               <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">Save</button>
               </div>
            </div>
         </form>

         <div class="table-responsive">
            <table class="table table-striped">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Category Name</th>
                     <th scope="col">Command</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="cat, i in cats">
                     <th scope="row">{{cat.id}}</th>
                     <td>{{cat.name}}</td>
                     <td>

                        <button
                           @click="editCategory(cat)"
                           class="btn btn-outline-secondary btn-sm">
                           Edit
                        </button>

                        <button
                           class="btn btn-outline-danger btn-sm"
                           @click="deleteCategory(cat.id, i)">
                           Delete
                        </button>

                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div> <!-- /.col-10 -->
   `
}