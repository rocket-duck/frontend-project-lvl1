#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 10;

const symbols = ['+', '-', '*'];
const startSymbol = 0;
const lastSymbol = symbols.length;

const correctAnswer = (firstNumber, symbol, secondNumber) => {
  if (symbol === '+') {
    return firstNumber + secondNumber;
  }
  if (symbol === '-') {
    return firstNumber - secondNumber;
  }

  return firstNumber * secondNumber;
};

const createGameData = () => {
  const generateFirstNumber = random(minNumber, maxNumber);
  const generateSecondNumber = random(minNumber, maxNumber);
  const generateSymbol = symbols[random(startSymbol, lastSymbol)];

  const getQuestion = `${generateFirstNumber} ${generateSymbol} ${generateSecondNumber}`;

  return [
    getQuestion,
    correctAnswer(generateFirstNumber, generateSymbol, generateSecondNumber).toString(),
  ];
};

gameGreetings(gameNotice);
makeGame(createGameData);
