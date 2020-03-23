import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

import App from './app';
import { APPLICATION_TITLE } from './title.const';

// get the dom element to mount our application at
const appMountPoint = document.getElementById('app');

const render = (): void => {
  document.title = APPLICATION_TITLE;
  ReactDOM.render(<App />, appMountPoint);
};

render();

module.hot.accept();
