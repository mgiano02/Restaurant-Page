import pageLoad from './page-load.js';
import './style.css';
import menuTab from './menu.js';
import contactTab from './contact.js';

console.log("Hello from index.js!");

const body = document.querySelector('body');
const header = document.createElement('header');
body.appendChild(header);
const btn = document.createElement('button');
btn.innerText = 'Home';
header.appendChild(btn);
const btn2 = document.createElement('button');
btn2.innerText = 'Menu';
header.appendChild(btn2);
const btn3 = document.createElement('button');
btn3.innerText = 'Contact Us';
header.appendChild(btn3);


pageLoad();

btn.addEventListener('click', () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    pageLoad();
})


btn2.addEventListener('click', () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    menuTab();
})


btn3.addEventListener('click', () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    contactTab();
})