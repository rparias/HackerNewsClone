import view from '../utils/view';
import Story from '../components/Story';
import Comment from '../components/Comment';

async function getStory() {
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(
    `${process.env.HACKER_NEWS_ENDPOINT}/item/${storyId}`
  );
  const story = await response.json();
  return story;
}

export default async function Item() {
  let story = null;
  let hasComments = false;
  let hasError = false;
  try {
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch (error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
  } else {
    view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr />
  ${
    hasComments
      ? story.comments.map((comment) => Comment(comment)).join('')
      : 'No comments'
  }
  `;
  }
}
