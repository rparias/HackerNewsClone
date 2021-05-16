import view from '../utils/view';

const BASE_URL = 'https://node-hnapi.herokuapp.com';

async function getStories(path) {
  let routePath;
  switch (path) {
    case '/':
      routePath = '/news';
      break;
    case '/new':
      routePath = '/newest';
      break;
    case '/ask':
      routePath = '/ask';
      break;
    case '/show':
      routePath = '/show';
      break;
    default:
      routePath = '';
  }
  const response = await fetch(`${BASE_URL}${routePath}`);
  const stories = await response.json();
  return stories;
}

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
  view.innerHTML = `<div>${
    hasStories ? stories.map((story) => JSON.stringify(story)) : 'No stories'
  }</div>`;
}
