const story = (state = { stories: [], index: 1, title: '', content: '' }, action) => {
  switch(action.type) {
    case 'RECEIVE_STORIES':
      return {
        stories: [...action.stories],
        index: state.index,
        title: [...action.stories][state.index].title,
        content: [...action.stories][state.index].content
      }

    case 'TO_NEXT_STORY':
      const x = Math.floor(Math.random() * 9 )
      console.log(x)
      return {
        stories: action.stories,
        index: x,
        title: action.stories[x].title,
        content: action.stories[x].content
      }

    default:
      return state
  }
}

export default story