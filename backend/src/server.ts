import express from 'express';
import items from './mock-user-data/items.json';
const app = express();
const port = 9924;

app.get('/', (req, res) => {
  res.sendFile('../../dist/index.html');
});

app.get('/api/items/:id', (req, res) => {
  console.log(req.params);
  const requestedUserItems = items['1'];
  res.json(requestedUserItems);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
