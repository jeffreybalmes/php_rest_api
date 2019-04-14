import searchInput from './searchInput.js';
import categoryList from './categoryList.js';

export default {
   name: 'sidebar',
   components: {
      'search-box': searchInput,
      'category-list': categoryList
   },
   props: ['cats', 'show'],
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
      <div class="col-md-4">

         <search-box
            v-if="show"
            @updateList="filter($event)">
         </search-box>

         <category-list
            :cats="cats"
            @updateList="filter($event)">
         </category-list>

      </div> <!-- /.col-md-4 -->
   `
}