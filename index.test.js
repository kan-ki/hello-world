const hello = require('./index');

test('returns Hello, world!', () => {
  expect(hello()).toBe('Hello, world!');
});
