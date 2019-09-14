import { ListItem } from 'shared/models/list-item';

interface MockDatabase {
  [key: string]: {
    items: ListItem[];
  };
}

export const MOCK_DATABASE: MockDatabase = {
  '1': {
    items: [
      {
        id: 0,
        text: 'adopt a cat',
        ranking: 1
      },
      {
        id: 1,
        text: 'buy ice cream',
        ranking: 2
      }
    ]
  },
  '2': {
    items: [
      {
        id: 3,
        text: 'adopt a dog',
        ranking: 1
      },
      {
        id: 4,
        text: 'buy ice cream',
        ranking: 2
      }
    ]
  }
};
