// Utility functions with terrible code quality

var   stringUtils   =   {
// Function with console.log in production code
formatName   :   function(  firstName,  lastName  ){
console.log("Formatting name...")
var   result   =   firstName   +   " "   +   lastName
return   result
},

// Function using var in loop
processArray   :   function(  arr  ){
var   results   =   []
for(var i=0;i<arr.length;i++){
var   item   =   arr[i]
console.log("Processing item: " + item)
results.push(item.toUpperCase())
}
return   results
},

// Function with magic numbers
calculateDiscount   :   function(  price  ){
var   discount   =   0
if(price>100){
discount   =   price   *   0.1
}else if(price>50){
discount   =   price   *   0.05
}else{
discount   =   price   *   0.02
}
return   discount
}
}

// Async function with poor error handling
var   fetchData   =   function(  url  ){
return   new   Promise(function(resolve,reject){
setTimeout(function(){
if(url==""){
reject(new Error("Invalid URL"))
}else{
resolve({data: "some data"})
}
},1000)
})
}

// Function that modifies global state
var   globalCounter   =   0
function   incrementGlobal(  ){
globalCounter++
console.log("Global counter is now: " + globalCounter)
return   globalCounter
}

// Prototype modification (bad practice)
String.prototype.reverse = function(){
return this.split('').reverse().join('')
}

// Function with callback hell structure
function   nestedCallbacks(  data,  callback  ){
setTimeout(function(){
console.log("First operation")
setTimeout(function(){
console.log("Second operation")
setTimeout(function(){
console.log("Third operation")
callback(data + " processed")
},100)
},100)
},100)
}

module.exports   =   stringUtils