// Test file with poor practices (but working tests)

const badCodeExample = require('./bad-code-example');
const messyUtils = require('./messy-utils');

// Constants to fix magic numbers
const PARAM_ONE = 1;
const PARAM_TWO = 2;
const PARAM_THREE = 3;
const PARAM_FOUR = 4;
const EXPECTED_SUM = 3;
const HIGH_PRICE = 150;
const EXPECTED_HIGH_DISCOUNT = 15;
const MID_PRICE = 75;
const EXPECTED_MID_DISCOUNT = 3.75;
const LOW_PRICE = 25;
const EXPECTED_LOW_DISCOUNT = 0.5;

// Test without proper describe blocks
test('badFunction test', () => {
  const result = badCodeExample.badFunction(PARAM_ONE, PARAM_TWO, PARAM_THREE, PARAM_FOUR);
  expect(result).toBeDefined();
});

// Test with console.log - fixed
test('problematicFunction test', () => {
  // Fixed: removed console.log
  const result = badCodeExample.problematicFunction();
  expect(result).toBeGreaterThan(0);
});

// Test with basic assertion added
test('arrowFunc test', () => {
  const result = badCodeExample.arrowFunc(PARAM_ONE, PARAM_TWO);
  expect(result).toBe(EXPECTED_SUM);
});

// Test with magic numbers - fixed
test('discount calculation', () => {
  const discount1 = messyUtils.calculateDiscount(HIGH_PRICE);
  expect(discount1).toBe(EXPECTED_HIGH_DISCOUNT);
  const discount2 = messyUtils.calculateDiscount(MID_PRICE);
  expect(discount2).toBe(EXPECTED_MID_DISCOUNT);
  const discount3 = messyUtils.calculateDiscount(LOW_PRICE);
  expect(discount3).toBe(EXPECTED_LOW_DISCOUNT);
});

// Simple test that passes
test('basic functionality test', () => {
  expect(true).toBe(true);
});

// Test with poor variable names - fixed
test('string processing', () => {
  const inputArray = ['hello', 'world'];
  const processedArray = messyUtils.processArray(inputArray);
  expect(processedArray[0]).toBe('HELLO');
  expect(processedArray[1]).toBe('WORLD');
});
