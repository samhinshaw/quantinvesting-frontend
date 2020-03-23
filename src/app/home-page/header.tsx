import React from 'react';
import styled from 'styled-components';

import { APPLICATION_TITLE } from '../title.const';
import { DARK_GRAY } from '../style-guide/colors.const';
import { APP_SANS_SERIF, APP_STYLIZED_FONT } from '../style-guide/fonts.const';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  text-align: center
  font-family: ${APP_STYLIZED_FONT};
  color: ${DARK_GRAY};
  margin: 0;
`;

const TopSection = styled.div`
  margin: 0.5em 1em;
`;

export default function Header() {
  return (
    <TopSection>
      <Title>{APPLICATION_TITLE}</Title>
    </TopSection>
  );
}
