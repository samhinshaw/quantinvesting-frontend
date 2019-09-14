import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Header from './home-page/header';
import { BACKGROUND_OFF_WHITE } from './style-guide/colors.const';
import List from './list-page/list';

// Create a Title component that'll render an <h1> tag with some styles
const Background = styled.div`
  background: ${BACKGROUND_OFF_WHITE};
  width: 100%;
  height: 100%;
  position: absolute;
`;

const MOCK_USERID = 1;

function App() {
  return (
    <Background>
      <Header></Header>
      <List userId={MOCK_USERID}></List>
    </Background>
  );
}

const hotModule = hot(module);

export default hotModule(App);
