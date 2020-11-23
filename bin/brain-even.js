#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const userName = askName;
const greetings = `Hello, ${userName}!`;
console.log(greetings);

const noticeGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctPhrase = 'Correct!';
const winPhrase = `Congratulations, ${userName}!`;
const startTryCount = 1;
const maxTryCount = 3;

const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

console.log(noticeGame);

const game = (tryCount) => {
  const maxNumber = 1000;
  const randomNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  const question = readlineSync.question(
    `Question: ${randomNumber}\nYour answer: `,
  );

  if (correctAnswer(randomNumber) !== question) {
    return console.log(
      `'${question}' is wrong answer ;(.\nCorrect answer was '${correctAnswer(
        randomNumber,
      )}'. Let's try again, ${userName}!`,
    );
  }

  console.log(correctPhrase);

  if (tryCount === maxTryCount) {
    return console.log(winPhrase);
  }

  return game(tryCount + 1);
};

game(startTryCount);
