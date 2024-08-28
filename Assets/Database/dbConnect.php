<?php
    $con = mysqli_connect('localhost','root','','veerdb');

    if (!$con) {
        die("Connection failed: ". $con->connect_error);
    }
?>