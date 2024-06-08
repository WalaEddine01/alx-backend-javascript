const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
input.question('', (name) => {
  console.log(`Your name is: ${name}\r`);
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
    process.exit(0);
  });
  input.close();
});
