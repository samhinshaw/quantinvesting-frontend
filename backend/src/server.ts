import express from 'express';
import items from './mock-user-data/items.json';
import { BACKEND_PORT } from '../../shared/constants/backend';
import cors from 'cors';

const app = express();

// Only allow CORS in development
if (process.env.NODE_ENV === 'development') {
  console.log('enabling cors');
  app.use(cors());
}

app.get('/api/items/:id', (req, res) => {
  console.log(req.params);
  const requestedUserItems = items['1'];
  res.json(requestedUserItems);
});

app.listen(BACKEND_PORT, () => console.log(`backend started on port ${BACKEND_PORT}`));
