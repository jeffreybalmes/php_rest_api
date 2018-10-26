export default {
   name: 'sidebar',
   props: ['cats'],
   data() {
      return {
         value: '',
      }
   },
   methods: {
      filter(value) {
         this.$emit('updateList', value);
      }
   },
   template: `
      <div class="col-md-4">
         <div class="input-group mb-4">
            <div class="input-group-prepend">
               <span class="input-group-text">Search</span>
            </div>
            <input type="text" class="form-control" v-model="value" @keyup="filter(value)">
         </div> <!-- /.input-group mb-4 -->
         <h4 class="mb-4">Categories</h4>
         <ul class="list-group list-group-flush">
            <li v-for="category in cats" class="list-group-item"><a href="#" @click.prevent="filter(category.name)">{{category.name}}</a></li>
         </ul>
      </div> <!-- /.col-md-4 -->
   `
}