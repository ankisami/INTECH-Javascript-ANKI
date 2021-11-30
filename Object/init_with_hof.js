import { assert } from 'chai';
import initWith from './init_with.js'

const initWithZeros = size => initWith(size, x=>0);
const initFrom = (size, startAt) => initWith(size, index => startAt + index);

initWithZeros(3); // [0, 0, 0]
initFrom(3, 42); // [42, 43, 44]

assert.deepEqual(initWithZeros(3),[0, 0, 0], "Is not Equal !!!!" );
assert.deepEqual(initFrom(3, 42),[42, 43, 44], "Is not Equal !!!!" );