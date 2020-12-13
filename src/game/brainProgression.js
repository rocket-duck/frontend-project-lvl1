import createGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameNotice = 'What number is missing in the progression?';

const minNumber = 1;
const maxNumber = 100;

const minProgressionLength = 5;
const maxProgressionLength = 10;
const minQuestionPosition = 1;

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
  const progressionFirstNumber = getRandomNumber(minNumber, maxNumber);
  const progressionStep = getRandomNumber(minNumber, maxNumber);
  const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  const questionPosition = getRandomNumber(minQuestionPosition, progressionLength);

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

export default () => createGame(gameNotice, createGameData);
