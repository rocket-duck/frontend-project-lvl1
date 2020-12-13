import createGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameNotice = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 100;

const operators = ['+', '-', '*'];
const firstOperator = 0;
const lastOperator = operators.length - 1;

const calculate = (firstNumber, operator, secondNumber) => {
  let result;
  switch (operator) {
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
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const operator = operators[getRandomNumber(firstOperator, lastOperator)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, operator, secondNumber).toString();

  return [
    question,
    correctAnswer,
  ];
};

export default () => createGame(gameNotice, createGameData);
