console.log('Please enter some input: ');

process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  console.log(`You entered: ${data.trim()}`);
  process.stdin.end();
});
