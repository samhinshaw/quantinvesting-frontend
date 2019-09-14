import React from 'react';
import styled from 'styled-components';
import { APP_SANS_SERIF } from '../../style-guide/fonts.const';
import { DARK_GRAY } from '../../style-guide/colors.const';
import { ListItem } from '../../../shared/models/list-item';

const CardBox = styled.div`
  width: 500px;
  height: 200px;
  background-color: #ffffff;
  margin: 10px auto;
`;

const Title = styled.h3`
  top: 5px;
  left: 10px;
  font-family: ${APP_SANS_SERIF};
  color: ${DARK_GRAY};
  position: relative;
`;

const Description = styled.p`
  text-align: center;
  font-family: ${APP_SANS_SERIF};
  color: ${DARK_GRAY};
`;

export default function Card({ listItem }: { listItem: ListItem }) {
  // If we have the description for an item, we should display it
  const description = listItem.description ? (
    <Description>{listItem.description}</Description>
  ) : (
    undefined
  );

  return (
    <CardBox>
      <Title>{listItem.title}</Title>
      {description}
    </CardBox>
  );
}
