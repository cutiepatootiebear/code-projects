document.travelForm.addEventListener("submit", function (e) {
    e.preventDefault()
    var firstName = document.travelForm.fname.value
    var lastName = document.travelForm.lname.value
    var age = document.travelForm.age.value
    var female = document.travelForm.gender.value
    var male = document.travelForm.gender.value
    var checkedLocations = []
    var checkedDiet = []
    var checkedBoxes = document.querySelectorAll("input[name=place]:checked")
    var checkedDietBoxes = document.querySelectorAll("input[name=diet]:checked")

    // locations loop
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedLocations.push(checkedBoxes[i].value);
        console.log('entered locations for loop');
    }

    // diet restrictions loop
    for (var i = 0; i < checkedDietBoxes.length; i++) {
        checkedDiet.push(checkedDietBoxes[i].value);
        console.log('entered diet for loop');
    }
    console.log('this is checkedLocations==>', checkedLocations)

    alert("First name: " + firstName + '\n' + "Last name: " +
        lastName + '\n' + "Age: " + age + '\n' + "Gender: " + female +
        '\n' + "Gender: " + male +
        '\n' + "Location: " + checkedLocations + '\n' + "Diet Restrictions: " + checkedDiet);
    console.log('HIT');
})