import createGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameNotice = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 1000;
const isEven = (number) => (number % 2 === 0);

const createGameData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [
    question,
    correctAnswer,
  ];
};

export default () => createGame(gameNotice, createGameData);
