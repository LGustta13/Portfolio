import React from 'react';
import styled from 'styled-components';
import { HireMe } from './pages/HireMe';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { GlobalStyle } from './styles/global';
import { Experience } from './pages/Experience';

export function App() {
  return (
    <>
      <Experience />
      <GlobalStyle />
    </>
  );
}
