import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Content>
        <h1 className="smooth">
          Welcome to my website
        </h1>
      </Content>

      <GlobalStyle />
    </>
  );
}

const Content = styled.h1`
  .smooth {
    color: var(--shape);
  }
`;
