import express from "express";

const app = express();
const port = 1245;
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
});

export default app;
