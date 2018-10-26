export default {
   name: 'PostSingle',
   props: ['row'],
   methods: {
      home() {
         this.$emit('home');
      }
   },
   template: `
      <div>
         <h2>{{ row.title }}</h2>
         <small class="text-muted">{{ row.category_name }}</small>
         <p class="card-text mt-3 mb-2">{{ row.body }}</p>
         <div class="form-group mt-4">
            <button @click="home()" class="btn btn-default">&laquo; Back</button>
         </div>
      </div>
   `
};

