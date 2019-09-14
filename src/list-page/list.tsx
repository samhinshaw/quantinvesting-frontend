import React from 'react';
import styled from 'styled-components';
import { ListItem } from 'shared/models/list-item';
import Card from './components/card';
import axios from 'axios';
import { API_URL } from '../../shared/constants/backend';

const Main = styled.div``;

const queryUrl = `${API_URL}/api/items`;

interface IProps {
  userId: number;
}

interface IState {
  listItems: ListItem[];
}

export default class List extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      listItems: []
    };
  }

  async componentDidMount() {
    const { data: userListItems } = await axios.get<ListItem[]>(`${queryUrl}/${this.props.userId}`);
    console.log(userListItems);
    this.setState({
      listItems: userListItems
    });
  }

  render() {
    return (
      <Main>
        {this.state.listItems.map(listItem => (
          <Card listItem={listItem}></Card>
        ))}
      </Main>
    );
  }
}
