import React from 'react';
import { hot } from 'react-hot-loader';

function App() {
  return <h1>List</h1>;
}

const hotModule = hot(module);

export default hotModule(App);
