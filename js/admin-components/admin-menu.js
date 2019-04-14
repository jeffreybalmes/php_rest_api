export default {
   name: 'admin-menu',
   data() {
      return {

      }
   },
   props: ['posts', 'cats', 'isActive'],
   methods: {
      showPosts() {
         this.$emit('showPosts');
      },
      showCategories() {
         this.$emit('showCategories');
      }
   },
   template: `
      <div class="col-2 bg-dark">
         <div class="list-group mt-4 mx-2">
            <a href="#"
               @click.prevent="showPosts()"
               :class="{active: isActive == 'post-table'}"
               class="list-group-item list-group-item-action">
               Posts <span class="badge badge-pill bg-secondary text-white float-right">{{ posts.length }}</span>
            </a>
            <a href="#"
               @click.prevent="showCategories()"
               :class="{active: isActive == 'category-table'}"
               class="list-group-item list-group-item-action">
               Categories <span class="badge badge-pill bg-secondary text-white float-right">{{ cats.length }}</span>
            </a>
         </div>
      </div>
   `
}