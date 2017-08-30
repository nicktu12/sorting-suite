import { assert, expect } from 'chai';
const {mergeSort, merge} = require('../scripts/merge-sort');


function randomArrayGenerator (count, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);
    numbers.push(randomNumber)
  }
  return numbers
}

describe('TDD with mergeSort', () => {

  it('should be a function', () => {
    assert.equal(typeof mergeSort, 'function');
  })

  it('should should sort an array of more than one number', () => {

    let newArray = randomArrayGenerator(100, 100);
    let sortedArray = mergeSort(newArray);
    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] <= sortedArray[i+1], true);
    }
  })

})
