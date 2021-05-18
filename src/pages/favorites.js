import view from '../utils/view';
import checkFavorite from '../utils/checkFavorite';
import Story from '../components/Story';
import store from '../store';

export default function Favorites() {
  const { favorites } = store.getState();
  const hasFavorites = favorites.length > 0;
  view.innerHTML = `<div>${
    hasFavorites
      ? favorites
          .map((story) =>
            Story({
              ...story,
              isFavorite: checkFavorite(favorites, story),
            })
          )
          .join('')
      : 'Please add favorites'
  }</div>`;

  document.querySelectorAll('.favorite').forEach((favoriteButton) => {
    favoriteButton.addEventListener('click', function () {
      const story = JSON.parse(this.dataset.story);
      store.dispatch({
        type: 'REMOVE_FAVORITE',
        payload: { favorite: story },
      });
      Favorites();
    });
  });
}
