import { supplies } from './supplies.js';
import { renderSupplies } from './render-supplies.js';
console.log(supplies);

const suppliesUL = document.getElementById('supplies');

for (let supply of supplies) {
    const suppliesLI = renderSupplies(supply);
    suppliesUL.appendChild(suppliesLI);
}
