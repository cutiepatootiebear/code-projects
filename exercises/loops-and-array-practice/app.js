// Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
// // start by creating  counter
// var counter = 0
// for (var i = 0; i < officeItems.length; i++) {
//     if(officeItems[i] === "computer") {
//         counter++
//     }
// }
// console.log(counter)


// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

// var peopleWhoWantToSeeMadMaxFuryRoad = [{
//     name: "Mike",
//     age: 12,
//     gender: "male"
// }, {
//     name: "Madeline",
//     age: 80,
//     gender: "female"
// }, {
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
// }, {
//     name: "Sam",
//     age: 30,
//     gender: "male"
// }, {
//     name: "Suzy",
//     age: 4,
//     gender: "female"
// }]

// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough. SHES good to see Mad Max Fury Road')
//         } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, ' is not old enough to see Mad Max Fury Road, don\'t let HIM in.')
//         }
//         // console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name ,' is old enough to see Mad Max')
//     }
// }

// Optional bonus challenges for this problem
// #1
// Log to the console a personalized message like:
// Mike is not old enough to see Mad Max

// or

// Madeline is old enough to see Mad Max. 



// #2
// Check to see if the movie goer is a male or female for an even more personalized message.
// Mike is not old enough to see Mad Max Fury Road, don't let HIM in.

// or

// Madeline is old enough. SHE'S good to see Mad Max Fury Road.


var arr = [2, 5, 435, 4, 3]
    function toggle(blah) {
        sum = 0;
        for (var i = 0; i < blah.length; i++) {
            sum += blah[i]
        }
        if( sum % 2 === 0) {
            console.log('the toggle is set to 0ff')
        } else {
            console.log('the toggle is set to on')
        }
    }
    toggle(arr)
