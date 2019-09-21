// Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), 
// ingredients (an array of strings), and a function called cook
// The cook function should print the following:
//  "Currently cooking [title] that will serve [servings] people. It will combine the following ingredients in a pot..."
// Loop through the array of ingredients
// After the function is complete, call the function cook function through the object


var recipe = {
    title : "pasta",
    servings : 10,
    ingredients : ["Pasta", "Water", "Oil", "Tomatoes","Pepper", "Secret Seasoning"],
    cook : function() {
        console.log("Currently cooking " + this.title + " that will serve " + this.servings + " people. I will combine these ingredients in a pot..")
    
        for(var i = 0; i<this.ingredients.length; i++) { 
            console.log(this.ingredients[i]);
        }
    }
};

recipe.cook();


var recipe = {
    title : "Pizza",
    servings : 6,
    ingredients : ["Dough", "Tomatoes", "Cheese", "Pepperoni"],
    cook : function () {
        console.log ("Dad will make " + this.title + " that will serve " + this.servings + " people. I'll go buy these ingredients.. ")

        for(var i =0; i<this.ingredients.length; i++)  {
            console.log(this.ingredients[i]);
        }
    }
};

recipe.cook(); 