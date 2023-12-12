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
    <title>FTLOF</title>

    <style>
        .container {
            display: block;
            position: relative;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div id="addRecipeContainer">

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

        <div id="recipeForm">
            <div>
                <form name="addRecipeForm" id="addRecipeForm" method="post" enctype="multipart/form-data" action="submitRecipe.php">
                    <!--
                        send form to a php page, when submit is clicked, it will store data in
                        local storage and send it to the database!!
                    -->
                    <p id="nameInput">
                        <b><label for="recipeName">Recipe Name</label></b><br>
                        <input type="text" id="recipeName" name="recipeName">
                    </p>

                    <p id="level">
                        <b><label>Difficulty Level</label></b>
                        <label class="container">
                            <input type="radio" name="radio" id="easy" value="Easy">
                            Easy
                        </label>
                        <label class="container">
                            <input type="radio" name="radio" id="medium" value="Medium">
                            Medium
                        </label>
                        <label class="container">
                            <input type="radio" name="radio" id="hard" value="Hard">
                            Hard
                        </label>
                    </p>

                    <div id="ingredientInput">
                        <p id="ingredientList">
                            <label><b>Ingredients</b> (please enter ingredient name and amount needed)</label>
                            <input type="text" id="ingredient" name="ingredient" placeholder="Ex: 1/2 cup of sugar">
                            <input type="text" id="ingredient" name="ingredient">
                            <input type="text" id="ingredient" name="ingredient">
                        </p>
                        <input type="button" onclick="addIngredient()" value="Add Ingredient"><!--dynamically add a new input field-->
                    </div>

                    <p id="timeInput">
                        <b><label for="time">How long does it take to make this recipe?</label></b>
                        <input type="text" id="time" name="time">
                    </p>

                    <p id="instructionsInput">
                        <b><label>Instructions</label></b><br>
                        <textarea id="instructions" name="instructions" ></textarea>
                    </p>

                    <p>
                        <b><label>Select and upload an image for your recipe</label></b><br>
                        <lable for="getImage">Select an image:</lable><br>
                        <input type="file" name="getImage" id="getImage">
                    </p>
                    <input type="button" value="SHOW" onclick="Recipe()">

                  <input type="button" name="submit" value="Submit" onclick="storeRecipeData()"><!--do I want this to be input type=submit? yes because I want it to connect with the server, but for testing/JS purposes it is type=button until I get php set up-->
                  <input type="reset" name="reset" value="Reset">
                </form>
              </div>
        </div>

        <div id="footer">
            <?php
                echo date("Y");
            ?>
        </div>

    </div>
</body>
</html>