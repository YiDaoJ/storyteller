import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import HomeTab from './HomeTab';
import RandomStoryTab from './RandomStoryTab';
import CreateStoryTab from './CreateStoryTab';

const TabsWrapper = styled.div`
  width: 80%;
  height: 80vh;
  margin: 2.4em auto 0;
`

class StoryTab extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { stories, index, content, title, handleNextClick } = this.props
    return (
      <TabsWrapper className="tabs" >
        <Tabs value={this.state.index} fullWidth onChange={this.handleChange} style={{display: 'flexbox', justifyContent: 'space-between'}}  >
          <Tab label="Home" style={{color: '#FFF'}} />
          <Tab label="Random Story" style={{color: '#FFF'}} />
          <Tab label="Create Story" style={{color: '#FFF'}} />
        </Tabs>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <HomeTab />
          <RandomStoryTab stories={stories} index={index} content={content} title={title} handleNextClick={handleNextClick}/>
          <CreateStoryTab />
        </SwipeableViews>
      </TabsWrapper>
    );
  }
}

export default StoryTab;