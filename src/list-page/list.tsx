import React from 'react';
import styled from 'styled-components';
import { ListItem } from 'models/list-item';
import Card from './components/card';

const Main = styled.div``;

// todo: post to API
const listItems: ListItem[] = [];

export default function List() {
  return (
    <Main>
      {listItems.map(listItem => (
        <Card listItem={listItem}></Card>
      ))}
    </Main>
  );
}
