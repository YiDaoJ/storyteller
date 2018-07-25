import React from 'react'
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '../atom/Button';

const RandomStoryContainer = styled.div`
  width: 100%;
  margin: 2em auto;
  overflow:
`

const StoryTitle = styled.h4`
  display: inline-block;
  width: 100%;
  margin: 2em auto;
`

const StoryContent = styled.div`
  width: 100%;
  height: auto;
  margin: 1em auto;
  font-size: 1.1em;
  line-height: 2em;
  color: #455A64;
  text-align: justify;
`

const btnStyle = () => ({
  button: {
    display: 'inline-block',
    float: 'right',
    marginTop: '-4.5em',
    marginRight: '5px'
  }
})

const RandomStoryTab =({ content, title, index, stories, handleNextClick, ...props }) => {
  return (
    <RandomStoryContainer>
      <StoryTitle>{title}</StoryTitle>
      <Button className={props.classes.button} onClick={handleNextClick}>
        Next Story
      </Button>
      <StoryContent>
        {content}
      </StoryContent>
    </RandomStoryContainer>
  )
}

export default withStyles(btnStyle)(RandomStoryTab)