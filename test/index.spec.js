import hello from '../src/index';

xtest('returns hello world', () => {
  expect(hello()).toBe('Hello World');
});
