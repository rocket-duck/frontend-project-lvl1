import readlineSync from 'readline-sync';

const createGame = (gameNotice, gameData) => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  console.log(gameNotice);

  const startTryCount = 1;
  const maxTryCount = 3;

  const makeGameProgress = (data, tryCount) => {
    const correctPhrase = 'Correct!';
    const winPhrase = `Congratulations, ${getName}!`;

    const [question, correctAnswer] = gameData();

    const getAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (correctAnswer !== getAnswer) {
      console.log(`'${getAnswer}' is wrong answer `);
      console.log(`Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${getName}!`);
    }

    console.log(correctPhrase);

    if (tryCount === maxTryCount) {
      return console.log(winPhrase);
    }

    return makeGameProgress(data, tryCount + 1);
  };
  makeGameProgress(gameData, startTryCount);
};

export default createGame;
