import React from 'react';
import styled from 'styled-components';
import { ListItem } from 'shared/models/list-item';

const CardBox = styled.div``;

export default function Card({ listItem }: { listItem: ListItem }) {
  return <CardBox>{listItem.text}</CardBox>;
}
