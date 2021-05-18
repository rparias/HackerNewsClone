function createStore(reducer) {
  let currentState = reducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
    },
  };
}

const initialState = {
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  let favorites = [];
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newFavorite = action.payload.favorite;
      favorites = [...state.favorites, newFavorite];
      return { favorites };
    case 'REMOVE_FAVORITE':
      const removedFavorite = action.payload.favorite;
      favorites = state.favorites.filter(
        (favorite) => favorite.id !== removedFavorite.id
      );
      return { favorites };
    default:
      return state;
  }
}

const action = { type: 'ADD_FAVORITE', payload: { favorite: 'story1', id: 1 } };

const store = createStore(favoritesReducer);
store.dispatch(action);
console.log(store.getState());

export default store;
