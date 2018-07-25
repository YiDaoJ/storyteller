import React, { Component } from 'react';
import styled from 'styled-components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreator from './action/actionCreator'
// import store from './store'

import Title from './components/atom/Title';
import StoryTab from './components/organism/StoryTab';

const AppContainer = styled.div`
  width: 100%;
  height: 10em;
  margin: 0 auto;
  text-align: center;
  background-color: #26A69A;
`

class App extends Component {

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/YiDaoJ/9d5abc09d7247e5c9973dcb3dcf6354d/raw/3449d1a41c0cd5ebffc14c2fc3772d987c4d847c/story.json')
      .then(response => {
        if(response.status === 200) {
          response.json().then(stories => this.props.receiveStories(stories))
        } else {
          console.log(response.status)
        }
      })
      .catch(
        error => {
          console.log(error)
        }
      )
  }

  render() {
    const { stories, index, title, content } = this.props
    return (
      <AppContainer>
        <Title className="title">
          It's your Storyteller!
        </Title>
        <StoryTab
          stories={stories}
          index={index}
          title={title}
          content={content}
          handleNextClick={() => this.props.toNextStory(stories)}/>
    </AppContainer>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    stories: state.story.stories,
    index: state.story.index,
    title: state.story.title,
    content: state.story.content
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreator, dispatch)
}

export default connect(mapSateToProps, mapDispatchToProps)(App);
