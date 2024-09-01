<?php
    $con = mysqli_connect('localhost','root','','veerdb');

    if(!$con){
        die('Connection failed: '. mysqli_connect_error());
    }
?>