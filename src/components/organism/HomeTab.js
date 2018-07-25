import React from 'react'
import styled from 'styled-components';
import Image from '../atom/Image';
import HomeImage from '../../data/headerPic.png'

const HomeTabContainer = styled.div`
  width: 100%;
  margin: 2em auto;
`

const HomeTabText = styled.div`
  width: 100%;
  height: auto;
  margin: 1em auto;
  font-size: 1.1em;
  line-height: 2em;
  color: #455A64;
  text-align: justify;
`

const HomeTab =() => (
  <HomeTabContainer>
    <HomeTabText>
      Hi! Welcome to Story World! <br/>
      You can get a random story, or generate a story with your own characters here.<br/>
      Enjoy yourself!<br/>
    </HomeTabText>
    <Image src={HomeImage} alt='homeTabImage' />
  </HomeTabContainer>
)

export default HomeTab