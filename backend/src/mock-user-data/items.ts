import { ListItem } from '../../../shared/models/list-item';

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
        title: 'adopt a cat',
        ranking: 1
      },
      {
        id: 1,
        title: 'buy ice cream',
        description: "let's walk to rain or shine for taco tuesday",
        ranking: 2
      }
    ]
  },
  '2': {
    items: [
      {
        id: 3,
        title: 'adopt a dog',
        ranking: 1
      },
      {
        id: 4,
        title: 'buy ice cream',
        description: "pick up a pint of Ben & Jerry's",
        ranking: 2
      }
    ]
  }
};
