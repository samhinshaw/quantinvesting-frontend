import React from 'react';
import styled from 'styled-components';
import Card from './components/card';
import axios from 'axios';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const queryUrl = `api/items`;

interface IProps {
  userId: number;
}

interface IState {
  listItems: any[];
}

export default class List extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      listItems: []
    };
  }

  async componentDidMount() {
    const { data: userListItems } = await axios.get<any>(`${queryUrl}/${this.props.userId}`);
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
