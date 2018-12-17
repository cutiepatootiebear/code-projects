var words = ['dogs', 'cat', 'camel', 'rat'];

function addS(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            
        }
    }

}
}

module.exports = {
    addS: addS
};






































// HOW ASSERT Function
// // assert(actual, expected)

// var assert = function (actual, expected) {
//     try {
//         if (actual !== expected) {
//             throw {
//                 type: "fail",
//                 details: {
//                     actual: actual,
//                     expected: expected
//                 }
//             }
//         } else {
//             console.log('success', {
//                 type: "test passed",
//                 details: {
//                     actual: actual,
//                     expected: expected
//                 }
//             })
//         }
//     }
//     catch (err) {
//         console.log('<==catch err')
//     }
// }

// function addTwoNums(num1, num2) {
//     return num1 + num2
// }
// assert(addTwoNums(1,2), 3)
// assert(addTwoNums(5,20),25)

// function subtractTwoNums(num1, num2) {
//     return num1 - num2
// }
// console.log(assert(subtractTwoNums(1,2), -1))
// console.log(assert(subtractTwoNums(5,20), -15))