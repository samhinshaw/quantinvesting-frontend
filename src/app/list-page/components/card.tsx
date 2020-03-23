import React from 'react';
import styled from 'styled-components';
import { APP_SANS_SERIF } from '../../style-guide/fonts.const';
import { DARK_GRAY } from '../../style-guide/colors.const';
import { ListItem } from '../../../shared/models/list-item';
import LargeNumberHeader from './large-number-header';

const CardBox = styled.div`
  width: 500px;
  height: 200px;
  background-color: #ffffff;
  margin: 10px auto;
`;

const Title = styled.h3`
  top: 8px;
  font-family: Roboto, sans-serif;
  color: ${DARK_GRAY};
  font-size: 18px;
  position: relative;
  display: inline-block;
  margin: 0 0 0 20px;
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

  // TODO: pull in actual partner's item ranking
  const mockPartnerListItemRanking = Math.ceil(Math.random() * 10);
  const itemStatus = listItem.ranking >= mockPartnerListItemRanking ? 'success' : 'danger';

  return (
    <CardBox>
      <LargeNumberHeader
        key={listItem.id}
        listNumber={listItem.ranking}
        status={itemStatus}
      ></LargeNumberHeader>
      <Title>{listItem.title}</Title>
      {description}
    </CardBox>
  );
}
