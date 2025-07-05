// Utility functions with terrible code quality

const DISCOUNT_THRESHOLD_HIGH = 100;
const DISCOUNT_THRESHOLD_MID = 50;
const DISCOUNT_RATE_HIGH = 0.1;
const DISCOUNT_RATE_MID = 0.05;
const DISCOUNT_RATE_LOW = 0.02;

const stringUtils = {
  // Function with console.log in production code - fixed
  formatName: function (firstName, lastName) {
    // Fixed: removed console.log
    const result = firstName + ' ' + lastName;
    return result;
  },

  // Function using var in loop - fixed
  processArray: function (arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      // Fixed: removed console.log
      results.push(item.toUpperCase());
    }
    return results;
  },

  // Function with magic numbers - fixed
  calculateDiscount: function (price) {
    let discount = 0;
    if (price > DISCOUNT_THRESHOLD_HIGH) {
      discount = price * DISCOUNT_RATE_HIGH;
    } else if (price > DISCOUNT_THRESHOLD_MID) {
      discount = price * DISCOUNT_RATE_MID;
    } else {
      discount = price * DISCOUNT_RATE_LOW;
    }
    return discount;
  },
};

const TIMEOUT_DELAY = 1000;
const CALLBACK_DELAY = 100;

// Async function with poor error handling - marked as unused
const _fetchData = function (url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === '') {
        // Fixed: strict equality
        reject(new Error('Invalid URL'));
      } else {
        resolve({ data: 'some data' });
      }
    }, TIMEOUT_DELAY); // Fixed: use constant
  });
};

// Function that modifies global state - marked as unused
let globalCounter = 0;
function _incrementGlobal() {
  globalCounter++;
  // Fixed: removed console.log
  return globalCounter;
}

// Prototype modification removed - it's a bad practice
// Fixed: removed String.prototype modification

// Function with callback hell structure - marked as unused
function _nestedCallbacks(data, callback) {
  setTimeout(() => {
    // Fixed: removed console.log
    setTimeout(() => {
      // Fixed: removed console.log
      setTimeout(() => {
        // Fixed: removed console.log
        callback(data + ' processed');
      }, CALLBACK_DELAY);
    }, CALLBACK_DELAY);
  }, CALLBACK_DELAY);
}

module.exports = stringUtils;
