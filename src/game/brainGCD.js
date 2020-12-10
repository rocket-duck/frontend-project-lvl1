import createGame from '../index.js';
import random from '../random.js';

const gameNotice = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const findGCD = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) {
    return findGCD(secondNumber, firstNumber);
  }
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGCD(secondNumber, firstNumber % secondNumber);
};

const createGameData = () => {
  const firstNumber = random(minNumber, maxNumber);
  const secondNumber = random(minNumber, maxNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGCD(firstNumber, secondNumber).toString();

  return [
    question,
    correctAnswer,
  ];
};

export default () => createGame(gameNotice, createGameData);
