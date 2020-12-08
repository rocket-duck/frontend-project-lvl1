#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 1000;
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createGameData = () => {
  const question = random(minNumber, maxNumber);
  const correctAnswer = isEven(question);

  return [
    question,
    correctAnswer,
  ];
};

gameGreetings(gameNotice);
makeGame(createGameData);
