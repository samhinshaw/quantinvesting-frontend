import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Header from './home-page/header';
import { BACKGROUND_OFF_WHITE } from '../style-guide/colors.const';
import List from './list-page/list';
import { User } from '../models/user';

// Create a Title component that'll render an <h1> tag with some styles
const Background = styled.div`
  background: ${BACKGROUND_OFF_WHITE};
  width: 100%;
  height: 100%;
  position: absolute;
`;

const defaultUser: User = {
  id: 0,
  firstName: 'John',
  lastName: 'Johnson',
  email: 'john.johnson@example.com'
}

const mockUser: User = {
  id: 1,
  firstName: 'Sam',
  lastName: 'Hinshaw',
  email: 'samuel.hinshaw@gmail.com'
}

const UserContext = React.createContext<User>(defaultUser);


const MOCK_USERID = 1;

function App() {
  return (
    <UserContext.Provider value={mockUser}>
      <Background>
        <Header />
        <List userId={MOCK_USERID}></List>
      </Background>
    </UserContext.Provider>
  );
}

const hotModule = hot(module);

export default hotModule(App);
