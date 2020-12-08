import gameEngine from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 100;

const symbols = ['+', '-', '*'];
const startSymbol = 0;
const lastSymbol = symbols.length;

const calculate = (firstNumber, symbol, secondNumber) => {
  if (symbol === '+') {
    return firstNumber + secondNumber;
  }
  if (symbol === '-') {
    return firstNumber - secondNumber;
  }

  return firstNumber * secondNumber;
};

const createGameData = () => {
  const firstNumber = random(minNumber, maxNumber);
  const secondNumber = random(minNumber, maxNumber);
  const symbol = symbols[random(startSymbol, lastSymbol)];

  const question = `${firstNumber} ${symbol} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, symbol, secondNumber).toString();

  return [
    question,
    correctAnswer,
  ];
};

export default () => gameEngine(gameNotice, createGameData);
