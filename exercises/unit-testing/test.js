var chai = require('chai')
var myFunctions = require("./app.js")
var addS = myFunctions.addS
var assert = chai.assert

// describe, it 
//what should the test do 
describe("Create a function that adds an S to the end of every word in the array", function () {
    // specifying the  individual test
    it("should end with an s", function() {
        assert.deepEqual(addS(['dog','cat', 'aligator']),['dogs', 'cats', 'aligators'])
    })
    it("should not allow numbers into the array", function() {
        assert.equal(addS(['dog', 0, 3]), 'no numbers')
    })
    // should not add as 's' if the word ends with an 's already'
    it("should not add as 's' if the word ends with an 's already'", function() {
        assert.deepEqual(addS(['dogs', 'cats']), ['dogs', 'cats'])
    })
})






