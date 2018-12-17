var axios = require("axios");

// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce(function (a, b) {
        return a + b
    })
}
// console.log(total([1,2,3]))// 6 



// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce(function (final, num) {
        return final += num.toString()
    }, '')
}

// var answer = stringConcat([1,2,3]) // "123"  
// console.log(typeof answer)

// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    var counter = 0;
    arr.forEach(function (voters) {
        if (voters.voted === true) {
            counter++
        }
    })
    return counter
}

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];
// totalVotes(voters) // 7  
// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.


// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    return arr.reduce(function (a, b) {
        // console.log('this is a', a)
        // console.log('this is b', b)
        return a + b.price
    }, 0)
}

var wishlist = [{
        title: "Tesla Model S",
        price: 90000
    },
    {
        title: "4 carat diamond ring",
        price: 45000
    },
    {
        title: "Fancy hacky Sack",
        price: 5
    },
    {
        title: "Gold fidgit spinner",
        price: 2000
    },
    {
        title: "A second Tesla Model S",
        price: 90000
    }
];

// shoppingSpree(wishlist) // 227005  



// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    return arr.reduce(function (a, b) {
        // console.log('this is a', a)
        // console.log('this is b', b)
        return a.concat(b)
    }, [])
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];  
// Note: Take a look at Array.concat() to help with this one



// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];

function voterResults(arr) {
    return arr.reduce(function (a, b) {
        // console.log(a.youngVotes)
        if (b.age <= 25 && b.age >= 18) {
            a.youth++
                if (b.voted) {
                    a.youngVotes++
                }
        } else if (b.age <= 35 && b.age >= 26) {
            a.mids++
                if (b.voted) {
                    a.midVotes++
                }
        } else if (b.age <= 55 && b.age >= 36) {
            a.olds++
                if (b.voted) {
                    a.oldVotes++
                }
        }
        return a
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    })
}

voterResults(voters) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/









// axios.get('https://api.github.com/users/cutiepatootiebear/repos').then(function(response) {
//     // console.log(response.data);
//     console.log(reducesData(response.data))
// })

// function reducesData(arr){
//     return arr.reduce(function (a, b) {
//         // console.log(a + b.watchers)
//        return a + b.watchers;
//    }, 0)
// }


axios.get('https://api.github.com/users/cutiepatootiebear/repos').then(function(response) {
    var totalWatchers = arr.reduce(function (a, b) {
        return a + b.watchers;
    }, 0)
    console.log(totalWatchers)
})