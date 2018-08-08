var chai = require('chai')
var myFunctions = require('./app.js')
var sortedOfAge = myFunctions.sortedOfAge
var peopleArray = []
var assert = chai.assert


//   describe,   it    //
// assert.equal  (actual, expected)    // Great for strings and numbers and booleans
// assert.deepEqual (actual, expected) // 


// it(should not add an 's' if the word ends with an 's' already
    // Write the it test:
    // Run the text (mocha) - to prove that it should fail
    // Go re-factor the function
    // Run test again.
    
describe("Createa function that Return a list of everyone older than 18.", function() {
    it("everyone older than 18", function() {
        assert.deepEqual(sortedOfAge(["<li>Rick Sanchez is 78</li>", 
        "<li>Sarah Palin is 47</li>", ]), ["<li>Rick Sanchez is 78</li>", 
        "<li>Sarah Palin is 47</li>", ])
    })

    it("should not Return a list of everyone younger than 18", function() {
        assert.deepEqual(sortedOfAge(["<li>Rick Sanchez is 7</li>", 
        "<li>Sarah Palin is 17</li>",]), ["<li>Rick Sanchez is 7</li>", 
        "<li>Sarah Palin is 17</li>",])
    })
})
