//Exercise 1
const firstName  = "Christopher";
let lastName = "Heighter";
var age = 25;
let exercise1 = document.getElementById("exercise1");
exercise1.innerHTML = `${firstName} ${lastName} ${age}`;

//Exercise 2
lastName = "Heighter";
age = 25;
let exercise2 = document.getElementById("exercise2");
exercise2.innerHTML = `${firstName} ${lastName} ${age}`;

//Exercise 3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;
let exercise3 = document.getElementById("exercise3");
exercise3.innerHTML = `${language} ${createdYear} ${isCaseSensitive}`;

//Exercise 4
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
let exercise4 = document.getElementById("exercise4");
exercise4.innerHTML = `${price} ${isOnSale} ${salePercentage} ${stock} ${selectedSize}`;

//Exercise 5
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;
let exercise5 = document.getElementById("exercise5");
exercise5.innerHTML = `${title} ${author} ${pageCount} ${bookmark} ${hasRead}`;