// var ask = require('readline-sync')
// var gameFunctions = require('./gameFunctions')
/* if you want to modularize your code( putting functions 
    in other files and importing them )  use the key word
        module.exports at the bottom of your file you are exporting
        out of, and it will be = to an object of all your functions 
    ex. module.exports = { walk: walk, attack: attack }

    Then in tcave file, you would import the object under a variable
    like we do on line 2:  var gameFunctions = require('./gameFunctions')
    Then you would call the function like tcave gameFunctions.walk()
    It is just like importing the readline-sync object, but you have to 
    give require() the path to the file like tcave: require('./gameFunctions')

    You can also 'destructure' your imports like tcave:
    var { walk, attack } = require('./gameFunctions');
    and that allows you to just use the function name as normal:
        ex.  walk(),  attack()

    You can also do tcave project all in one file, and doing it that way you will
    want to organize your file so that functions are all in one place,
     the game while loop is in another, same for variables/etc.
        An example of tcave is below:
*/

var rs = require("readline-sync");
var help = true
var quiet = false
var convo1 = "Again, You have been tasked to find and capture Osama Bin Laden. \nMake sure to stay out of the desert 'unless you are looking for Isis. \nIf you do decide to venture off you can purchase from the armory at any time. However it seems that you have as much valor as weapons. \nGood luck in this Act of Valor'\n"
var movements = ["The Desert", "The compound"]
var townVisit = false


var player = {
    name: "Jameel",
    hp: 100,
    hpMax: 100,
    damage: 10,
    enemiesKilled: 0,
    valor: 100,
    fireShield: false,
    terrorist: false
}

var desertNames = ["Isis", "insurgent", "terrorist", "Isis fighter"];
var desertWeapons = [
    ["AK-47", 18],
    ["terrorist sword", 26],
    ["AK-47 SEMI AUTOMATIC", 24],
    ["KNIFE", 21],
    ["SWORD", 14]
]

var escape = false

var compoundNames = ["Osama Bin Laden"];
var compoundWeapons = [
    ["AK-47", 24],
    ["terrorist sword", 32],
    ["AK-47 SEMI AUTOMATIC", 34],
    ["KNIFE", 28],
    ["SWORD", 22]
]
var compoundCount = 0

var storeItems = [
    [{
            name: "Chestplate",
            value: 50,
            price: 40,
            equipped: false
        },
        {
            name: "Helmet",
            value: 20,
            price: 20,
            equipped: false
        },
        {
            name: "Gloves",
            value: 30,
            price: 30,
            equipped: false
        },
        {
            name: "Ammo",
            value: 15,
            price: 20,
            equipped: false
        }
    ],
    [{
            name: "STEEL AXE",
            value: 50,
            price: 60,
            equipped: false
        },
        {
            name: "E TOOL",
            value: 40,
            price: 35,
            equipped: false
        },
        {
            name: "K-BAR",
            value: 35,
            price: 25,
            equipped: false
        }
    ],
    [{
            name: "HK416",
            value: 20,
            price: 30,
            equipped: false
        },
        {
            name: "M4 semi-automatic",
            value: 50,
            price: 55,
            equipped: false
        }
    ]
]

var ammo = false
var x = 0
var k = 0

// function desertFight() {
//     var userDesertWeapons = desertWeapons[Math.floor((desertWeapons.length) * Math.random())];
//     var userWeaponName = desertWeapons[0]
//     var userWeaponDamage = desertWeapons[1]
//     var userDesertNames = desertNames[Math.floor(desertNames.length * Math.random())];
//     var enemyHp = Math.floor((Math.random() * 31) + 50);
//     var userDesertValor = Math.floor((Math.random() * 16) + 5);


       


//     function attack() {
//         var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
//         rs.keyInPause("Attack!");
//         enemyHp -= playerAttack
//         if (enemyHp > 0) {
//             console.log("\nYou attacked the " + desertNames + " for " + playerAttack + " hitpoints! \nThe " + desertNames + " now has " + enemyHp + " health!\n")
//         } else {
//             console.log("\nYou have killed the " + desertNames + "!\n")
//             rs.keyInPause()
//             if (weaponDamage > player.damage) {
//                 console.log("\nYou have picked up a " + weaponName + " and found " + desertValor + " valor!\n")
//                 player.damage = weaponDamage
//                 player.valor += desertValor
//                 player.enemiesKilled++
//                     rs.keyInPause()
//                 if (rs.keyInYN("Would you like to continue exploring the desert?")) {
//                     desertFight()
//                 } else {
//                     movement()
//                 }
//             } else {
//                 console.log("\nYou have found " + desertValor + " valor!\n")
//                 player.valor += desertValor
//                 player.enemiesKilled++
//                     rs.keyInPause()
//                 if (rs.keyInYN("Would you like to continue exploring the desert?")) {
//                     desertFight()
//                 } else {
//                     movement()
//                 }
//             }
//         }
//     }
//     attack()
// }
// desertFight()


var name = rs.question("\nYou are a Navy Seal and have been tasked to find and capture Osama Bin Laden. \nA CIA agent approaches you from within the training facility. \n'How we doin motivator? We've never worked with each other \nMay I ask what your rank and name is?'\n");

console.log("\nNice to meet you " + name + "! \nUnfortunately I cannot talk much longer, can't trust anyone these days. \nHowever, I do have some rather important intel and supplies that might be worth your interest. \n")

var ciaChoices = ["Thank the CIA agent for her help", "Yell at the Agent for not helping with more information"]

ciaChoices = rs.keyInSelect(ciaChoices, "Make a decision") 
    if (ciaChoices === 1) {
        help = false
    } else if (ciaChoices === 0) {
        help = true
    } else {
        quiet = true
    }
ciaResponse()

function ciaResponse(){
    if (help === false) {
        console.log("\n'YOUR LOSS SHITBAG! YOU CAN FORGET ABOUT GETTING ANYMORE OF MY HELP OR GETTING ANY OF MY SUPPLIES!' \nThe CIA Agent then kicks you out of the training facility and you are left alone outside.\n");
        rs.keyInPause();
        trainingFacilityChoice();
    } else if (help === true && quiet === false) {
        console.log("\n'My pleasure! \n" + convo1);
        rs.keyInPause();
        trainingFacilityChoice();
    } else {
        console.log("\n'Quiet type are ya? \nWell, " + convo1);
        rs.keyInPause();
        trainingFacilityChoice();
    }
}

function trainingFacilityChoice() {
    var trainingFacilityChoices = ["Purchase something from the CIA agent", "Follow the road to the city of Abbottabad"]
    trainingFacilityChoices = rs.keyInSelect(trainingFacilityChoices, "What do you want to do?")
    if (trainingFacilityChoices === 0) {
        trainingFacility();
    } else if (trainingFacilityChoices === 1) {
        city();
    } else {
        trainingFacilityChoice();
    }
}

function trainingFacility() {
    if (help === false) {
        console.log("\nYou approach the training Facility, but are greeted by the CIA agent. \n'GET OUT OF HERE! YOU AREN'T GOING TO GET MY HELP OR SUPPLIES!\n");
        rs.keyInPause();
        rs.movement();
    } else {
        var trainingFacilityChoices = ["Purchase supplies from the CIA agent", "Leave the training Facility"];
        console.log("\nYou approach the training Facility, greeted kindly by the CIA agent\n");
        trainingFacilityChoices = rs.keyInSelect(trainingFacilityChoices, "What do you want to do?");
        if (trainingFacilityChoices === 0) {
            shop()
        } else {
            movement()
        }
    } 
}


function shop(){
    var items = ["Armor", "Weapons", "Guns", "Heal[Max HP]: 5 Valor"]
    items = rs.keyInSelect(items, "What would you like to buy?")
    if (items === 0) {
        x = 0
        armorShop();
    } else if (items === 1) {
        x = 1
        weaponShop();
    } else if (items === 2) {
        x = 2
        gunShop();
    } else if (items === 3) {
        x = 3
        healthShop();
    } else {
        if (townVisit === true) {
            movement();
        } else {
            trainingFacilityChoice();
        }
    }
}


function armorShop(){
    var armorPieces = ["Chestplate(50 Health): 40 valor", "Helmet(20 Health): 20 valor", "Gloves(30 Health): 30 valor", "Boots(15 Health): 20 valor"]
    armorPieces = rs.keyInSelect(armorPieces, "What armor would you like to buy?")
    if (armorPieces === 0) {
        k = 0
        buy()
    } else if (armorPieces === 1) {
        k = 1
        buy()
    } else if (armorPieces === 2) {
        k = 2
        buy()
    } else if (armorPieces === 3) {
        k = 3
        buy()
    } else {
        shop()
    }
}

function weaponShop(){
    var weaponPieces = ["Sword(50 Damage): 60 valor", "Battle-Axe(40 Health): 35 valor", "Pistol(35 Health): 25 valor"]
    weaponPieces = rs.keyInSelect(weaponPieces, "What weapon would you like to buy?")
    if (weaponPieces === 0) {
        k = 0
        buy()
    } else if (weaponPieces === 1) {
        k = 1
        buy()
    } else if (weaponPieces === 2) {
        k = 2
        buy()
    } else {
        shop()
    }
}

function gunShop(){
    var gunPieces = ["Rifle(20 Health): 30 valor", "ammo(50 Health): 55 valor"]
    gunPieces = rs.keyInSelect(gunPieces, "What gun would you like to buy?")
    if (gunPieces === 0) {
        k = 0
        buy()
    } else if (gunPieces === 1) {
        k = 1
        buy()
    } else {
        shop()
    }
}

function healthShop() {
    if (player.hp === player.hpMax) {
        console.log("\nYour health is already full!\n")
        rs.keyInPause();
        shop()
    } else if (player.valor < 5) {
        console.log("\nYou do not have enough valor!\n")
        rs.keyInPause();
        shop()
    } else {
        player.hp = player.hpMax;
        player.valor -= 5;
        console.log("\nYou are now at " + player.hp + " HP! You now have " + player.valor + " valor!\n");
        rs.keyInPause();
        shop()
    }
}

function buy(){
    if (storeItems[x][k].equipped === true) {
        console.log("\nYou already purchased a " + storeItems[x][k].name + "!\n");
        rs.keyInPause();
        if (x === 0) {
            armorShop();
        } else if (x === 1) {
            weaponShop();
        } else if (x === 2){
            gunShop();
        } else {}
    } else if (player.valor < storeItems[x][k].price) {
        console.log("\nYou do not have enough valor!\n");
        rs.keyInPause();
        if (x === 0) {
            armorShop();
        } else if (x === 1) {
            weaponShop();
        } else if (x === 2) {
            gunShop();
        } else {}
    } else if (x === 0){
        player.hpMax += storeItems[x][k].value;
        player.hp += storeItems[x][k].value;
        player.valor -= storeItems[x][k].price;
        storeItems[x][k].equipped = true;
        console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.valor + " valor!\n");
        rs.keyInPause();
        armorShop();
    } else if (x === 1){
        if (player.damage <= storeItems[x][k].price) {
            player.damage = storeItems[x][k].value;
            player.valor -= storeItems[x][k].price;
            storeItems[x][k].equipped = true;
            console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.valor + " valor!\n");
            rs.keyInPause();
            weaponShop();
            }
            else {
            console.log("\nYour current equipped weapon is stronger than the " + storeItems[x][k].name + "!\n");
            rs.keyInPause();
            weaponShop();
        }
    } else if (x === 2){
        if (ammo === false) {
            if (k === 0) {
                player.hpMax += storeItems[x][k].value;
                player.hp += storeItems[x][k].value;
                player.valor -= storeItems[x][k].price;
                storeItems[x][k].equipped = true;
                console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.valor + " valor!\n");
                rs.keyInPause();
                gunShop();
            } else if (k === 1) {
                player.hpMax += storeItems[x][k].value;
                player.hp += storeItems[x][k].value;
                player.valor -= storeItems[x][k].price;
                ammo = true;
                player.iedShield = true;
                console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.valor + " valor!\n");
                rs.keyInPause();
                gunShop();
            } else {}
        } else {
            console.log("\nYou already own ammo!\n");
            rs.keyInPause();
            gunShop();
        }
    } else {}
}

function desertFight() {
    var desertWeapon = desertWeapons[Math.floor((desertWeapons.length) * Math.random())];
    var weaponName = desertWeapon[0]
    var weaponDamage = desertWeapon[1]
    var desertName = desertNames[Math.floor(desertNames.length * Math.random())];
    var enemyHp = Math.floor((Math.random() * 31) + 50);
    var desertValor = Math.floor((Math.random() * 16) + 5);

    function attack() {
        var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
        rs.keyInPause("Attack!");
        enemyHp -= playerAttack
        if (enemyHp > 0) {
            console.log("\nYou attacked the " + desertName + " for " + playerAttack + " hitpoints! \nThe " + desertName + " now has " + enemyHp + " health!\n")
        } else {
            console.log("\nYou have killed the " + desertName + "!\n")
            rs.keyInPause()
            if (weaponDamage > player.damage) {
                console.log("\nYou have picked up a " + weaponName + " and found " + desertValor + " valor!\n")
                player.damage = weaponDamage
                player.valor += desertValor
                player.enemiesKilled++
                    rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the desert?")) {
                    desertFight()
                } else {
                    movement()
                }
            } else {
                console.log("\nYou have found " + desertValor + " valor!\n")
                player.valor += desertValor
                player.enemiesKilled++
                    rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the desert?")) {
                    desertFight()
                } else {
                    movement()
                }
            }
        }
    }

    function defend() {
        var enemyDamage = Math.floor((Math.random() * 11) + 5);
        rs.keyInPause("Defend!")
        player.hp -= enemyDamage
        if (player.hp > 0) {
            console.log("\nThe " + desertName + " hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health. \n")
        } else {
            console.log("\nThe " + desertName + " hit you for " + enemyDamage + "! \nYou have died!\n")
        }
    }

    console.log("\nYou have ran into a " + desertName + " carrying a " + weaponName + " !\n")
    while ((enemyHp > 0 && player.hp > 0) && (escape === false)) {
        escape = Math.random() >= 0.5;
        var fightOrFlight = ["Fight!", "Run!"];
        fightOrFlight = rs.keyInSelect(fightOrFlight, "What do you want to do?");

        if ((fightOrFlight === 1) && (escape === true)) {
            console.log("\nYou have escaped!\n")
            movement();
        }
        if ((fightOrFlight === 0)) {
            escape = false
            attack();
            if (enemyHp > 0) {
                defend();
            } else {}
        } else if ((fightOrFlight === 1) && (escape === false)) {
            console.log("\nYou failed to escape!\n")
            defend();
        }
    }
}

function city() {
    if (townVisit === false) {
        townVisit = true
        console.log("\nYou low crawl for a few miles until you reach the outskirts of a giant wall. When you get closer a guard stationed infront yells at you. \n'What are you doing here?!' \nAfter explaining your situtation the guard laughs at you. 'HAH! I'm not about to let some Navy Seal into our city. \nGo find a terrorist or something and you can come in'\n")
        rs.keyInPause()
        console.log("\nYou ask the guard where a terrorist can be found. After a few moments of awkwardness from not catching the guards sarcasm, he decides to humor you. \n'You idiot. You can find a terrorist in Afghanistan south-west of here if you'd really like, or you can check out the caves yourself in the mountains to the south'\n")
        rs.keyInPause()
        movement()
    } else if (player.terrorist === false) {
        console.log("\nYou approach the city gates. The guard yells, 'you are not getting in here without finding a terrorist!'")
        rs.keyInPause()
        movement()
    } else {
        console.log("\nYou approach the city gates. The guard yells, 'you are not getting in here without finding a terrorist!'\nYou reach into your bag to pull out the intel to where terrorists are.\n'I don't believe it! You actually are a Navy SEAL!\nStill no terrorist no service'\n\nWhile you have managed to kill " + player.enemiesKilled + " enemies. You die of stolen valor.\n")
    }
}

function movement() {
    movements = ["trainingFacility", "The Desert", "The City", "The Compound", " The cave"]
    movements = rs.keyInSelect(movements, "Where do you want to go?")
    if (movements === 0) {
        trainingFacility();
    } else if (movements === 1) {
        desert();
    } else if (movements === 2) {
        city();
    } else if (movements === 3) {
        if (player.terrorist === false) {
            compound();
        } else {
            console.log("\nYou have already cleared out the compound!\n");
            rs.keyInPause();
            movement();
        }
    } else if (movements === 4) {
        if (player.tombKey === false) {
            cave();
        } else {
            console.log("\nYou have already cleared out the cave!\n");
            rs.keyInPause();
            movement();
        }
    } else {
        movement();
    }
}

function compound() {
    if (rs.keyInYN("\nCAUTION! INTEL reports show The compound is where Osama Bin Laden might be located, however there may be other dangerous terrorists around! \n Do you want to continue?\n")) {
        compoundFight()
    } else {
        movement()
    }
}

function compoundFight() {
    var compoundWeapon = compoundWeapons[Math.floor((compoundWeapons.length) * Math.random())];
    var weaponName = compoundWeapon[0]
    var weaponDamage = compoundWeapon[1]
    var compoundName = compoundNames[Math.floor(compoundNames.length * Math.random())];
    var enemyHp = Math.floor((Math.random() * 36) + 60);
    var compoundValor = Math.floor((Math.random() * 16) + 5);

    function attack() {
        var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
        rs.keyInPause("Attack!");
        enemyHp -= playerAttack
        if (enemyHp > 0) {
            console.log("\nYou attacked the " + compoundName + " for " + playerAttack + " hitpoints! \nThe " + compoundName + " now has " + enemyHp + " health!\n")
        } else {
            console.log("\nYou have killed the " + compoundName + "!\n")
            rs.keyInPause()
            compoundCount++
            if (weaponDamage > player.damage) {
                console.log("\nYou have picked up a " + weaponName + " and found " + compoundValor + " valor!\n")
                player.damage = weaponDamage
                player.valor += compoundValor
                player.enemiesKilled++
                    rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the compoundyard?")) {
                    compoundFight()
                } else {
                    movement()
                }
            } else {
                console.log("\nYou have found " + compoundValor + " valor!\n")
                player.valor += compoundValor
                player.enemiesKilled++
                    rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the compound?")) {
                    if (compoundCount < 3) {
                        compoundFight()
                    } else {
                        tombBoss();
                    }
                } else {
                    movement();
                }
            }
        }
    }

    function defend() {
        var enemyDamage = Math.floor((Math.random() * 16) + 8);
        rs.keyInPause("Defend!")
        player.hp -= enemyDamage
        if (player.hp > 0) {
            console.log("\nThe " + compoundName + " hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health. \n")
        } else {
            console.log("\nThe " + compoundName + " hit you for " + enemyDamage + "! \nYou have died!\n")
        }
    }

    console.log("\nYou have ran into a " + compoundName + " carrying a " + weaponName + " !\n")
    while ((enemyHp > 0 && player.hp > 0) && (escape === false)) {
        escape = Math.random() >= 0.5;
        var fightOrFlight = ["Fight!", "Run!"];
        fightOrFlight = rs.keyInSelect(fightOrFlight, "What do you want to do?");

        if ((fightOrFlight === 1) && (escape === true)) {
            console.log("\nYou have escaped!\n")
            compoundCount = 0;
            movement();
        }
        if ((fightOrFlight === 0)) {
            escape = false
            attack();
            if (enemyHp > 0) {
                defend();
            } else {}
        } else if ((fightOrFlight === 1) && (escape === false)) {
            console.log("\nYou failed to escape!\n")
            defend();
        }
    }
}

function desert() {
    if (rs.keyInYN("\nBEWARE! DANGEROUS ENEMIES AHEAD! \nDo you want to continue?\n")) {
        desertFight()
    } else {
        movement()
    }
}

function trainingFacility() {
    if (help === false) {
        console.log("\nYou approach the armory, but are greeted by the angry CIA agent. \n'GET OUT OF HERE! YOU AREN'T GOING TO GET MY HELP OR SUPPLIES!\n");
        rs.keyInPause();
        rs.movement();
    } else {
        var trainingFacilityChoices = ["Purchase supplies from the CIA agent", "Leave the training Facility"];
        console.log("\nYou approach the armory, greeted kindly by the CIA agent\n");
        trainingFacilityChoices = rs.keyInSelect(trainingFacilityChoices, "What do you want to do?");
        if (trainingFacilityChoices === 0) {
            shop()
        } else {
            movement()
        }
    }
}

function cave() {
    if (rs.keyInYN("\nCAUTION! The cave is full of terrorists more dangerous than those in the desert. \nYou must defeat multiple enemies to get to the end!\n Do you want to continue?\n")) {
        caveFight()
    } else {
        movement()
    }
}