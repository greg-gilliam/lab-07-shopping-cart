// import functions and grab DOM elements
import { supplies } from './supplies.js';
import { renderSupplies } from './render-supplies.js';
console.log(supplies);
// initialize state

const suppliesUL = document.getElementById('supplies');

for (let supply of supplies) {
    const suppliesLI = renderSupplies(supply);
    suppliesUL.appendChild(suppliesLI);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
