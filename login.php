<?php include('inc/header.php'); ?>
   <div class="container">
      <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
         <div class="card text-center w-25">
            <div class="card-header bg-primary text-white">
               <h5>Login Form</h5>
            </div>
            <div class="card-body">
               <form>
                  <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group">
                     <button type="submit" class="btn btn-primary">Login</button>
                     <a href="index.html" type="submit" class="btn btn-secondary">Cancel</a>
                  </div>
                  <small id="emailHelp" class="form-text text-muted"><a href="register.html">Sign Up</a></small>
               </form>
            </div>
            <div class="card-footer text-muted">
               &copy; 2018 Company
            </div>
         </div> <!-- /.card -->
      </div>
   </div>
<?php include('inc/footer.php'); ?>
