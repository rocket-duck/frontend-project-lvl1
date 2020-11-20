import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const answerName = `Hello, ${name}!`;

export default answerName;
