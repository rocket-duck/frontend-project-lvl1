#!/usr/bin/env node
import { gameGreetings, makeGame } from '../src/index.js';
import random from '../src/random.js';

const gameNotice = 'What number is missing in the progression?';

const minNumber = 1;
const maxNumber = 100;

const minProgressionLength = 5;
const maxProgressionLength = 10;

const generateProgression = (begin, step, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    if (i === 0) {
      progression[i] = begin;
    } else {
      progression[i] = progression[i - 1] + step;
    }
  }
  return progression;
};

const createGameData = () => {
  const progressionFirstNumber = random(minNumber, maxNumber);
  const progressionStep = random(minNumber, maxNumber);
  const progressionLength = random(minProgressionLength, maxProgressionLength);
  const questionPosition = random(minProgressionLength, progressionLength);

  const makeQuestion = generateProgression(
    progressionFirstNumber,
    progressionStep,
    progressionLength,
  );
  const correctAnswer = makeQuestion[questionPosition].toString();
  makeQuestion[questionPosition] = '..';
  const question = makeQuestion.join(' ');

  return [
    question,
    correctAnswer,
  ];
};

gameGreetings(gameNotice);
makeGame(createGameData);
