import { toUSD } from '../utils.js';

export function renderTableRow(supplyItem, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = supplyItem.name;
    tdName.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(supplyItem.price);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = supplyItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;
}