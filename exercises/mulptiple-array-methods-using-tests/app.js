// Return a list of everyone older than 18.
// Have the new list sorted by last name.
// Return each name and age with <li>'s.
// Example:

function sortedOfAge(arr){  
// Sort arrayxz by age and return list items
var results = arr.filter(function(person){
   if (person.age > 18) {
       return person
   }
})
return results 
}

sortedOfAge(peopleArray);  
//Output: 
// ["<li>Rick Sanchez is 78</li>", 
// "<li>Sarah Palin is 47</li>", 
// "<li>Kyle Mooney is 27</li>", 
// "<li>Morty Smith is 13</li>", 
// "<li>Frank Zappa is 12</li>"]


var peopleArray = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },{
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },{
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
];  


module.exports = { 
    peopleArray: peopleArray, sortedOfAge: sortedOfAge
}

















// function addS(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "number"){
//             return 'no numbers'
//         } else if( arr[i].lastIndexOf('s') !== arr[i].length - 1 ){
//             newArr.push(`${arr[i]}s`)
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

//   'dogs'
//  arr[i].lastIndexOf('s') !== arr[i].length - 1
//      3               !==     3


// function addS(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "number"){
//             return 'no numbers'
//         } else if(arr[i].endsWith('s')){
//             newArr.push(`${arr[i]}`)
//         } else {
//             newArr.push(`${arr[i]}s`)
//         }
//     }
//     return newArr
// }

module.exports = { 
    sortedOfAge: sortedOfAge
}




















// HOW ASSERT FUNCTIONS WORK

// var assert = function(actual, expected){
//     try {
//         if(actual !== expected){
//             throw { 
//                 type: "Fail",
//                 details: { actual: actual, expected: expected } 
//             }
//         } else {
//             console.log("Success", { type: "Test Passed", details: { actual: actual, expected: expected }})
//         }
//     } 
//     catch(err){
//         console.log(err)
//     }
// }

// function addTwoNums(num1, num2){
//     return num1 + num2
// }

// assert(addTwoNums(1, 2), 3)
// assert(addTwoNums(5, 20), 25)