export function renderSupplies(supplies){
    const suppliesLI = document.createElement('li');
    const suppliesh3 = document.createElement('h3');
    suppliesh3.textContent = supplies.name;

    const suppliesImg = document.createElement('img');
    suppliesImg.src = `./assets/${supplies.image}`;
    suppliesImg.alt = supplies.name;

    const suppliesSpan = document.createElement('span');
    suppliesSpan.textContent = `$${supplies.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';

    suppliesLI.appendChild(suppliesh3);
    suppliesLI.appendChild(suppliesImg);
    suppliesLI.appendChild(suppliesSpan);
    suppliesLI.appendChild(button);

    return suppliesLI;
}