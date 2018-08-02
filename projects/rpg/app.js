var ask = require('readline-sync')
var gameFunctions = require('./gameFunctions')
/* if you want to modularize your code( putting functions 
    in other files and importing them )  use the key word
        module.exports at the bottom of your file you are exporting
        out of, and it will be = to an object of all your functions 
    ex. module.exports = { walk: walk, attack: attack }

    Then in this file, you would import the object under a variable
    like we do on line 2:  var gameFunctions = require('./gameFunctions')
    Then you would call the function like this gameFunctions.walk()
    It is just like importing the readline-sync object, but you have to 
    give require() the path to the file like this: require('./gameFunctions')

    You can also 'destructure' your imports like this:
    var { walk, attack } = require('./gameFunctions');
    and that allows you to just use the function name as normal:
        ex.  walk(),  attack()

    You can also do this project all in one file, and doing it that way you will
    want to organize your file so that functions are all in one place,
     the game while loop is in another, same for variables/etc.
        An example of this is below:
*/



// FUNCTIONS //
function attack(){
    while(/* user or enemy is alive */){
       var userChoice = ask.keyInSelect(options, "What would you like to do")
       if(/*user chose to attack*/){
           // userAttack()
           // enemyAttack()
       }
    }
}

function fight(){
    while(/*While the player and the enemy both have > 0 health*/){
        var userChoice = ask.keyInSelect(battleOptions, "An enemy appeared, what do you do?")
        // code to handle either user choosing to fight, flee, etc.
    }
}


function walk(){
    if(/* 1 in 3 or 1 in 4 chances of a fight*/){
        fight()
    } else {
        // continue walking
    }
}


// VARIABLES //
var player = {
    name: 'Me',
    health: 100
}

var options = ['walk', 'something else']






// GAME LOOP //

while(player.health > 0){
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
        attack()
        if(player is not alive){
            // game over
        } else {
            // player gets loot from enemy
        }
// 1

// 2

}

