import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  margin: 0 auto;
  padding-top: 2em;
  width: 80%;
  text-align: left;
  color: #FFF;
  font-weight: 400;
`

const Title = ({ children}) => (
  <StyledTitle>
    {children}
  </StyledTitle>
)

export default Title