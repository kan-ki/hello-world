const { hello, anotherFunction } = require('./index');

test('returns Hello, world!', () => {
  expect(hello()).toBe('Hello, world!');
});

test('anotherFunction returns personalized greeting', () => {
  expect(anotherFunction('World')).toBe('Hello World!');
  expect(anotherFunction('Jest')).toBe('Hello Jest!');
});
