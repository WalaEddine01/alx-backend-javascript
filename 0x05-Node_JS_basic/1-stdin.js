console.log('Welcome to Holberton School, what is your name?');

console.log('Enter your name: ');
process.stdin.setEncoding('utf-8');

process.stdin.once("data", (data) => {
  console.log(`Your name is: ${data.trim()}`);
  process.stdin.end();
  process.exit();
});

process.stdin.on("end", () => {
  console.log('This important software is now closing');
});
