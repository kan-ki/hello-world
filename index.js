const hello = function () {
  const greeting = 'Hello, world!';
  return greeting;
};

const anotherFunction = function (name) {
  return 'Hello ' + name + '!';
};

module.exports = { hello, anotherFunction };
