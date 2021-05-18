import store from '../src/store';

describe('Store Stories', () => {
  it('global store state should be empty when it starts', () => {
    expect(store.getState().favorites).toEqual([]);
  });

  it('adds a story to global store state', () => {
    const action = {
      type: 'ADD_FAVORITE',
      payload: { favorite: 'story-test', id: 1 },
    };

    store.dispatch(action);

    expect(store.getState().favorites).toContain('story-test');
  });

  it('removes a story to global store state', () => {
    const addAction = {
      type: 'ADD_FAVORITE',
      payload: { favorite: 'story-test', id: 1 },
    };
    store.dispatch(addAction);

    const removeAction = {
      type: 'REMOVE_FAVORITE',
      payload: { favorite: 'story-test', id: 1 },
    };

    store.dispatch(removeAction);

    expect(store.getState().favorites).not.toContain('story-test');
  });
});
