import React from 'react';
import styled from 'styled-components';
// import GlobalStyles from './GlobalStyles.jsx';

const AppWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: 10px solid red;
`;

export default function App() {
  console.log('hotapp')
  return <AppWrapper/>;
};
