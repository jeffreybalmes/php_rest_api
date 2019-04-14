export default {
   name: 'categoryList',
   props: ['cats'],
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
      <div>
         <h4 class="mb-4">Categories</h4>
         <ul class="list-group list-group-flush">
            <li v-for="category in cats" class="list-group-item">
               <a href="#" @click.prevent="filter(category.name)">{{category.name}}</a>
            </li>
         </ul>
      </div>
   `
}