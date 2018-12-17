document.add.addEventListener("submit", function(e){  
    e.preventDefault();
    var addition = document.add.firstNum.value;
    var addition2 = document.add.secondNum.value;
    document.getElementById("screen").innerHTML= `<span>${Number(addition) + Number(addition2)}</span>`;
    console.log('iterator enters this function');
})

document.subtract.addEventListener("submit", function(e){  
    e.preventDefault();
    var subtract = document.subtract.firstNum.value;
    var subtract2 = document.subtract.secondNum.value;
    document.getElementById("screen").innerHTML= `<span>${Number(subtract) - Number(subtract2)}</span>`;
    console.log('iterator enters this function');
})

document.mulitply.addEventListener("submit", function(e){  
    e.preventDefault();
    var mulitply = document.mulitply.firstNum.value;
    var mulitply2 = document.mulitply.secondNum.value;
    document.getElementById("screen").innerHTML= `<span>${Number(mulitply) * Number(mulitply2)}</span>`;
    console.log('iterator enters this function');
})
