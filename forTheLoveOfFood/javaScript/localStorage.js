//STORE DATA: 
    function storeRecipeData(){         //need to make a NEW recipe object with new inputs everytime someone submits form
        //getting values from form:
        let recipeObject = {
            recipeName: document.querySelector("#recipeName").value,   
            recipeDifficultyLevel: document.querySelector("input[type='radio']:checked").value,
            recipeIngredients: document.querySelector("#ingredient").value, //not getting all ingredients, refer to project with Brian?
            recipeTime: document.querySelector("#time").value,
            recipeInstructions: document.querySelector("#instructions").value,
            //recipeServings: ,
            recipeImage: document.querySelector("#getImage").value

        }

        //convert recipeObject to JSON format:
        let recipeObjectJSON = JSON.stringify(recipeObject); 
            //console.log(recipeObjectJSON);

        //PUTTING IT IN LOCAL STORAGE:
            //create a new object with this data and put it in local storage
        localStorage.setItem("recipe", recipeObjectJSON);
            console.log(localStorage.getItem("recipe"));
            //console.log(localStorage);

        //submit the form (same as type='submit')
        //querySelector("form").submit();
                
    }
//===========================================================================================
//ADD ANOTHER INPUT FIELD FOR ADDRECIPE.HTML FORM:
    function addIngredient(){
        /* user can add an input field to add any number of ingredients for recipe
            create the input with #ingredient
                createElement("input")
            set attributes:<input type="text" id="ingredient" name="ingredient">
            display it to the page when the button is clicked
        */
        let recipeInput = document.createElement("input");
        recipeInput.setAttribute("type","text");
        recipeInput.setAttribute("id","ingredient");
        recipeInput.setAttribute("name","ingredient");
            //console.log(recipeInput);
            
        let ingredientList = document.querySelector("#ingredientList");
        ingredientList.appendChild(recipeInput);
    }
//===========================================================================================
//MAKING SURE ALL FIELDS ARE FILLED OUT:
/*function validateForm($inRecipeName) {
    let name = document.forms["recipeForm"]["recipeName"].value;
    if (name == "") {
        alert("Please fill out recipe name");
        return false;
    }

    let ingredients = document.forms["recipeForm"]["ingredient"].value;
    if (ingredients == "") {
        alert("Please enter ingredients");
        return false;
    }
    

    let time = document.forms["recipeForm"]["time"].value;
    if (time == "") {
        alert("Please enter how long the recipe takes to make");
        return false;
    }

    let instructions = document.forms["recipeForm"]["instructions"].value;
    if (instructions == "") {
        alert("Please enter instructions for recipe");
        return false;
    }
}*/ //ingredients was not working

//try if statements and display the error in span tags??