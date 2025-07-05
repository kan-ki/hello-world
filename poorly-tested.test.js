// Test file with poor practices (but working tests)

const badCodeExample = require('./bad-code-example');
const messyUtils = require('./messy-utils');

// Test without proper describe blocks
test('badFunction test', () => {
  const result = badCodeExample.badFunction(1, 2, 3, 4, 5, 6);
  expect(result).toBeDefined();
});

// Test with console.log
test('problematicFunction test', () => {
  console.log('Running problematic function test');
  const result = badCodeExample.problematicFunction();
  expect(result).toBeGreaterThan(0);
});

// Test with basic assertion added
test('arrowFunc test', () => {
  const result = badCodeExample.arrowFunc(1, 2);
  expect(result).toBe(3);
});

// Test with magic numbers
test('discount calculation', () => {
  const discount1 = messyUtils.calculateDiscount(150);
  expect(discount1).toBe(15);
  const discount2 = messyUtils.calculateDiscount(75);
  expect(discount2).toBe(3.75);
  const discount3 = messyUtils.calculateDiscount(25);
  expect(discount3).toBe(0.5);
});

// Simple test that passes
test('basic functionality test', () => {
  expect(true).toBe(true);
});

// Test with poor variable names
test('string processing', () => {
  const x = ['hello', 'world'];
  const y = messyUtils.processArray(x);
  expect(y[0]).toBe('HELLO');
  expect(y[1]).toBe('WORLD');
});
