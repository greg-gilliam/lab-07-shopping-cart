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
    console.log(cart, item);
    if (item) {
        item.qty += 1; 
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }
    
    console.log(cart);
    localStorage.setItem(CART, JSON.stringify(cart));
}


export function clearCart(){
    localStorage.removeItem(CART);
}
