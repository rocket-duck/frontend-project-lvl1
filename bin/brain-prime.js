#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const minNumber = 1;
const maxNumber = 10;

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const createGameData = () => {
  const question = random(minNumber, maxNumber);
  const correctAnswer = isPrime(question);

  return [question, correctAnswer];
};

gameGreetings(gameNotice);
makeGame(createGameData);
