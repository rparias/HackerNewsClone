import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Story from '../../src/components/Story';

test('renders story component', () => {
  const story = {
    index: 1234,
    url: 'Testing url',
    title: 'Title url',
    domain: 'test.url',
    points: 28,
    user: 'user-test',
    timeAgo: 'a long time ago',
    comments_count: 2,
  };
  document.body.innerHTML = `${Story(story)}`;
  expect(screen.getByText(story.index)).toBeVisible();
  expect(screen.getByText(story.title)).toBeVisible();
  expect(screen.getByText(`(${story.domain})`)).toBeVisible();
  expect(
    screen.getByText(
      `${story.points} points by ${story.user} ${story.time_ago}`
    )
  ).toBeVisible();
  expect(screen.getByText(`${story.comments_count} comments`)).toBeVisible();
});
