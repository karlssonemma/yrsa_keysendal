import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';

const Text = styled.h1`
  color: green;
`;

const IndexPage = () => {
  return(
    <>
      <GlobalStyle />
        <Text>HEJJJJJJ</Text>
    </>
  )
}


export default IndexPage
