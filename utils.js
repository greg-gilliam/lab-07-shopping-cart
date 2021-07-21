export function findById(items, id){
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(suppliesItem, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = suppliesItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = suppliesItem.price;
    // console.log(tdPrice);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    // console.log(suppliesItem.price, cartItem);
    const total = calcItemTotal(suppliesItem, cartItem);
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;
}

export function calcOrderTotal(supplies, cart){
    let orderTotal = 0;
    for (let item of cart){
        const supply = findById(supplies, item.id);
        orderTotal += supply.price * item.qty;
    }
    return orderTotal;
}

export function calcItemTotal(supplies, cart) {
    const itemTotal = supplies.price * cart.qty;
    return toUSD(itemTotal);
}