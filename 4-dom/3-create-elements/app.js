// Creating new html elements
const ul = document.querySelector('ul'); 
const li = document.createElement('li');

ul.append(li);

const firstLI = document.querySelector('.list-items'); 

// Accessing the content
// console.log(firstLI.innerText);
// console.log(firstLI.textContent);
// console.log(firstLI.innerHTML);

// Modifying text in the element
li.innerText = 'X-Men';

// Modifying attributes and classes
li.setAttribute('id', 'main-heading');

// Remove attributes from the element
li.removeAttribute('id');

// Getting attributes
const title = document.querySelector('#main-heading'); 
console.log(title.getAttribute('id'));

// Adding and removing classes from elements
li.classList.add('list-items'); 

// li.classList.remove('list-items'); 

console.log(li.classList.contains('list-items'));

// Remove elements 
li.remove();