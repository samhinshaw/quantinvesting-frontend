import React from 'react';
import styled from 'styled-components';
import Card from './components/card';
import axios from 'axios';
import { API_URL } from '../../shared/constants/backend';
import { ListItem } from '../../shared/models/list-item';

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
    this.setState({
      listItems: userListItems
    });
  }

  render() {
    return (
      <Main>
        {console.log(this.state.listItems)}
        {this.state.listItems.map(listItem => (
          <Card listItem={listItem} key={listItem.id}></Card>
        ))}
      </Main>
    );
  }
}
