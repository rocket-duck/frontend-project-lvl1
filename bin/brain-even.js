#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 1000;
const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createGameData = () => {
  const getQuestion = random(minNumber, maxNumber);
  return [getQuestion, correctAnswer(getQuestion)];
};

gameGreetings(gameNotice);
makeGame(createGameData);
