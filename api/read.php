<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../models/Post.php';

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
         'created_at' => $created_at,
      );

      // Push to data
      array_push($post_arr, $post_item);
   }

   // Turn to JSON & output
   echo json_encode($post_arr);
} else {
   // No Posts
   echo json_encode(array('message' => 'No Post Found'));
}