export const receiveStories = (stories, index, title, content) => (
  {
    type: 'RECEIVE_STORIES',
    stories,
    index,
    title,
    content
  }
)

export const toNextStory = (stories, index, title, content) => (
  {
    type: 'TO_NEXT_STORY',
    stories,
    index,
    title,
    content
  }
)