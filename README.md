# _Order Pizza_

#### _Website that allows users to select ingredients and return the price of the pizza, January 26, 2018_

#### By _**David Lewis**_

## Description

_This website provides and input for the user to enter a number. After the user enters a number and clicks submit, the website will display information below the form. Depending upon what number the user enters, a specific result will display. It will either show, beep, boop, or I'm sorry David I'm afraid you cant do that, or a list of all the integers up to that number_

## Setup/Installation Requirements

* _Follow this link https://github.com/dlewiski/beep-boop and open the index.html file into any web browser_

## Specifications

* _Program captures an ingredient from user"_
  * **_Example selection: olives**
  * **_Example Output: ["olives"]_**

* _Program stores ingredient into pizza object"_
  * **_Example selection: olives_**
  * **_Example Output: pizza { ingredient: olives}_**

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
  * **_Example Output: pizza { name: ingredients: [olives, pepperoni, onions, sausage], size: Large}_**

* _Program displays user name and cost of pizza_
  * **_Example Input: David, (olives, pepperoni, onions, sausage), Large **
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
