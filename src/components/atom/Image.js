import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  display: block;
  object-fit: contain;
  height: 300px;
  width: auto;
  margin: 4em auto;
`

const Image = ({ src, alt }) => (
  <StyledImage src={src} alt={alt} />
)

export default Image