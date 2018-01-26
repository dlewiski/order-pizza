# _Order Pizza_

#### _Website that allows users to select ingredients and return the price of the pizza, January 26, 2018_

#### By _**David Lewis**_

## Description

_This website allows a user to enter their name and place and order for a pizza. The user can select from four different toppings as well as a small or large pizza. After clicking the order pizza submit button, the program calculates and displays the cost of the pizza. The cost of the pizza is determined by how many ingredients are selected and whether the user chooses a small or large pizza. The UI also displays the list of ingredients the user selected_

## Setup/Installation Requirements

* _Follow this link https://github.com/dlewiski/order-pizza and open the index.html file into any web browser_
* _Follow this link https://github.com/dlewiski/order-pizza and open the index.html file into any web browser_

## Specifications

* _Program captures an ingredient from user"_
  * **_Example selection: olives_**
  * **_Example Output: ["olives"]_**

* _Program stores ingredient into pizza object"_
  * **_Example selection: olives_**
  * **_Example Output: pizza {ingredient: olives}_**

* _Program lets user select a size and store the selection in the pizza object"_
  * **_Example Input: Large_**
  * **_Example Output: pizza {ingredient: olives, size: Large}_**

* _Program stores the cost of pizza based upon the number of ingredients_
  * **_Example Input: pizza { ingredient: olives}**
  * **_Example Output: "$11"_**

* _Program stores multiple items in the ingredients variable in the pizza object"_
  * **_Example Input: olives, pepperoni, onions, sausage**
  * **_Example Output: pizza { ingredients: [olives, pepperoni, onions, sausage], size: Large}_**

* _Program stores the cost of pizza based upon the number of ingredients and size (base pizza is $10, each ingredient is $1 and size Large is 5$ more)_
  * **_Example Input: pizza { ingredients: [olives, pepperoni, onions, sausage], size: Large}_**
  * **_Example Output: "$19"_**

* _Program stores user name in the pizza object_
  * **_Example Input: David**
  * **_Example Output: pizza {name: ingredients: [olives, pepperoni, onions, sausage], size: Large}_**

* _Program displays user name and cost of pizza_
  * **_Example Input: David, (olives, pepperoni, onions, sausage), Large_**
  * **_Example Output: "Thank you for your order David! Your total is $19"_**

## Known Bugs

_There are still issues with the program determining what to do with certain numbers_

## Support and contact details

_Please feel free to contact me at my github https://github.com/dlewiski/ with any questions, comments, or concerns_

## Technologies Used

_JavaScript, Jquery, Bootstrap_

### License

*MIT License*

Copyright (c) 2018 **_David Lewis and Epicodus_**
