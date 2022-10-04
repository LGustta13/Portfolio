import React from 'react';
import styled from 'styled-components';
import { HireMe } from './pages/HireMe';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Services />
      <GlobalStyle />
    </>
  );
}
