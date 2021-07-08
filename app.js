import { supplies } from '../data/supplies.js';
import { renderSupplies } from './render-supplies.js';
console.log(supplies);
import { addItemtoCart } from './storage-utils.js';

const suppliesUL = document.getElementById('supplies');

for (let supply of supplies) {
    const suppliesLI = renderSupplies(supply);
    suppliesUL.appendChild(suppliesLI);
}

const addButtons = document.querySelectorAll('.add');
for (let btn of addButtons) {
    btn.addEventListener('click', (e)=>{
        console.log("i am clicking buttons", e.target.value);
        console.log(typeof(e.target.value));
        addItemtoCart(Number(e.target.value));
    });
}