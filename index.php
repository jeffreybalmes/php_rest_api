<?php include('inc/header.php'); ?>
<?php include('inc/navbar.php'); ?>

   <div class="container">
      <div class="row mt-4">
         <div class="col-md-8">
            <h2 class="mb-3">Posts</h2>
            <div class="card mb-3">
               <div class="card-body">
                  <h5 class="card-title"><a href="single.html">Web Developer</a></h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               </div>
               <div class="card-footer">
                  <small class="text-muted">Technology, Science, Robotics</small>
                  <small class="text-muted float-right">Last updated 3 mins ago</small>
               </div>
            </div> <!-- /.card -->
            <div class="card mb-3">
               <div class="card-body">
                  <h5 class="card-title"><a href="#">Web Developer</a></h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                     This content is a little bit longer.</p>
               </div>
               <div class="card-footer">
                  <small class="text-muted">Technology, Science, Robotics</small>
                  <small class="text-muted float-right">Last updated 3 mins ago</small>
               </div>
            </div> <!-- /.card -->
            <div class="card mb-3">
               <div class="card-body">
                  <h5 class="card-title"><a href="#">Web Developer</a></h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                     This content is a little bit longer.</p>
               </div>
               <div class="card-footer">
                  <small class="text-muted">Technology, Science, Robotics</small>
                  <small class="text-muted float-right">Last updated 3 mins ago</small>
               </div>
            </div> <!-- /.card -->
            <div class="form-group text-center mt-4">
               <button class="btn btn-default">Load more...</button>
            </div>

         </div> <!-- /.col-md-8 -->

         <?php include('inc/sidebar.php'); ?>
      </div>
   </div>

<?php include('inc/footer.php'); ?>