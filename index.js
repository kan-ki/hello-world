// This file has intentional formatting issues to test auto-fix
var   hello   =   function ( )   {
        var greeting="Hello, world!"       
  console.log("Creating greeting...")
        return   greeting
}

// Unused variable
var unused = "This should trigger a warning"

// Missing semicolons and inconsistent quotes
const  anotherFunction= function(name){
return "Hello "+name+"!"    
}

module.exports = hello