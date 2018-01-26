//Business logic

// Pizza constructor
function Pizza(name, size, ingredient) {
  this.name = name
  this.size = size
  this.ingredients = []
  this.cost = ""
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
  var checks = document.getElementsByClassName("ingredient");
  for (i = 0; i < checks.length; i++) {
    if (checks[i].checked === true) {
    this.ingredients.push(checks[i].value);
    }
  }
}

//Prototype to calculate cost of pizza
Pizza.prototype.calculateCost = function() {
  var cost = 10;
  if (this.size === "large") {
    cost += 5;
  }
  cost += this.ingredients.length;
  return cost;
};

//Prototype to display ingredient list
Pizza.prototype.displayIngredients = function() {
  this.ingredients.forEach(function(ingredient) {
    $("#list").append("<li>" + ingredient + "</li>");
  });
}

//Prototype to display name and cost of pizza
Pizza.prototype.displayPizza = function() {
  $("#displayPizza").append(
    "<div class='well'>" +
    "<h3>Thank you " + this.name + " for your order!</h3>" +
    "<p>The total cost for your pizza is: </p>" +
    "<p><span id='costDisplay'>$" + this.cost + "</span></p>" +
    "<p>Here is a summary of your order:</p>" +
    "<ul id='list'>One " + this.size + " pizza with:</ul>" +
    "</div>"
  )
}

//User logic
$(document).ready(function() {
  $("#pizzaInput").submit(function(event) {
    event.preventDefault();
    var pizza = pizzaMaker();
    pizza.addIngredient();
    pizza.cost = pizza.calculateCost();
    pizza.displayPizza();
    pizza.displayIngredients();
    });
  });
