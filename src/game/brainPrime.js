import createGame from '../index.js';
import random from '../random.js';

const gameNotice = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const minNumber = 1;
const maxNumber = 101;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const createGameData = () => {
  const question = random(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => createGame(gameNotice, createGameData);
