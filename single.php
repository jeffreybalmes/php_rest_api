<?php
   include_once 'config/Database.php';
   include_once 'models/Post.php';

   // Instantiate DB & connect
   $database = new Database();
   $db = $database->connect();

   // Instantiate blog post object
   $post = new Post($db);

   // Get ID
   $post->id = isset($_GET['id']) ? $_GET['id'] : die();

   // Get Post
   $post->read_single();

   // Create array
   $post_arr = array(
      'id' => $post->id,
      'title' => $post->title,
      'body' => $post->body,
      'author' => $post->author,
      'category_id' => $post->category_id,
      'category_name' => $post->category_name,
      'created_at' => $post->created_at
   );
?>
<?php include('inc/header.php'); ?>
<?php include('inc/navbar.php'); ?>

   <div class="container">
      <div class="row mt-4">
         <div class="col-md-8">
            <h2><?php echo $post_arr['title']; ?></h2>
            <small class="text-muted"><?php echo $post_arr['category_name']; ?></small>
            <p class="card-text mt-3 mb-2"><?php echo $post_arr['body']; ?></p>
            <div class="form-group mt-4">
               <a href="index.php" class="btn btn-default">&laquo; Back</a>
            </div>
         </div> <!-- /.col-md-8 -->
         <div class="col-md-4">
            <div class="input-group mb-4">
               <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
               </div>
               <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div> <!-- /.input-group mb-4 -->
            <h4 class="mb-4">Categories</h4>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">Technology</li>
               <li class="list-group-item">Science</li>
               <li class="list-group-item">Artificial Intelligence</li>
               <li class="list-group-item">Robotics</li>
               <li class="list-group-item">System</li>
            </ul>
         </div> <!-- /.col-md-4 -->
      </div>
   </div>

<?php include('inc/header.php'); ?>
