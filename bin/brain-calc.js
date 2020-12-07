#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 100;

const symbols = ['+', '-', '*'];
const startSymbol = 0;
const lastSymbol = symbols.length;

const getCorrectAnswer = (firstNumber, symbol, secondNumber) => {
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

  return [
    question,
    getCorrectAnswer(firstNumber, symbol, secondNumber).toString(),
  ];
};

gameGreetings(gameNotice);
makeGame(createGameData);
