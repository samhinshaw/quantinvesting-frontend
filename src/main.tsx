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

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['app'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
