import { findById, calcItemTotal, toUSD } from '../utils.js';
import { renderTableRow } from '../utils.js';
import { supplies } from '../data/supplies.js';
import { getCart, clearCart } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');

function renderCart(){
    const cart = getCart();
    console.log('cart inside renderCart', cart);
    for (let item of cart) {
        const supplies = findById(supplies, item.id);
        const tr = renderTableRow(supplies, item);
        tableBody.appendChild(tr);
    }
    if(cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = calcItemTotal(supplies, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=>{
    clearCart();
    location.reload();
});