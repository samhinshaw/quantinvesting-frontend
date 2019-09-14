import React from 'react';
import styled from 'styled-components';
import { APP_SANS_SERIF } from '../../style-guide/fonts.const';
import { DARK_GRAY } from '../../style-guide/colors.const';
import { ListItem } from '../../../shared/models/list-item';

const CardBox = styled.div``;

export default function Card({ listItem }: { listItem: ListItem }) {
  return <CardBox>{listItem.text}</CardBox>;
}
