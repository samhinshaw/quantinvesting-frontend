import express from 'express';
import { BACKEND_PORT } from '../../shared/constants/backend';
import cors from 'cors';
import { MOCK_DATABASE } from './mock-user-data/items';
import { ListItem } from '../../shared/models/list-item';

const app = express();

function mockFetchUserItems(userID: string): ListItem[] {
  const { items } = MOCK_DATABASE[userID];
  return items;
}

// Only allow CORS in development
if (process.env.NODE_ENV === 'development') {
  console.log('enabling cors');
  app.use(cors());
}

app.get('/api/items/:id', (req, res) => {
  const requestedUserItems = mockFetchUserItems(req.params.id);
  res.json(requestedUserItems);
});

app.listen(BACKEND_PORT, () => console.log(`backend started on port ${BACKEND_PORT}`));
