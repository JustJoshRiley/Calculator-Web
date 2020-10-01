//save id attributes a mutable variable
const inputGender = document.getElementById('input-gender');
const inputHeight = document.getElementById('input-height');
const inputWeight = document.getElementById('input-weight');
const inputAge = document.getElementById('input-age');
//display BMR
let displayBmr = document.getElementById('display-bmr');

//add event listeners
inputHeight.addEventListener('input',calculateBmr);
inputWeight.addEventListener('input',calculateBmr);
inputAge.addEventListener('input', calculateBmr);

//add event listener for selection
inputGender.addEventListener("change", calculateBmr);

function calculateBmr() {
    //SET attributes and their values equal to new variable
    const height = parseFloat(inputHeight.value).toFixed(2);
    const weight = parseFloat(inputWeight.value).toFixed(2);
    const age = inputAge.value;

    //check to see if height, weight, or age are numbers
    //if not a number return null
    if (isNaN(height) || isNaN(weight) || isNaN(age)) 
    return;

    // console.log(gender)
    // console.log(height)
    // console.log(weight)
    // console.log(age)

    //for loop to calculate bmr
    if (inputGender.value == "female") {
        const calculatedBmr = (655 + (4.35 * weight) + (4.7 * height) + (4.7 * age));
        displayBmr.innerHTML = calculatedBmr;
        // console.log(inputGender.value)
    }
    else {
        const calculatedBmr = (66 + (6.2 * weight) + (12.7 * height) + (6.76 * age))
        displayBmr.innerHTML = parseFloat(calculatedBmr).toFixed(2);
    }
}
calculateBmr()
