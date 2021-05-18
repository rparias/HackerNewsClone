import view from '../utils/view';
import checkFavorite from '../utils/checkFavorite';
import Story from '../components/Story';
import store from '../store';

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
  const response = await fetch(
    `${process.env.HACKER_NEWS_ENDPOINT}${routePath}`
  );
  const stories = await response.json();
  return stories;
}

export default async function Stories(path) {
  const { favorites } = store.getState();
  console.log('favorites:', favorites);
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
  view.innerHTML = `<div>${
    hasStories
      ? stories
          .map((story, i) =>
            Story({
              ...story,
              index: i + 1,
              isFavorite: checkFavorite(favorites, story),
            })
          )
          .join('')
      : 'No stories'
  }</div>`;

  document.querySelectorAll('.favorite').forEach((favoriteButton) => {
    favoriteButton.addEventListener('click', async function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorite = checkFavorite(favorites, story);
      store.dispatch({
        type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: { favorite: story },
      });
      await Stories(path);
    });
  });
}
