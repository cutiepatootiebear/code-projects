// JS 
// document.
// How to create HTML Elements
// var h1 = document.createElement('h1')
// var display = document.getElementById('list')
// How to append HTML Elements
// h1.innerHTML = "<span>Hey I'm an h1</span>"
// display.appendChild(h1)

// C-R-U-D:
// Http:

// Post:    Create
// Get:     Read
// Put:     Update 
// Delete:  Delete


// AJAX - Asynchronous Javascript and XML  (Extensible Markup Language)

// readystate, onreadystatechange
var xhr = new XMLHttpRequest()
console.log(xhr)

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // parsing is turning raw JSON data (string) into a JS object we can access.
        var data = JSON.parse(xhr.responseText)
        parsePokemon(data)
    }
}


// 1. request type   2. URL    3. Is Asynchronous
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()


function parsePokemon(data) {
    var display = document.getElementById('list')
    
    for (var i = 0; i < data.objects[0].pokemon.length; i++) {
        console.log(data.objects[0].pokemon[i].name)
        display.innerHTML += `
            <li>${data.objects[0].pokemon[i].name}</li>
          `
    }

    // display.classList.add('anotherClass')
}