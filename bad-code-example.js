// This file intentionally contains MANY code quality issues to demonstrate auto-fix capabilities

const badFunction = function (param1, param2, param3, param4, param5, param6) {
  console.log('This is a very bad function with poor formatting');
  let result = param1 + param2;
  const unused_variable = 'This variable is never used';
  const another_unused = 'Another unused variable';
  result = result * param3;
  if (param4 > 0) {
    result = result / param4;
  }
  if (param5 != null && param6 != '') {
    result = result - param6;
  }
  const magic_number = 42;
  result = result + magic_number;
  return result;
};

// Missing semicolons everywhere
const globalVar = 'This is a global variable';
const anotherGlobal = 'Mixed quotes';

// Inconsistent indentation and spacing
function problematicFunction() {
  const x = 1;
  const y = 2;
  const z = 3;
  const w = 4;

  // Complex nested conditions
  if (x > 0) {
    if (y > 0) {
      if (z > 0) {
        if (w > 0) {
          console.log('Too many nested conditions');
        }
      }
    }
  }

  // Use of eval (security issue)
  const dynamicCode = '1+1';
  const evilResult = eval(dynamicCode);

  // Use of == instead of ===
  if (x == '1') {
    console.log('Using loose equality');
  }

  return x + y + z + w;
}

// Arrow function with inconsistent formatting
const arrowFunc = (a, b) => {
  return a + b;
};

// Object with poor formatting
const badObject = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 123,
  prop4: true,
  prop5: null,
};

// Array with poor formatting
const badArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function with too many parameters
function tooManyParams(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  return a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p;
}

// Unused function
function neverUsedFunction() {
  const x = 'This function is never called';
  return x;
}

// Export statement with poor formatting
module.exports = {
  badFunction: badFunction,
  problematicFunction: problematicFunction,
  arrowFunc: arrowFunc,
  badObject: badObject,
  badArray: badArray,
};
