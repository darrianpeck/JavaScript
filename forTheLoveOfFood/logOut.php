<?php   
    session_start();

    session_unset();
    session_destroy();

    //$conn->close();     //closes your database connection

    header("Location:/FORTHELOVEOFFOOD/login.php");  //redirect to home or login page

?>