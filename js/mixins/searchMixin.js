export default {
   computed: {
      filteredBlogs() {
         return this.blogs.filter((blog) => blog.title.match(this.filter) || blog.category_name.match(this.filter) || blog.body.match(this.filter));
      }
   }
}