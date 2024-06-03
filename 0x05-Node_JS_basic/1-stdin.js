const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
input.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  input.close();
});
