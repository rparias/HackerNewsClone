import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Comment from '../../src/components/Comment';

test('renders story component', () => {
  const comment = {
    user: 'user-test',
    time_ago: 'a long time ago',
    content: 'content comment',
    comments: [],
  };
  document.body.innerHTML = `${Comment(comment)}`;
  expect(
    screen.getByText(`${comment.user} | ${comment.time_ago}`)
  ).toBeVisible();
  expect(screen.getByText(comment.content)).toBeVisible();
});
