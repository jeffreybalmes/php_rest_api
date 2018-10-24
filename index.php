<?php
   include_once 'config/Database.php';
   include_once 'models/Post.php';

   // Instantiate DB & connect
   $database = new Database();
   $db = $database->connect();

   // Instantiate blog post object
   $post = new Post($db);

   // Blog post query
   $result = $post->read();
   // Get row count
   $num = $result->rowCount();

   // Check if any posts
   if ($num > 0) {

      // Post array
      $post_arr = array();

      while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
         extract($row);

         $post_item = array(
            'id' => $id,
            'title' => $title,
            'body' => html_entity_decode($body),
            'author' => $author,
            'category_id' => $category_id,
            'category_name' => $category_name,
            'created_at' => $created_at
         );

         // Push to data
         array_push($post_arr, $post_item);
      }

      // Turn to JSON & output
      // $posts = json_encode($post_arr);
   }
?>
<?php include('inc/header.php'); ?>
<?php include('inc/navbar.php'); ?>

   <div class="container">
      <div class="row mt-4">
         <div class="col-md-8">
            <h2 class="mb-3">Posts</h2>

            <?php foreach($post_arr as $post): ?>
               <div class="card mb-3">
                  <div class="card-body">
                     <h4 class="card-title"><a href="single.php?id=<?php echo $post['id']; ?>"><?php echo $post['title']; ?></a></h4>
                     <p class="card-text"><?php echo $post['body']; ?></p>
                  </div>
                  <div class="card-footer">
                     <small class="text-muted"><?php echo $post['category_name']; ?></small>
                     <small class="text-muted float-right"><?php echo $post['created_at']; ?></small>
                  </div>
               </div> <!-- /.card -->
            <?php endforeach; ?>

            <div class="form-group text-center mt-4">
               <button class="btn btn-default">Load more...</button>
            </div>
         </div> <!-- /.col-md-8 -->
         <?php include('inc/sidebar.php'); ?>
      </div>
   </div>

<?php include('inc/footer.php'); ?>