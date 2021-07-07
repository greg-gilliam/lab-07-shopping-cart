import { findById, getTotal, renderTableRow } from '../utils.js';
import supplies from '../data/supplies.js';

const test = QUnit.test;

test('returns supplies by ID', (expect)=>{
    const expected = {
        id: '3',
        name: 'Paper clips',
        image: 'paperclips.jpg',
        description: 'A wondrous thing to get you out of a tight spot',
        price: 8.99,
    };
    const actual = findById(supplies, 3);

    expect.deepEqual(actual, expected);
});
