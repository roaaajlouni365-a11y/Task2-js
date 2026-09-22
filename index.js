const menu = [
    {
        name: "Burger",
        price: 5,
        category: "Fast Food",
        available: true
    },
    {
        name: "Shawarma",
        price: 3,
        category: "Fast Food",
        available: true
    },
    {
        name: "Zinger",
        price: 4,
        category: "Fast Food",
        available: false
    },
    {
        name: "Pizza",
        price: 7,
        category: "Italian",
        available: true
    },
    {
        name: "Pasta",
        price: 6,
        category: "Italian",
        available: true
    }
];
function showMenu() {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].available === false) {
            continue;
        }
        console.log(
            menu[i].name +  " - Price: " +  menu[i].price
        );
    }
}
showMenu();
let selectedFood = null;
while (selectedFood === null) {
    const foodName = prompt("Enter food name:");
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].available === false) {
            continue;
        }
        if (foodName === menu[i].name) {
            selectedFood = menu[i];
            break;
        }
    }
    if (selectedFood === null) {alert("Food is not available. Please try again.");
    }
}
for (let property in selectedFood) {
console.log(property + ": " + selectedFood[property]);
}
const quantity = Number(prompt("Enter quantity:"));
const totalPrice = selectedFood.price * quantity;


document.write("<h2>Final Order</h2>");
document.write("Food: " + selectedFood.name + "<br>");
document.write("Price: " + selectedFood.price + "<br>");
document.write("Category: " + selectedFood.category + "<br>");
document.write("Quantity: " + quantity + "<br>");
document.write("Total Price: " + totalPrice);


//Ex : Function Task
// Q1==>  Write a JavaScript function that reverses a number
function reverseNumber(number) {
    let result = "";
    const text = String(number);
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return Number(result);
}
console.log(reverseNumber(532443));
// Q2 ==>Use a loop that iterates from 0 to 15.
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
// Q3 ==> accepts a number as input and inserts dashes (-) between each even number.
let number = prompt("Enter a number:");
let result = "";
for (let i = 0; i < number.length; i++) {
    result += number[i];
    if ( Number(number[i]) % 2 === 0 && Number(number[i + 1]) % 2 === 0 ) {
        result += "-";
    }
}
console.log(result);
// Q4 ==> Write a function called Agechecker that checks the user's age.
function Agechecker(age) {
    if (age >= 18) {
        console.log("The user is Adult");
    } else {
        console.log("The user is Minor");
    }
}
let age = Number(prompt("Enter your age:"));
Agechecker(age);
