import { findById, getTotal, renderTableRow, toUSD } from '../utils.js';
import supplies from '../data/supplies.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const supplies = findById(supplies, item.id);
    const tr = renderTableRow(supplies, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
consts total = getTotal(supplies, cart);
totalDom.textContent = toUSD(total);