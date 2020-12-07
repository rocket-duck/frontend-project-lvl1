#!/usr/bin/env node

import getName from '../src/cli.js';

const userName = getName;
const greetings = `Hello, ${userName}!`;

console.log(greetings);
