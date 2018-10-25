<?php include('inc/header.php'); ?>
   <div class="container">
      <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
         <div class="card text-center w-50">
            <div class="card-header bg-primary text-white">
               <h5>Registration Form</h5>
            </div>
            <div class="card-body">
               <form>
                  <div class="form-group">
							<label for="exampleInputPassword1">Username</label>
							<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username">
                  </div>
                  <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group">
							<label for="exampleInputPassword1">Confirm Password</label>
							<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password">
                  </div>
                  <div class="form-group">
							<button type="submit" class="btn btn-primary">Register</button>
                  </div>
						<small id="emailHelp" class="form-text text-muted"><a href="login.html">Have account already?</a></small>
               </form>
            </div>
            <div class="card-footer text-muted">
               &copy; 2018 Company
            </div>
         </div> <!-- /.card -->
      </div>
   </div>
<?php include('inc/footer.php'); ?>
