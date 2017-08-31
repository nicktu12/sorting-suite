import {assert, expect} from 'chai';
import bubbleSort from '../scripts/bubble-sort';
const {randomNumbersArrayGen, randomLettersArrayGen} = require('../scripts/random');

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.equal(typeof bubbleSort, 'function');
  })

  it('should sort an array of one number', () => {
    let unsortedArray = [2];
    let sortedArray = bubbleSort(unsortedArray);

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], false);
    }
  })

  it('should should sort an array of two numbers', () => {
    let unsortedArray = [2, 1];
    let sortedArray = bubbleSort(unsortedArray);

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

  it('should sort a large array of numbers', () => {
    let unsortedArray = randomNumbersArrayGen(1212, 112112);
    let sortedArray = bubbleSort(unsortedArray);

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
    let sortedArray = bubbleSort(unsortedArray);

    assert.equal(Array.isArray(unsortedArray), true);

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

  // it('should log the performance of the algorithm on a large array', () => {
  //   console.log('do a thing!')
  // })

})
