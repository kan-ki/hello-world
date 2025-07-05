// Test file with poor practices

var   badCodeExample   =   require('./bad-code-example')
var   messyUtils   =   require('./messy-utils')

// Test without proper describe blocks
test('badFunction test',function(){
var   result   =   badCodeExample.badFunction(1,2,3,4,5,6)
expect(result).toBeDefined()
})

// Test with console.log
test('problematicFunction test',function(){
console.log("Running problematic function test")
var   result   =   badCodeExample.problematicFunction()
expect(result).toBeGreaterThan(0)
})

// Test without assertions
test('arrowFunc test',function(){
var   result   =   badCodeExample.arrowFunc(1,2)
})

// Test with magic numbers
test('discount calculation',function(){
var   discount1   =   messyUtils.calculateDiscount(150)
expect(discount1).toBe(15)
var   discount2   =   messyUtils.calculateDiscount(75)
expect(discount2).toBe(3.75)
var   discount3   =   messyUtils.calculateDiscount(25)
expect(discount3).toBe(0.5)
})

// Async test without proper async handling
test('fetchData test',function(){
var   result   =   require('./messy-utils')
// Missing async/await or return statement
})

// Test with poor variable names
test('string processing',function(){
var   x   =   ["hello","world"]
var   y   =   messyUtils.processArray(x)
expect(y[0]).toBe("HELLO")
expect(y[1]).toBe("WORLD")
})