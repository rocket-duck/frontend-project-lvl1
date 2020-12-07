#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const getCorrectAnswer = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) {
    return getCorrectAnswer(secondNumber, firstNumber);
  }
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getCorrectAnswer(secondNumber, firstNumber % secondNumber);
};

const createGameData = () => {
  const firstNumber = random(minNumber, maxNumber);
  const secondNumber = random(minNumber, maxNumber);

  const question = `${firstNumber} ${secondNumber}`;

  return [
    question,
    getCorrectAnswer(firstNumber, secondNumber).toString(),
  ];
};

gameGreetings(gameNotice);
makeGame(createGameData);
