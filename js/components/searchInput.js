export default {
   name: 'searchInput',
   data() {
      return {
         value: ''
      }
   },
   methods: {
      filter(value) {
         this.$emit('updateList', value);
      }
   },
   template: `
      <div class="input-group mb-4">

         <input type="text" class="form-control"
            v-model="value"
            @keyup="filter(value)"
            @keyup.13="filter(value)"
         placeholder="Search...">

         <div class="input-group-append">
            <button class="btn btn-outline-danger" type="button" @click.prevent="value = ''; filter(value)">x</button>
         </div>
      </div> <!-- /.input-group mb-4 -->
   `
}