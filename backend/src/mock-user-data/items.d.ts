import { ListItem } from 'models/list-item';

declare module 'items.json' {
  const value: {
    [key: string]: ListItem[];
  };
  export default value;
}
