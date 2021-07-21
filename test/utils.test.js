import { findById, renderTableRow, calcOrderTotal } from '../utils.js';
import { supplies } from '../data/supplies.js';

const test = QUnit.test;

test('returns supplies by id', (expect) => {
    const expected = {
        id: 6,
        name: 'Red Stapler',
        image: 'red.stapler.jpg',
        description: 'Excuse me, I believe you have my stapler',
        price: 15.00,
    };
    const actual = findById(supplies, 6);

    expect.deepEqual(actual, expected);
});

test('renderTableRow returns a <tr> element', expect => {
    const stapler = {
        id: 6,
        name: 'Red Stapler',
        image: 'red.stapler.jpg',
        description: 'Excuse me, I believe you have my stapler',
        price: 15.00,
    };
    const staplerCart = {
        id: 6,
        qty: 3
    };
    const expected = `<tr><td>Red Stapler</td><td>15</td><td>3</td><td>$45.00</td></tr>`;
    const dom = renderTableRow(stapler, staplerCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('calcOrderTotal should return the total amount in the cart', expect=> {
    const cart = [
        { id: 6, qty: 1 },
        { id: 5, qty: 1 }
    ];
    const data = [{
        id: 6, 
        price: 15.00
    },
    {
        id: 5,
        price: 3.99
    }];

    const expected = 18.99;
    const actualNumber = calcOrderTotal(data, cart);
    const actual = Number(actualNumber.toFixed(2));
    expect.deepEqual(actual, expected);
});
