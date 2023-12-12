//make clear local storage button
//CREATE A CLASS FOR RECIPES:
class Recipe {
    constructor(name, difficulty, ingredients, time, instructions, servings, image){
        this.name = name;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
        this.time = time;
        this.instructions = instructions;
        this.servings = servings;
        this.image = image;
    }
}
//console.log(Recipe);
//===========================================================================================
//Turkey Recipe:
    //empty arrays:
    let turkeyIngredients = []; //not sure it I need these...
    let turkeyInstructions = [];

    //ingredients and instructions arrays:
        let turkeyIngredientsAmount = {
            half: {
                ingredients: [
                    "2 and 1/2 Tablespoons butter",
                    "1/2 Tablespoon each chopped fresh rosemary, sage, and thyme",
                    "Salt and pepper to liking",
                    "1/2 of a whole turkey",
                    "2-4 large carrots halved crosswise",
                    "1 large onion cut into 8 wedges",
                    "1 celery stock, halved crosswise"
                ]
            },
            regular: {
                ingredients:  [
                    "5 Tablespoons butter",
                    "1 Tablespoon each chopped fresh rosemary, sage, and thyme",
                    "Salt and pepper to liking",
                    "1 of a whole turkey",
                    "4-6 large carrots halved crosswise",
                    "2 large onion cut into 8 wedges",
                    "2 celery stock, halved crosswise"
                ]
            },
            double: {
                ingredients:  [
                    "10 Tablespoons butter",
                    "2 Tablespoon each chopped fresh rosemary, sage, and thyme",
                    "Salt and pepper to liking",
                    "2 of a whole turkeys",
                    "6-8 large carrots halved crosswise",
                    "4 large onion cut into 8 wedges",
                    "4 celery stock, halved crosswise"
                ]
            }
        }
        //HALF:
        let halfTurkeyIngredientAmount = turkeyIngredientsAmount.half.ingredients; //setting half amount to variable
            //console.log(halfTurkeyIngredientAmount);
        let halfTurkeyIngredientAmountJSON = JSON.stringify(halfTurkeyIngredientAmount); //strignifying it to put in local storage
            //console.log("HALF " + halfTurkeyIngredientAmountJSON);
        localStorage.setItem("halfTurkeyIngredientAmountJSON", halfTurkeyIngredientAmountJSON); //putting in local storage
        let halfTurkeyIngredientAmountJS = JSON.parse(localStorage.getItem("halfTurkeyIngredientAmountJSON")); //parsing to take out of local storage to display
            //console.log(halfTurkeyIngredientAmountJS); //loop through ingredients when displaying??????????? YES HALLELUJAH, for loop for this is located on recipe.php

        //REGULAR: repeating same steps from half amount
        let regularTurkeyIngredientAmount = turkeyIngredientsAmount.regular.ingredients;
            //console.log(regularTurkeyIngredientAmount);
        let regularTurkeyIngredientAmountJSON = JSON.stringify(regularTurkeyIngredientAmount);
            //console.log("REGULAR " + regularTurkeyIngredientAmountJSON);
        localStorage.setItem("regularTurkeyIngredientAmountJSON", regularTurkeyIngredientAmountJSON);
        let regularTurkeyIngredientAmountJS = JSON.parse(localStorage.getItem("regularTurkeyIngredientAmountJSON"));
            //console.log(regularTurkeyIngredientAmountJS);

        //DOUBLE: repeating same steps from half amount
        let doubleTurkeyIngredientAmount = turkeyIngredientsAmount.double.ingredients;
            //console.log(doubleTurkeyIngredientAmount);
        let doubleTurkeyIngredientAmountJSON = JSON.stringify(doubleTurkeyIngredientAmount);
            //console.log("DOUBLE " + doubleTurkeyIngredientAmountJSON);
        localStorage.setItem("doubleTurkeyIngredientAmountJSON", doubleTurkeyIngredientAmountJSON);
        let doubleTurkeyIngredientAmountJS = JSON.parse(localStorage.getItem("doubleTurkeyIngredientAmountJSON"));
            //console.log(doubleTurkeyIngredientAmountJS);

        //console.log(turkeyIngredientsAmount.half);
        //console.log(turkeyIngredientsAmount.regular);
        //console.log(turkeyIngredientsAmount.double);

    //making instructions array:
        let turkeyInstructionsAmount = {
            half: {
                instructions: [
                    "Step 1: Preheat oven and make herb butter: Preheat oven to 350°F with rack in the lowest position. Make herb butter: In a small bowl, mix together 2 tablespoons butter with chopped herbs; season generously with salt and pepper.",
                    "Step 2: Prepare turkey: Loosen skin: Working from the neck end, slide fingers under skin until you reach the end of the breast, being careful not to tear the skin; rub herb butter under the skin.",
                    "Step 3: OPTIONAL - Fill neck cavity with stuffing: Place turkey breast side down. Fill neck cavity with stuffing; avoid packing. Close up by folding skin over and fastening with skewers or trussing needles.",
                    "Step 4: Tuck wings: Turn turkey over; bend wing tips underneath bird so they stay in place (you may have to break the bones). ",
                    "Step 5: OPTIONAL - Stuff cavity: Loosely fill large cavity with stuffing.",
                    "Step 6: Tie legs: Using cotton kitchen twine, tie legs together securely (they will overlap) so bird retains its shape and moisture during cooking.",
                    "Step 7: Cut neck: Cut neck into pieces.",
                    "Step 8: Prepare roasting pan: Mix neck pieces with carrots, onions, celery, and 1 cup water in a large roasting pan. Set roasting rack over vegetables in pan.",
                    "Step 9 Rub turkey with butter: Lift turkey onto rack; rub with remaining tablespoon butter. Season generously with salt and pepper. Tent turkey loosely with foil.",
                    "Step 10: Roast turkey: Roast 30 minutes, then baste every 15 minutes with pan liquids, until an instant-read thermometer inserted into the thickest part of thigh (avoiding bone) registers 125°F, about 1.5 hours. Remove foil; raise oven heat to 400°F. Continue roasting, basting occasionally, until thigh reaches 180°F, 30 to 45 minutes more. Tent with foil if bird browns too quickly; add more water if pan becomes dry.",
                    "Step 11: Rest turkey before carving: Transfer turkey to a serving platter; cover loosely with foil, and let it rest at least 30 minutes before carving. "
                ]
            },
            regular: {
                instructions: [
                    "Step 1: Preheat oven and make herb butter: Preheat oven to 350°F with rack in the lowest position. Make herb butter: In a small bowl, mix together 4 tablespoons butter with chopped herbs; season generously with salt and pepper.",
                    "Step 2: Prepare turkey: Loosen skin: Working from the neck end, slide fingers under skin until you reach the end of the breast, being careful not to tear the skin; rub herb butter under the skin.",
                    "Step 3: OPTIONAL - Fill neck cavity with stuffing: Place turkey breast side down. Fill neck cavity with stuffing; avoid packing. Close up by folding skin over and fastening with skewers or trussing needles.",
                    "Step 4: Tuck wings: Turn turkey over; bend wing tips underneath bird so they stay in place (you may have to break the bones). ",
                    "Step 5: OPTIONAL - Stuff cavity: Loosely fill large cavity with stuffing.",
                    "Step 6: Tie legs: Using cotton kitchen twine, tie legs together securely (they will overlap) so bird retains its shape and moisture during cooking.",
                    "Step 7: Cut neck: Cut neck into pieces.",
                    "Step 8: Prepare roasting pan: Mix neck pieces with carrots, onions, celery, and 2 cups water in a large roasting pan. Set roasting rack over vegetables in pan.",
                    "Step 9 Rub turkey with butter: Lift turkey onto rack; rub with remaining tablespoon butter. Season generously with salt and pepper. Tent turkey loosely with foil.",
                    "Step 10: Roast turkey: Roast 1 hour, then baste every 30 minutes with pan liquids, until an instant-read thermometer inserted into the thickest part of thigh (avoiding bone) registers 125°F, about 3 hours. Remove foil; raise oven heat to 400°F. Continue roasting, basting occasionally, until thigh reaches 180°F, 45 to 60 minutes more. Tent with foil if bird browns too quickly; add more water if pan becomes dry.",
                    "Step 11: Rest turkey before carving: Transfer turkey to a serving platter; cover loosely with foil, and let it rest at least 30 minutes before carving. "
                ]
            },
            double: {
                instructions: [
                    "Step 1: Preheat oven and make herb butter: Preheat oven to 350°F with rack in the lowest position. Make herb butter: In a small bowl, mix together 8 tablespoons butter with chopped herbs; season generously with salt and pepper.",
                    "Step 2: Prepare turkeys: Loosen skin: Working from the neck end, slide fingers under skin until you reach the end of the breast, being careful not to tear the skin; rub herb butter under the skin.",
                    "Step 3: OPTIONAL - Fill neck cavities with stuffing: Place turkey breasts side down. Fill neck cavities with stuffing; avoid packing. Close up by folding skin over and fastening with skewers or trussing needles.",
                    "Step 4: Tuck wings: Turn turkeys over; bend wing tips underneath birds so they stay in place (you may have to break the bones). ",
                    "Step 5: OPTIONAL - Stuff cavity: Loosely fill large cavities with stuffing.",
                    "Step 6: Tie legs: Using cotton kitchen twine, tie legs together securely (they will overlap) so birds retain shape and moisture during cooking.",
                    "Step 7: Cut necks: Cut necks into pieces.",
                    "Step 8: Prepare roasting pan: Mix neck pieces with carrots, onions, celery, and 4 cups water in a large roasting pan. Set roasting rack over vegetables in pan.",
                    "Step 9 Rub turkeys with butter: Lift turkeys onto rack; rub with remaining tablespoon butter. Season generously with salt and pepper. Tent turkeys loosely with foil.",
                    "Step 10: Roast turkeys: Roast 2 hour, then baste every 30 minutes with pan liquids, until an instant-read thermometer inserted into the thickest part of thigh (avoiding bone) registers 125°F, about 6 hours. Remove foil; raise oven heat to 400°F. Continue roasting, basting occasionally, until thigh reaches 180°F, 1.5 to 2 hours more. Tent with foil if birds brown too quickly; add more water if pan becomes dry.",
                    "Step 11: Rest turkeys before carving: Transfer turkeys to a serving platter; cover loosely with foil, and let them rest at least 30 minutes before carving. "
                ]
            }
        }
        //HALF:
        let halfTurkeyInstructionsAmount = turkeyInstructionsAmount.half.instructions; //setting half amount to variable
            //console.log(halfTurkeyInstructionsAmount);
        let halfTurkeyInstructionsAmountJSON = JSON.stringify(halfTurkeyInstructionsAmount); //strignifying it to put in local storage
            //console.log("HALF " + halfTurkeyInstructionsAmountJSON);
        localStorage.setItem("halfTurkeyInstructionsAmountJSON", halfTurkeyInstructionsAmountJSON); //putting in local storage
        let halfTurkeyInstructionsAmountJS = JSON.parse(localStorage.getItem("halfTurkeyInstructionsAmountJSON")); //parsing to take out of local storage to display
            //console.log(halfTurkeyInstructionsAmountJS); //for loop for this is located on recipe.php

        //REGULAR: repeating same steps from half amount
        let regularTurkeyInstructionsAmount = turkeyInstructionsAmount.regular.instructions;
            //console.log(regularTurkeyInstructionsAmount);
        let regularTurkeyInstructionsAmountJSON = JSON.stringify(regularTurkeyInstructionsAmount);
            //console.log("REGULAR " + regularTurkeyInstructionsAmountJSON);
        localStorage.setItem("regularTurkeyInstructionsAmountJSON", regularTurkeyInstructionsAmountJSON);
        let regularTurkeyInstructionsAmountJS = JSON.parse(localStorage.getItem("regularTurkeyInstructionsAmountJSON"));
            //console.log(regularTurkeyInstructionsAmountJS);

        //REGULAR: repeating same steps from half amount
        let doubleTurkeyInstructionsAmount = turkeyInstructionsAmount.double.instructions;
            //console.log(doubleTurkeyInstructionsAmount);
        let doubleTurkeyInstructionsAmountJSON = JSON.stringify(doubleTurkeyInstructionsAmount);
            //console.log("DOUBLE " + doubleTurkeyInstructionsAmountJSON);
        localStorage.setItem("doubleTurkeyInstructionsAmountJSON", doubleTurkeyInstructionsAmountJSON);
        let doubleTurkeyInstructionsAmountJS = JSON.parse(localStorage.getItem("doubleTurkeyInstructionsAmountJSON"));
            //console.log(doubleTurkeyInstructionsAmountJS);


        let turkeyRecipe = new Recipe(
            "Roasted Turkey",
            "Medium", 
            turkeyIngredientsAmount.regular, 
            "5 hours", 
            turkeyInstructionsAmount.regular,
            10, 
            "../images/turkeyDinner.jpg"
        );// when making a new recipe, change each string to variable that gets value entered by user

        //store each Recipe property individually and pulling them back out as parsed:
            let recipeName = turkeyRecipe.name;
                //console.log(recipeName);
            localStorage.setItem("recipeName", recipeName);//creating localStorage item
            let recipeNameStoredJSON = JSON.stringify(localStorage.getItem("recipeName")); //getting localStorage item from new variable
                //console.log(recipeNameStoredJSON);
            let recipeNameStoredJS = JSON.parse(recipeNameStoredJSON);
                //console.log(recipeNameStoredJS);
            //console.log(localStorage);

            let recipeDifficultyLevel = turkeyRecipe.difficulty;
            localStorage.setItem("recipeDifficultyLevel", recipeDifficultyLevel);
            let recipeDifficultyLevelStoredJSON = JSON.stringify(localStorage.getItem("recipeDifficultyLevel"));
                    //console.log(recipeDifficultyLevelStoredJSON);
            let recipeDifficultyLevelStoredJS = JSON.parse(recipeDifficultyLevelStoredJSON);
    //instrucions went here
            let recipeTime = turkeyRecipe.time;
            localStorage.setItem("recipeTime", recipeTime);
            let recipeTimeStoredJSON = JSON.stringify(localStorage.getItem("recipeTime"));
                    //console.log(recipeTimeStoredJSON);
            let recipeTimeStoredJS = JSON.parse(recipeTimeStoredJSON);

            let recipeInstructions = turkeyRecipe.instructions;
            localStorage.setItem("recipeInstructions", recipeInstructions);
            let recipeInstructionsStoredJSON = JSON.stringify(localStorage.getItem("recipeInstructions"));
                    //console.log(recipeInstructionsStoredJSON);
            let recipeInstructionsStoredJS = JSON.parse(recipeInstructionsStoredJSON);

            let recipeServings = turkeyRecipe.servings;
            localStorage.setItem("recipeServings", recipeServings);
            let recipeServingsStoredJSON = JSON.stringify(localStorage.getItem("recipeServings"));
                    //console.log(recipeServingsStoredJSON);
            let recipeServingsStoredJS = JSON.parse(recipeServingsStoredJSON);

            let recipeImage = turkeyRecipe.image;
            localStorage.setItem("recipeImage", recipeImage);
            let recipeImageStored = localStorage.getItem("recipeImage");
                //console.log(recipeImageStored);

//===========================================================================================
//Sugar Cookie Recipe:
    let cookieIngredients = [];
    let cookieInstructions = [];

    //cookie ingredients:
        let cookieIngredientsAmount = {
            half: {
                ingredients: [
                    "1 and 1/8 Cup All-Purpose Flour",
                    "1/4 Teaspoon Baking Powder",
                    "1/6 Teaspoon Salt",
                    "1/4 Cup and 2 Tablespoons Unsalted Butter",
                    "1/4 Cup and 2 Tablespoons Cup Granulated Sugar",
                    "1/2 Large Egg",
                    "1 Teaspoon Pure Vanilla Extract",
                    "1/4 Teaspoon Almond Extract (Optional)"
                ]
            },
            regular: {
                ingredients: [
                    "2 and 1/4 Cup All-Purpose Flour",
                    "1/2 Teaspoon Baking Powder",
                    "1/4 Teaspoon Salt",
                    "3/4 Cup Unsalted Butter",
                    "3/4 Cup Granulated Sugar",
                    "1 Large Egg",
                    "2 Teaspoons Pure Vanilla Extract",
                    "1/4 or 1/2 Teaspoon Almond Extract (Optional)"
                ]
            },
            double: {
                ingredients: [
                    "4 and 1/2 Cup All-Purpose Flour",
                    "1 Teaspoon Baking Powder",
                    "1/2 Teaspoon Salt",
                    "1 and 1/2 Cup Unsalted Butter",
                    "1 and 1/2 Cup Cup Granulated Sugar",
                    "2 Large Egg",
                    "4 Teaspoons Pure Vanilla Extract",
                    "1/2 Teaspoon Almond Extract (Optional)"
                ]
            }
        }
        //HALF:
        let halfCookieIngredientsAmount = cookieIngredientsAmount.half.ingredients; //setting half amount to variable
            //console.log(halfCookieIngredientsAmount);
        let halfCookieIngredientsAmountJSON = JSON.stringify(halfCookieIngredientsAmount); //strignifying it to put in local storage
            //console.log("HALF " + halfCookieIngredientsAmountJSON);
        localStorage.setItem("halfCookieIngredientsAmountJSON", halfCookieIngredientsAmountJSON); //putting in local storage
        let halfCookieIngredientsAmountJS = JSON.parse(localStorage.getItem("halfCookieIngredientsAmountJSON")); //parsing to take out of local storage to display
            //console.log(halfCookieIngredientsAmountJS); //for loop for this is located on recipe.php

        //REGULAR:
        let regularCookieIngredientsAmount = cookieIngredientsAmount.regular.ingredients; 
            //console.log(regularcookieIngredientsAmount);
        let regularCookieIngredientsAmountJSON = JSON.stringify(regularCookieIngredientsAmount);
            //console.log("REGULAR " + regularcookieIngredientsAmountJSON);
        localStorage.setItem("regularCookieIngredientsAmountJSON", regularCookieIngredientsAmountJSON); 
        let regularCookieIngredientsAmountJS = JSON.parse(localStorage.getItem("regularCookieIngredientsAmountJSON")); 
            //console.log(regularCookieIngredientsAmountJS); //for loop for this is located on recipe.php

        //DOUBLE:
        let doubleCookieIngredientsAmount = cookieIngredientsAmount.double.ingredients; 
            //console.log(doubleCookieIngredientsAmount);
        let doubleCookieIngredientsAmountJSON = JSON.stringify(doubleCookieIngredientsAmount);
            //console.log("DOUBLE " + doubleCookieIngredientsAmountJSON);
        localStorage.setItem("doubleCookieIngredientsAmountJSON", doubleCookieIngredientsAmountJSON); 
        let doubleCookieIngredientsAmountJS = JSON.parse(localStorage.getItem("doubleCookieIngredientsAmountJSON")); 
            //console.log(doubleCookieIngredientsAmountJS); //for loop for this is located on recipe.php

    //cookie instructions
        let cookieInstructionsAmount = {
            half: {
                instructions: [
                    "1. Make sure you have allotted enough time (and enough counter space!) to make these cookies. The cookie dough needs to chill, the cookies need to cool completely.",
                    "2. Make the cookie dough: Whisk the flour, baking powder, and salt together in a medium bowl. Set aside.",
                    "3. In a large bowl using a handheld or a stand mixer fitted with a paddle attachment, beat the butter and sugar together on high speed until completely smooth and creamy, about 2 minutes. Add the egg, vanilla, and almond extract (if using), and beat on high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl and beat again as needed to combine.",
                    "4. Add the dry ingredients to the wet ingredients and mix on low until combined. Dough will be a bit soft. If the dough seems too soft and sticky for rolling, add 1 more Tablespoon of flour.",
                    "5. Divide the dough into 2 equal parts. Place each portion onto a piece of lightly floured parchment paper or a lightly floured silicone baking mat. With a lightly floured rolling pin, roll the dough out to about 1/4-inch thickness. Use more flour if the dough seems too sticky. The rolled-out dough can be any shape, as long as it is evenly 1/4-inch thick.",
                    "6. Lightly dust one of the rolled-out doughs with flour. Place a piece of parchment on top. (This prevents sticking.) Place the second rolled-out dough on top. Cover with plastic wrap or aluminum foil, then refrigerate for at least 1–2 hours and up to 2 days.",
                    "7. Once chilled, preheat oven to 350°F (177°C). Line a large baking sheets with parchment paper or silicone baking mats. Carefully remove the top dough piece from the refrigerator. If it’s sticking to the bottom, run your hand under it to help remove it. Using a cookie cutter, cut the dough into shapes. Re-roll the remaining dough and continue cutting until all is used. Repeat with second piece of dough. (Note: It doesn’t seem like a lot of dough, but you get a lot of cookies from the dough scraps you re-roll.)",
                    "8. Arrange cookies on baking sheets about 3 inches apart. Bake for 11–12 minutes or until lightly browned around the edges. If your oven has hot spots, rotate the baking sheet halfway through bake time. Allow cookies to cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely before decorating. No need to cover the cookies as they cool.",
                ]
            },
            regular: {
                instructions: [
                    "1. Make sure you have allotted enough time (and enough counter space!) to make these cookies. The cookie dough needs to chill, the cookies need to cool completely.",
                    "2. Make the cookie dough: Whisk the flour, baking powder, and salt together in a medium bowl. Set aside.",
                    "3. In a large bowl using a handheld or a stand mixer fitted with a paddle attachment, beat the butter and sugar together on high speed until completely smooth and creamy, about 2 minutes. Add the egg, vanilla, and almond extract (if using), and beat on high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl and beat again as needed to combine.",
                    "4. Add the dry ingredients to the wet ingredients and mix on low until combined. Dough will be a bit soft. If the dough seems too soft and sticky for rolling, add 1 more Tablespoon of flour.",
                    "5. Divide the dough into 2 equal parts. Place each portion onto a piece of lightly floured parchment paper or a lightly floured silicone baking mat. With a lightly floured rolling pin, roll the dough out to about 1/4-inch thickness. Use more flour if the dough seems too sticky. The rolled-out dough can be any shape, as long as it is evenly 1/4-inch thick.",
                    "6. Lightly dust one of the rolled-out doughs with flour. Place a piece of parchment on top. (This prevents sticking.) Place the second rolled-out dough on top. Cover with plastic wrap or aluminum foil, then refrigerate for at least 1–2 hours and up to 2 days.",
                    "7. Once chilled, preheat oven to 350°F (177°C). Line 2–3 large baking sheets with parchment paper or silicone baking mats. Carefully remove the top dough piece from the refrigerator. If it’s sticking to the bottom, run your hand under it to help remove it. Using a cookie cutter, cut the dough into shapes. Re-roll the remaining dough and continue cutting until all is used. Repeat with second piece of dough. (Note: It doesn’t seem like a lot of dough, but you get a lot of cookies from the dough scraps you re-roll.)",
                    "8. Arrange cookies on baking sheets about 3 inches apart. Bake for 11–12 minutes or until lightly browned around the edges. If your oven has hot spots, rotate the baking sheet halfway through bake time. Allow cookies to cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely before decorating. No need to cover the cookies as they cool.",
                ]
            },
            double: {
                instructions: [
                    "1. Make sure you have allotted enough time (and enough counter space!) to make these cookies. The cookie dough needs to chill, the cookies need to cool completely.",
                    "2. Make the cookie dough: Whisk the flour, baking powder, and salt together in a medium bowl. Set aside.",
                    "3. In a large bowl using a handheld or a stand mixer fitted with a paddle attachment, beat the butter and sugar together on high speed until completely smooth and creamy, about 2 minutes. Add the egg, vanilla, and almond extract (if using), and beat on high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl and beat again as needed to combine.",
                    "4. Add the dry ingredients to the wet ingredients and mix on low until combined. Dough will be a bit soft. If the dough seems too soft and sticky for rolling, add 1 more Tablespoon of flour.",
                    "5. Divide the dough into 2 equal parts. Place each portion onto a piece of lightly floured parchment paper or a lightly floured silicone baking mat. With a lightly floured rolling pin, roll the dough out to about 1/4-inch thickness. Use more flour if the dough seems too sticky. The rolled-out dough can be any shape, as long as it is evenly 1/4-inch thick.",
                    "6. Lightly dust one of the rolled-out doughs with flour. Place a piece of parchment on top. (This prevents sticking.) Place the second rolled-out dough on top. Cover with plastic wrap or aluminum foil, then refrigerate for at least 1–2 hours and up to 2 days.",
                    "7. Once chilled, preheat oven to 350°F (177°C). Line enough large baking sheets with parchment paper or silicone baking mats. Carefully remove the top dough piece from the refrigerator. If it’s sticking to the bottom, run your hand under it to help remove it. Using a cookie cutter, cut the dough into shapes. Re-roll the remaining dough and continue cutting until all is used. Repeat with second piece of dough. (Note: It doesn’t seem like a lot of dough, but you get a lot of cookies from the dough scraps you re-roll.)",
                    "8. Arrange cookies on baking sheets about 3 inches apart. Bake for 11–12 minutes or until lightly browned around the edges. If your oven has hot spots, rotate the baking sheet halfway through bake time. Allow cookies to cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely before decorating. No need to cover the cookies as they cool.",
                ]
            }
        }
        //HALF:
        let halfCookieInstructionsAmount = cookieInstructionsAmount.half.instructions; //setting half amount to variable
            //console.log(halfcookieInstructionsAmount);
        let halfCookieInstructionsAmountJSON = JSON.stringify(halfCookieInstructionsAmount); //strignifying it to put in local storage
            //console.log("HALF " + halfCookieInstructionsAmountJSON);
        localStorage.setItem("halfCookieInstructionsAmountJSON", halfCookieInstructionsAmountJSON); //putting in local storage
        let halfCookieInstructionsAmountJS = JSON.parse(localStorage.getItem("halfCookieInstructionsAmountJSON")); //parsing to take out of local storage to display
            //console.log(halfCookieInstructionsAmountJS); //for loop for this is located on recipe.php

        //REGULAR:
        let regularCookieInstructionsAmount = cookieInstructionsAmount.regular.instructions; //setting half amount to variable
            //console.log(regularCookieInstructionsAmount);
        let regularCookieInstructionsAmountJSON = JSON.stringify(regularCookieInstructionsAmount); //strignifying it to put in local storage
            //console.log("REGULAR " + regularCookieInstructionsAmountJSON);
        localStorage.setItem("regularCookieInstructionsAmountJSON", regularCookieInstructionsAmountJSON); //putting in local storage
        let regularCookieInstructionsAmountJS = JSON.parse(localStorage.getItem("regularCookieInstructionsAmountJSON")); //parsing to take out of local storage to display
            //console.log(regularCookieInstructionsAmountJS); //for loop for this is located on recipe.php

        //DOUBLE:
        let doubleCookieInstructionsAmount = cookieInstructionsAmount.double.instructions; //setting half amount to variable
            //console.log(regularCookieInstructionsAmount);
        let doubleCookieInstructionsAmountJSON = JSON.stringify(doubleCookieInstructionsAmount); //strignifying it to put in local storage
            //console.log("DOUBLE " + doubleCookieInstructionsAmountJSON);
        localStorage.setItem("doubleCookieInstructionsAmountJSON", doubleCookieInstructionsAmountJSON); //putting in local storage
        let doubleCookieInstructionsAmountJS = JSON.parse(localStorage.getItem("doubleCookieInstructionsAmountJSON")); //parsing to take out of local storage to display
            //console.log(doubleCookieInstructionsAmountJS); //for loop for this is located on recipe.php


    let sugarCookiesRecipe = new Recipe(
        "Sugar Cookies", 
        "Medium", 
        //cookieIngredientsJSON, 
        "2 hours", 
        //cookieInstructionsJSON, 
        "24 Cookies", 
        "../images/sugarCookies.jpg");// when making a new recipe, change each string to varable that gets value entered by user
        //console.log(sugarCookiesRecipe);  
    //storing a recipe into local storage:
        //let sugarCookiesRecipeJSON = JSON.stringify(sugarCookiesRecipe);
        //localStorage.setItem("sugarCookiesRecipe", sugarCookiesRecipeJSON);
        //console.log(localStorage.getItem("turkeyRecipe"));
        //console.log(localStorage);

    //store each Recipe property individually:
        let sugarCookiesRecipeName = sugarCookiesRecipe.name;
            //console.log(sugarCookiesRecipeName);
        localStorage.setItem("sugarCookiesRecipeName", sugarCookiesRecipeName);
        let sugarCookiesRecipeNameStoredJSON = JSON.stringify(localStorage.getItem("sugarCookiesRecipeName")); 
            //console.log(sugarCookiesRecipeNameStoredJSON);
        let sugarCookiesRecipeNameStoredJS = JSON.parse(sugarCookiesRecipeNameStoredJSON);

        let sugarCookiesRecipeDifficultyLevel = sugarCookiesRecipe.difficulty;
        localStorage.setItem("sugarCookiesRecipeDifficultyLevel", sugarCookiesRecipeDifficultyLevel);
        let sugarCookiesRecipeDifficultyLevelStoredJSON = JSON.stringify(localStorage.getItem("sugarCookiesRecipeDifficultyLevel"));
        let sugarCookiesRecipeDifficultyLevelStoredJS = JSON.parse(sugarCookiesRecipeDifficultyLevelStoredJSON);

        let sugarCookiesRecipeIngredients = sugarCookiesRecipe.ingredients;
        localStorage.setItem("sugarCookieRecipeIngredients", sugarCookiesRecipeIngredients);
        let sugarCookieRecipeIngredientsStoredJSON = JSON.stringify(localStorage.getItem("sugarCookieRecipeIngredients"));
        let sugarCookieRecipeIngredientsStoredJS = JSON.parse(sugarCookieRecipeIngredientsStoredJSON);

        let sugarCookiesRecipeTime = sugarCookiesRecipe.time;
        localStorage.setItem("sugarCookieRecipeTime", sugarCookiesRecipeTime);
        let sugarCookieRecipeTimeStoredJSON = JSON.stringify(localStorage.getItem("sugarCookieRecipeTime"));
        let sugarCookieRecipeTimeStoredJS = JSON.parse(sugarCookieRecipeTimeStoredJSON);

        let sugarCookiesRecipeInstructions = sugarCookiesRecipe.instructions;
        localStorage.setItem("sugarCookiesRecipeInstructions", sugarCookiesRecipeInstructions);
        let sugarCookiesRecipeInstructionsStoredJSON = JSON.stringify(localStorage.getItem("sugarCookiesRecipeInstructions"));
        let sugarCookiesRecipeInstructionsStoredJS = JSON.parse(sugarCookiesRecipeInstructionsStoredJSON);

        let sugarCookiesRecipeServings = sugarCookiesRecipe.servings;
        localStorage.setItem("sugarCookiesRecipeServings", sugarCookiesRecipeServings);
        let sugarCookiesRecipeServingsStoredJSON = JSON.stringify(localStorage.getItem("sugarCookiesRecipeServings"));
        let sugarCookiesRecipeServingsStoredJS = JSON.parse(sugarCookiesRecipeServingsStoredJSON);
        
        let sugarCookiesRecipeImage = sugarCookiesRecipe.image;
        localStorage.setItem("sugarCookiesRecipeImage", sugarCookiesRecipeImage);
        let sugarCookiesRecipeImageStored = localStorage.getItem("sugarCookiesRecipeImage");

