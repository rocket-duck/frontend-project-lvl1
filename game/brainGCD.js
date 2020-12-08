import gameEngine from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const isGCD = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) {
    return isGCD(secondNumber, firstNumber);
  }
  if (secondNumber === 0) {
    return firstNumber;
  }
  return isGCD(secondNumber, firstNumber % secondNumber);
};

const createGameData = () => {
  const firstNumber = random(minNumber, maxNumber);
  const secondNumber = random(minNumber, maxNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = isGCD(firstNumber, secondNumber).toString();

  return [
    question,
    correctAnswer,
  ];
};

export default () => gameEngine(gameNotice, createGameData);
