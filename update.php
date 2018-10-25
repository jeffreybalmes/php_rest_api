<?php include('inc/header.php'); ?>
<?php include('inc/navbar.php'); ?>

   <div class="container-fluid">
      <div class="row">
         <?php include('inc/admin-menu.php'); ?>
         <div class="col-9">
            <h2 class="mb-3 m-5">Update Post</h2>
            <form class="ml-5">
               <div class="row">
                  <div class="col-md-8">
                     <div class="form-group">
                        <label for="exampleInputPassword1">Title</label>
                        <input type="text" class="form-control" id="exampleInputPassword1">
                     </div>
                     <div class="form-group">
                        <label for="exampleInputEmail1">Body</label>
                        <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows="6"></textarea>
                     </div>

                     <div class="form-group">
                        <button type="submit" class="btn btn-primary">Update</button>
                        <a href="index.html" class="btn btn-secondary">Cancel</a>
                     </div>
                  </div> <!-- /.col-md-8 -->
                  <div class="col-md-4">
                     <div class="ml-5">
                        <div class="form-group mb-4">
                           <div class="mb-2">Categories</div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck1">
                              <label class="form-check-label" for="gridCheck1">
                                 Technology
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck1">
                              <label class="form-check-label" for="gridCheck1">
                                 Robotics
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck1">
                              <label class="form-check-label" for="gridCheck1">
                                 Science
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck1">
                              <label class="form-check-label" for="gridCheck1">
                                 System
                              </label>
                           </div>
                           <input type="text" class="form-control form-control-sm mt-3 w-75" id="colFormLabelSm" placeholder="add new category...">
                        </div>
                     </div>
                  </div> <!-- /.col-md-4 -->
               </div> <!-- /.row -->
            </form>
         </div>
      </div>
   </div>

<?php include('inc/footer.php'); ?>
