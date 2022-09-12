// DOM Manipulation 

// getElementById()
const title = document.getElementById('main-heading');
console.log(title);

// getElementByClassName()
const listItem = document.getElementsByClassName('list-items');
console.log(listItem)

// getElementByTagName()
const listItemTags = document.getElementsByTagName('li');
console.log(listItem)

// querySelector() - Can select elements with either their class name, id or tag
const container = document.querySelector('div'); 
console.log(container);

// querySelectorAll() - Selects all elements with the specified option
const allLis = document.querySelectorAll('li'); 
console.log(allLis);