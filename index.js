// This file has intentional formatting issues to test auto-fix
const hello = function () {
  const greeting = 'Hello, world!';
  console.log('Creating greeting...');
  return greeting;
};

// Unused variable
const unused = 'This should trigger a warning';

// Missing semicolons and inconsistent quotes
const anotherFunction = function (name) {
  return 'Hello ' + name + '!';
};

module.exports = hello;
