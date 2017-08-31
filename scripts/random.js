const randomNumbersArrayGen = (count, max) => {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let n;
    Math.random() < .12 ? n = -1 : n = 1
    let randomNumber = Math.floor(Math.random() * max * n);
    numbers.push(randomNumber)
  }
  return numbers
}

console.log(test)

const randomLettersArrayGen = (count) => {
  let letters = [];

  let allLetters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < count; i++) {
    let randomLetterNumber = Math.floor( Math.random() * 25 );

    letters.push( allLetters[randomLetterNumber] );
  }

  return letters;
}

module.exports = {randomNumbersArrayGen, randomLettersArrayGen};
