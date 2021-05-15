import hello from '../src/index';

test('returns hello world', () => {
  expect(hello()).toBe('Hello World');
});
