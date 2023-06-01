<?php
    include "conn.php";
    $sql = "SELECT * FROM section2";
    $result = mysqli_query($conn, $sql);

    foreach ($result as $row) {
        echo "
        <div class='col-lg-4 col-sm-6 p-4'>
        <h4 class='title-sm mt-4'>". $row['title'] ."</h4>
        <p>". $row['textContent'] ."</p>
        <a href='#' class='btn btn-brand mt-4"'>". $row['button'] ."</a>
        </div>
        ";
        }
?>

    