import React from 'react';
import styled from 'styled-components';

import Header from './home-page/header';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Background() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}
