import {assert, expect} from 'chai';
import quickSort from '../scripts/quick-sort';
import {randomNumbersArrayGen, randomLettersArrayGen} from '../scripts/random';

describe('TDD with quickSort', () => {

  it('should be a function', () => {
    assert.equal(typeof quickSort, 'function');
  })

  it('should sort an array of one number', () => {
    let unsortedArray = [2];
    let sortedArray = quickSort(unsortedArray);

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], false);
    }
  })

  it('should should sort an array of two numbers', () => {
    let unsortedArray = [2, 1];
    let sortedArray = quickSort(unsortedArray);

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

  it('should sort a large array of numbers', () => {
    let unsortedArray = randomNumbersArrayGen(1212, 112112);
    let sortedArray = quickSort(unsortedArray);

    assert.equal(Array.isArray(unsortedArray), true);

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

  it('should sort an array of letters', () => {
    let unsortedArray = randomLettersArrayGen(1202);
    let sortedArray = quickSort(unsortedArray);

    assert.equal(Array.isArray(unsortedArray), true);

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

})
