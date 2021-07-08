import cart from './data/cart.js';
import { supplies } from './data/supplies.js';
import { findById } from './utils.js';

export const CART = 'MY-CART';

export function getCart(){
    let stringCart = localStorage.getItem(CART) || '[]';

    const cart = JSON.parse(stringCart); 
    return cart; 
}

export function addItemtoCart(itemId){
    const cart = getCart();
    const item = findById(cart, itemId);
    console.log(item);
}

if (supplies) {
    supplies.qty += 1; 
} else {
    const newItem = { id: suppliesId, qty: 1 };
    cart.push(newItem);
}

console.log(cart);
localStorage.setItem(CART, JSON.stringify(cart));

export function clearCart(){
    localStorage.removeItem(CART);
}
