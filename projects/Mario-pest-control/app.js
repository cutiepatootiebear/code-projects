document.form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('button fires');
    var goomba = document.form.goomba.value
    var fiveG = 5 * goomba;
    var bob = document.form.bob.value
    var sevB= 7 * bob
    var cheap = document.form.cheap.value
    var elevC = 11 * cheap
    document.getElementById("screen").innerHTML = `<span>${Number(fiveG) +
      Number(sevB) + Number(elevC)}</span>`;
});