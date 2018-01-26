// Business

// Pizza constructor
function Pizza(name, size, ingredient) {
  this.name = name
  this.size = size
  this.ingredients = []
}

//Function to provide input to constructor
function pizzaMaker() {
  var name = $("#name").val();
  var size = $("#size").val();
  var newPizza = new Pizza(name, size);

  return newPizza;
}

//Prototype to push ingredients to Pizza.ingredients array
Pizza.prototype.addIngredient = function() {
  var ingredient = $("#ingredient").val();
  this.ingredients.push(ingredient);
}

//Prototype to calculate cost of pizza
Pizza.prototype.calculateCost = function () {
  var cost = 10;
  if (this.size === "large") {
    cost += 5;
  }
  return cost;


};


// User
$(document).ready(function() {
  $("#pizzaInput").submit(function(event) {
    event.preventDefault();
    var pizza = pizzaMaker();
    pizza.addIngredient();
    var pizzaCost = pizza.calculateCost();
    console.log(pizza);
    console.log(pizzaCost);
  });


});
