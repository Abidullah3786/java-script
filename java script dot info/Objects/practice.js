// Shopping List
// Create a dynamic shopping list where the user can input an item they need to buy and the 
// quantity they need. Display a message with the item and the quantity.

let item = prompt("Enter the item to buy", "oil");
let qnty = prompt("Enter the quantity");

let shoppingList = {}

shoppingList[item] = qnty;

alert("You will recive " + shoppingList.item + " " + item + " soon");



