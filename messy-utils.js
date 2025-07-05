// Utility functions with terrible code quality

const stringUtils = {
  // Function with console.log in production code
  formatName: function (firstName, lastName) {
    console.log('Formatting name...');
    const result = firstName + ' ' + lastName;
    return result;
  },

  // Function using var in loop
  processArray: function (arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      console.log('Processing item: ' + item);
      results.push(item.toUpperCase());
    }
    return results;
  },

  // Function with magic numbers
  calculateDiscount: function (price) {
    let discount = 0;
    if (price > 100) {
      discount = price * 0.1;
    } else if (price > 50) {
      discount = price * 0.05;
    } else {
      discount = price * 0.02;
    }
    return discount;
  },
};

// Async function with poor error handling
const fetchData = function (url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url == '') {
        reject(new Error('Invalid URL'));
      } else {
        resolve({ data: 'some data' });
      }
    }, 1000);
  });
};

// Function that modifies global state
let globalCounter = 0;
function incrementGlobal() {
  globalCounter++;
  console.log('Global counter is now: ' + globalCounter);
  return globalCounter;
}

// Prototype modification (bad practice)
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

// Function with callback hell structure
function nestedCallbacks(data, callback) {
  setTimeout(() => {
    console.log('First operation');
    setTimeout(() => {
      console.log('Second operation');
      setTimeout(() => {
        console.log('Third operation');
        callback(data + ' processed');
      }, 100);
    }, 100);
  }, 100);
}

module.exports = stringUtils;
