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

    <div id="contactContainer">
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

        <div id="contact">
            <form name="contactForm" id="contactForm" method="post" action="#">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname">
            
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname">

                <label for="email">Email</label>
                <input type="text" id="email" name="email">
            
                <label for="subject">Subject</label>
                <select id="subject" name="subject">
                    <option value="Recipes">Please select a reason for contact</option>
                    <option value="Recipes">Recipes</option>
                    <option value="CustomerService">Customer Service</option>
                    <option value="TechSupport3">Technical Support</option>
                    <option value="Other">Other</option>
                </select>
            
                <label for="textArea">Message</label>
                <textarea id="textArea" name="textArea" style="height:200px"></textarea>
            
                <input type="reset" value="Reset">
                <input type="submit" value="Submit">
            </form>
        </div>

        <div id="message">
            <h2>Pickle for your thoughts?</h2>
            <p>Fill out the form with your message 
                And someone will get back to you
                As soon as possible!
            </p>
            <p>Thank you!</p>
        </div>
        <div id="footer">
            <?php
                echo date("Y");
            ?>
        </div><!--close footer-->

    </div>
</body>
</html>