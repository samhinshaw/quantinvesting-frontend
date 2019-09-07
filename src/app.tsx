import React from 'react';
import { hot } from 'react-hot-loader';
import Background from './background';

function App() {
  return <Background />;
}

const hotModule = hot(module);

export default hotModule(App);
