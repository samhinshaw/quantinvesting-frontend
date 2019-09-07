import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

// Import root app
import App from './app';

// get the dom element to mount our application at
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

render();

module.hot.accept();
