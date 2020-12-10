import createGame from '../index.js';
import random from '../random.js';

const gameNotice = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 100;

const symbols = ['+', '-', '*'];
const startSymbol = 0;
const lastSymbol = symbols.length;

const calculate = (firstNumber, symbol, secondNumber) => {
  let result;
  switch (symbol) {
    case ('+'):
      result = firstNumber + secondNumber;
      break;
    case ('-'):
      result = firstNumber - secondNumber;
      break;
    case ('*'):
      result = firstNumber * secondNumber;
      break;
    default:
      console.log('Incorrect symbol');
      break;
  }
  return result;
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

export default () => createGame(gameNotice, createGameData);
