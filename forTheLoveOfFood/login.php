<?php
/*  =================================================================================
    CHANGE NAMES SO IT DOES NOT LOOK LIKE I COPIED AND PASTED THE SAME CODE BITCH!!!!
    =================================================================================
    command shift L selected ALL highlighted words
*/
    session_start();    //join an exising session if any, otherwise start a new session!!!

if(isset($_POST_SESSION['validUser']) && $validUser == "valid"){
    //show the Admin page
    $displayForm = false;       //display from (true) or Admin page (false)
}
else{
    $inUsername = "";
    $inPassword = "";
    $usernameErrMsg = "";
    $passwordErrMsg = "";
    $signOnErrMsg = "";


    if( isset($_POST['submit'])){
        //echo "<p>Logged in successfully</p>";
        $displayForm = false;

        $inUsername = $_POST['username'];
        $inPassword = $_POST['password'];

        //validate input values
        $validData = true;          //assume the input data is good
        if($inUsername == ""){
            //display error message on the form
            $usernameErrMsg = "Please enter a username";
            $validData = false;
            //put the input values back into the form fields
            //display the form
        }
        if($inPassword == ""){
            //display error message on the form
            $passwordErrMsg = "Please enter a password";
            $validData = false;
            //put the input values back into the form fields
            //display the form
        }

        if($validData){
            //process the database
            //database workflow:
                //1. Connect to the database
                //2. Create your SQL command
                //3. Prepare your SQL Statement.......PDO Prepared Statements
                //4. Bind any parameters as needed
                //5. execute your SQL command/prepared statment
                //6. Process your result-set/object
            require 'dbConnect.php';
            $sql = "SELECT COUNT(*) FROM wdv341_event_users WHERE event_user_name = :userName";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':userName', $inUsername);
            //$stmt->bindParam(':password', $inPassword);
            $stmt->execute();
            //How do I know whether or not I found a matching username/password in the database?
            $numberOfRows = $stmt->fetchColumn();       //get the number of rows from the result
            //echo "<h1>$numberOfRows</h1>";            //1

            if($numberOfRows > 0){
                //found a valid username/password - continue processing this as a valid user
                //display Admin page
                $displayForm = false;   //DO NOT DISPLAY THE FORM, instead display the admin page
            }
            else{
                //invalid username/password combo...error messages and display form again
                $displayForm = true;    //invalid username/password - show the form to the user
                echo "<h1 class='errMsg'>Incorrect Username/Password. Please try again</h1>";
            }
        }   
            else{
                //display login form
                $inUsername = "";
                $inPassword = "";
                $displayForm = true;
                $signOnErrMsg = "Invalid Username or password. Please try again.";
            }
    }
        else{
            //display login form
            $displayForm = true;
        }
}//end the validUser if statement
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="style.scss" rel="stylesheet" type="text/scss">
    <link href="style800.css" rel="stylesheet" type="text/css">
    <link href="style800.scss" rel="stylesheet" type="text/scss">
    <script src="javaScript/localStorage.js"></script>
    <title>Document</title>

    <style>
        .errMsg {
            color: red;
        }

        #adminMenu{
            padding:15px;
            width: 70%;
        }

        ol {
            list-style-type: none;

            li {
                
            }
        }
    </style>
</head>
<body>
    <?php
        if($displayForm){
        //the user has SIGNED ON and should display the Admin System
        //echo "<h2>Display Form</h2>";
    ?>
    <div id="formContainer">

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

        <div id="form">

            <form method="post" action="login.php">
                <div style="color:red;">
                    <?php echo $signOnErrMsg; ?>
                </div>

                <p>
                    <label for="username">Username: </label>
                    <input type="text" name="username" id="username"  value="<?php echo $inUsername; ?>">
                    <span class="errMsg"><?php echo $usernameErrMsg; ?></span>
                </p>

                <p>
                    <label for="password">Password: </label>
                    <input type="password" name="password" id="password" value="<?php echo $inPassword; ?>">
                    <span class="errMsg"><?php echo $passwordErrMsg; ?></span>
                </p>

                <p>
                    <input type="submit" name="submit" value="Login" id="loginButton">
                    <input type="reset" name="reset" id="resetButton">
                </p>

            </form>
        </div><!--close form-->

        <div id="footer">
                <?php
                    echo date("Y");
                ?>
            </div>
    </div><!--close login form Container-->

    <?php
        }
        else{
            //the user needs to display the form - to sign on OR fix their input
            $_SESSION['validUser'] ="valid";    //check this on all Admin pages

            //to make the logged in user's page different than regular user:
                //$_SESSION['userRole'] = "admin";
                //header("Location: admin/adminMain.php");
    ?>

    <div id="adminRecipeContainer">
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
            <h3><a href=logOut.php>LOGOUT</a></h3>
        </div>

        <div id="recipe" class="row"><!--I want to use AJAX to display the full recipe info from local storage when 'SEE FULL RECIPE' is clicked-->
            <div id="recipeCard" class="column">
                <img src="images/turkeyDinner.jpg" width="100%" height="200px"><!--fix width and height of photos, make responsive-->
                <h3><a>Recipe Title</a></h3>
                <button>SEE FULL RECIPE</button><br>
                <button>UPDATE RECIPE</button><br>
                <button>DELETE RECIPE</button>
            </div>

            <div id="recipeCard" class="column">
                <img src="images/sugarCookies.jpg" width="100%" height="200px">
                <h3><a>Recipe Title</a></h3>
                <button>SEE FULL RECIPE</button><br>
                <button>UPDATE RECIPE</button><br>
                <button>DELETE RECIPE</button>

            </div>

            <p>
                <b><label for="servings">Servings</label></b>
                <select id="servings" name="country">
                    <option value="half">Half</option>
                    <option value="regular">Regular</option>
                    <option value="double">Double</option>
                </select>
            </p>

            <button><a href="addRecipe.php">ADD YOUR RECIPE</a></button>

        </div>

        <div id="footer">
            <?php
                echo date("Y");
            ?>
        </div>

        <?php
            }//close else branch of ADMIN display area
        ?>
    </div><!--close admin container-->

</body>
</html>