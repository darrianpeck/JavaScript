<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="style.scss" rel="stylesheet" type="text/scss">
    <link href="style800.css" rel="stylesheet" type="text/css">
    <link href="style800.scss" rel="stylesheet" type="text/scss">
    <title>FTLOF</title>
</head>
<body>

    <div id="designContainer">
        <!--signOn, nav and logo into 3 columns??-->

        <div id="logo">
            <a href="index.php"><img id="logo" src="images/icons/logo.png" alt="spoon and fork logo"></a>
        </div>
 
        <div id="nav">
            <ul>
                <li><a href="index.php">HOME</a></li>
                <li><a href="recipes.php">RECIPES</a></li>
                <li><a href="contact.php">CONTACT</a></li>
            </ul>
        </div><!--close nav-->

        <div id="signOn">
            <h3><a href=login.php>LOGIN</a></h3>
        </div>

        <div id="design">
            DESIGN PROCESS
        </div>

        <div id="footer">
            <?php
                echo date("Y");
            ?>
        </div><!--close footer-->

    </div>
</body>
</html>