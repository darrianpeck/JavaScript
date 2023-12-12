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
    <script src="javaScript/localStorage.js"></script>
    <script src="javaScript/recipe.js"></script>
    <title>FTLOF</title>

    <script>

function pageLoad(){
            //alert("page loaded");
            document.querySelector("#viewTurkeyRecipe").onclick = function() {
                //alert("see turkey recipe clicked");
                let displayTurkeyRecipe = document.querySelector("#turkey").innerHTML = 
                "<b>" + recipeNameStoredJS + "</b>" + "<br>" +
                "<b>Time: </b>" + recipeTimeStoredJS + "<br>" +
                "<b>Difficulty: </b>" + recipeDifficultyLevelStoredJS + "<br>" +
                "<b>Ingredients: </b>" + recipeIngredientsStoredJS + "<br>" +//need a loop here??
                "<b>Instructions: </b>" + recipeInstructionsStoredJS + "<br>" +//need a loop here??
                "<b>Servings: </b>" + recipeServingsStoredJS + "<br>" +
                "<b>Image: </b>" + recipeImageStored + "<br>" 
                ;
                //console.log(displayTurkeyRecipe);
                
                //hide cookie recipe:
                document.querySelector("#turkey").style.display = "inline";
                document.querySelector("#cookies").style.display = "none";
            }

            document.querySelector("#viewCookieRecipe").onclick = function() {
                //alert("see cookie recipe clicked");
                let displayCookieRecipe = document.querySelector("#cookies").innerHTML = 
                sugarCookiesRecipeNameStoredJS + "<br>" +
                "<b>Time: </b>" + sugarCookieRecipeTimeStoredJS + "<br>" +
                "<b>Difficulty: </b>" + sugarCookiesRecipeDifficultyLevelStoredJS + "<br>" +
                "<b>Ingredients: </b>" + sugarCookieRecipeIngredientsStoredJS + "<br>" +//need a loop here??
                "<b>Instructions: </b>" + sugarCookiesRecipeInstructionsStoredJS + "<br>" +//need a loop here??
                "<b>Servings: </b>" + sugarCookiesRecipeServingsStoredJS + "<br>" +
                "<b>Image: </b>" + sugarCookiesRecipeImageStored + "<br>" 
                ;
                document.querySelector("#cookies").style.display = "inline";
                document.querySelector("#turkey").style. display = "none"
            }
            
        }
    </script>

</head>
<body onload="pageLoad()">

    <div id="indexContainer">

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

        <div id="intro">
            <img id="overlay" src="images/peppersBanner.jpg" alt="peppers banner"><!--I DO NOT LIKE THIS IMAGE, too stretched out-->
        </div>

        <div id="about">
            <h2>ACADEMIC PROJECT</h2>
            <p>This website is a final project. It includes HTML/CSS, JavaScript, and PHP. In this 
                website, the user can view various recipes. The user can login to the admin account and
                have the ability to add, update, and/or delete a recipe.
            </p>
            <button><a href="designProcess.php">SEE FULL DESIGN PROCESS</a></button>
            <button><a href="login.php">ADD YOUR RECIPE</a></button>
        </div>

        <div id="preview" class="row">
            <h2>'TIS THE SEASON</h2>
            <div id="recipeCard" class="column">
                <img src="images/turkeyDinner.jpg" width="300px" height="200px">
                <h3><a>The Perfect Christmas Turkey</a></h3>
                <div id="turkey"></div>
                <button type="button" id="viewTurkeyRecipe">SEE FULL RECIPE</button>
            </div>

            <div id="recipeCard" class="column">
                <img src="images/sugarCookies.jpg" width="300px" height="200px">
                <h3><a>Best Sugar Cookies for the Holiday</a></h3>
                <div id="cookies"></div>
                <button type="button" id="viewCookieRecipe">SEE FULL RECIPE</button>
            </div>

        </div>

        <div id="footer">
            <?php
                echo date("Y");
            ?>
        </div><!--close footer-->

    </div>
</body>
</html>