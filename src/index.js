import readlineSync from 'readline-sync';
import getName from './cli.js';

const gameEngine = (gameNotice, gameData) => {
  const gameGreetings = (notice) => {
    const greetings = `Hello, ${getName}!`;
    console.log(greetings);
    console.log(notice);
  };
  gameGreetings(gameNotice);

  const startTryCount = 1;
  const maxTryCount = 3;

  const makeGame = (data, tryCount) => {
    const correctPhrase = 'Correct!';
    const winPhrase = `Congratulations, ${getName}!`;

    const [question, correctAnswer] = gameData();

    const getAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (correctAnswer !== getAnswer) {
      return console.log(`'${getAnswer}' is wrong answer ;(.\nCorrect answer was '${correctAnswer}'.\nLet's try again, ${getName}!`);
    }

    console.log(correctPhrase);

    if (tryCount === maxTryCount) {
      return console.log(winPhrase);
    }

    return makeGame(data, tryCount + 1);
  };
  makeGame(gameData, startTryCount);
};

export default gameEngine;
