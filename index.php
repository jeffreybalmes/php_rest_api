<?php include('inc/header.php'); ?>
<?php include('inc/navbar.php'); ?>
   <div class="container">
      <div class="row mt-4">
         <div class="col-md-8">
            <h2 class="mb-3">Posts</h2>

            <div id="app">
               <posts-component :post="blog" v-for="blog in blogs"></posts-component>
            </div>

            <div class="form-group text-center mt-4">
               <button class="btn btn-default">Load more...</button>
            </div>
         </div> <!-- /.col-md-8 -->
         <?php include('inc/sidebar.php'); ?>
      </div>
   </div>

<?php include('inc/footer.php'); ?>