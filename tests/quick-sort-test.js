import {assert, expect} from 'chai';
<<<<<<< HEAD
import bubbleSort from '../scripts/quick-sort';
const {randomNumbersArrayGen, randomLettersArrayGen} = require('../scripts/random');

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.equal(typeof bubbleSort, 'function');
=======
import quickSort from '../scripts/quick-sort';
const {randomNumbersArrayGen, randomLettersArrayGen} = require('../scripts/random');

describe('TDD with quickSort', () => {

  it('should be a function', () => {
    assert.equal(typeof quickSort, 'function');
>>>>>>> 7573a56de73cc4eef64d351e83f48673b183ee76
  })

  it('should sort an array of one number', () => {
    let unsortedArray = [2];
<<<<<<< HEAD
    let sortedArray = bubbleSort(unsortedArray);
=======
    let sortedArray = quickSort(unsortedArray);
>>>>>>> 7573a56de73cc4eef64d351e83f48673b183ee76

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], false);
    }
  })

  it('should should sort an array of two numbers', () => {
    let unsortedArray = [2, 1];
<<<<<<< HEAD
    let sortedArray = bubbleSort(unsortedArray);
=======
    let sortedArray = quickSort(unsortedArray);
>>>>>>> 7573a56de73cc4eef64d351e83f48673b183ee76

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

  it('should sort a large array of numbers', () => {
    let unsortedArray = randomNumbersArrayGen(1212, 112112);
<<<<<<< HEAD
    let sortedArray = bubbleSort(unsortedArray);
=======
    let sortedArray = quickSort(unsortedArray);
>>>>>>> 7573a56de73cc4eef64d351e83f48673b183ee76

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
<<<<<<< HEAD
    let sortedArray = bubbleSort(unsortedArray);
=======
    let sortedArray = quickSort(unsortedArray);
>>>>>>> 7573a56de73cc4eef64d351e83f48673b183ee76

    assert.equal(Array.isArray(unsortedArray), true);

    for (let i = 0; i < unsortedArray.length; i++) {
      expect(unsortedArray[i] <= unsortedArray[i+1], false);
    }

    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

<<<<<<< HEAD
  it('should log the performance of the algorithm on a large array', () => {
    console.log('do a thing!')
  })
=======
  // it('should log the performance of the algorithm on a large array', () => {
  //   console.log('do a thing!')
  // })
>>>>>>> 7573a56de73cc4eef64d351e83f48673b183ee76

})
