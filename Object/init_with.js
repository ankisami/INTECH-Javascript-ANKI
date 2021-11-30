import { assert } from 'chai';

export default function initWith(size = 0, f = 0) {
    const myArray = Array(size);
    let tempFunc;

    for (let i = 0; i < size; i++) {
        tempFunc = f(i);
        myArray[i] = tempFunc
    };
    return myArray;
};

const withZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;
initWith(5, withZero); // => [0, 0, 0, 0, 0]
initWith(5, fromZero); // => [0, 1, 2, 3, 4]
initWith(5, from42); // => [42, 43, 44, 45, 46]

assert.deepEqual(initWith(5, withZero), [0, 0, 0, 0, 0], "Error is not equal !!!");
assert.deepEqual(initWith(5, fromZero),[0, 1, 2, 3, 4], "Error is not equal !!!");
assert.deepEqual(initWith(5, from42),[42, 43, 44, 45, 46], "Error is not equal !!!");