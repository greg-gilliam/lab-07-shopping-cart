import { findById, calcItemTotal, renderTableRow, toUSD } from '../utils.js';
import { supplies } from '../data/supplies.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    let supply = findById(supplies, item.id);
    const tr = renderTableRow(supply, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = calcItemTotal(supplies, cart);
totalDom.textContent = toUSD(total);