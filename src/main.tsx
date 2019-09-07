import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

// Import root app
import App from './app';

// get the dom element to mount our application at
const appMountPoint = document.getElementById('app');

const render = () => {
  ReactDOM.render(<App />, appMountPoint);
};

render();

module.hot.accept();
