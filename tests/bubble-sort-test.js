import { assert } from 'chai';
import bubbleSort from '../scripts/bubble-sort'

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.equal(typeof bubbleSort, 'function');
  })

  it('should should sort an array of more than one number', () => {

    let newArray = [2, 1];

    assert.equal(newArray[0] > newArray[1], true);
    bubbleSort(newArray);
    assert.equal(newArray[0] > newArray[1], false);

  })

})
