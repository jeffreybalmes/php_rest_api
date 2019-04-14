<?php
   include_once 'config/Database.php';
   include_once 'models/Post.php';

   // Instantiate DB & connect
   $database = new Database();
   $db = $database->connect();

   // Instantiate blog post object
   $post = new Post($db);

   if (isset($_POST['submit'])) {
      // Get raw posted data
      $post->title = $_POST['title'];
      $post->body = $_POST['body'];
      $post->category_id = $_POST['category_id'];

      // Create post
      $post->create();
   }

?>
