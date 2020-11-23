#!/usr/bin/env node

import askName from '../src/cli.js';

const getName = askName;
const greetings = `Hello, ${getName}!`;

console.log(greetings);
