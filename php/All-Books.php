<?php
session_start();

	# Database Connection File
	include "db_conn.php";

	# Book helper function
	include "func-book.php";
    $books = get_all_books($conn);

  


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>book store</title>

  <!-- bootstap for css -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <!-- bootstap for js -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>


</head>

<body style="background-color:#3F3351;box-sizing: border-box; padding: 40px;">
  <nav>
    <ul class="nav_link">


    </ul>
  </nav>
  <!-- <?php 
if ($books == 0) {?>
  empty
  <?php }else{?> -->
  <h3 style="font-size:x-large; text-align-last: center;color: #F7D08A;;">All Books</h3>
  <table class="table table-bordered shadow " style="color: #F7D08A;">
    <thead>
      <tr>

        <th>Title</th>
        <th>Download</th>

      </tr>
    </thead>
    <tbody class="">
      <?php foreach ($books as $book) {?>
      <tr>

        <td>
          <img width="100" src="uploads/cover/<?=$book['cover']?>">
          <a class="link-dark d-block text-centred" href="uploads/file/<?=$book['file']?>">
            <?=$book['Title']?>
          </a>
        </td>


        </td>

        <td>
          <a href="uploads/file/<?=$book['file']?>" class="btn btn-success">Open</a>
          <a href="uploads/file/<?=$book['file']?>" class="btn btn-primary" download="<?=$book['file']?>">Download</a>
        </td>
      </tr>
      <?php } ?>
    </tbody>
  </table>
  <?php } ?>
</body>

</html>