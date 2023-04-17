/**
 * BMI Calculator script.
 * Calculate BMI from user provided width and height values.
 */
var weight, height, measure, bmi, error;
var calculateBtn = document.getElementById('calculateBtn');

/**
 * Initialize the BMI Calculator app.
 */
function init() {
    addListeners();
}

/**
 * Add listeners to the html elements.
 */
function addListeners() {
    calculateBtn.addEventListener('click', calculate);
}

/**
 * Remove event listeners
 */
function removeListeners() {
    calculateBtn.removeEventListener('click', calculate);
}


/**
 * Calculate BMI as per user provided width and height values.
 */
function calculate() {
    getElementValues();
	error = "Please enter some values";

	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	measure = getResult(bmi);

    showResult();
}


/**
 * Get element values from input fields to the variables.
 */
function getElementValues() {
    weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;

}


/**
 * Measure result as per provided BMI value.
 * @param {number} bmi
 * @returns Result string
 */
function getResult(bmi) {
    if (bmi <= 18.4) {
		return `Your BMI is ${bmi} which means you are Underweight`;
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		return `Your BMI is ${bmi} which means You are Normal`;
	} else if (bmi >= 25 && bmi <= 29.9) {
		return `Your BMI is ${bmi} which means You are Overweight`;
	} else if (bmi >= 30) {
		return `Your BMI is ${bmi} which means You are Obese`;
	} else {
        return "No Result";
    }
}


/**
 * Add result string to the result div element.
 */
function showResult() {
    if (weight === 0 ) {
		document.querySelector(".result").innerHTML = error;
	} else if (height === 0){
		document.querySelector(".result").innerHTML = error;
	}
	 else {
		document.querySelector(".result").innerHTML = measure;
	}
	if (weight < 0) {
		document.querySelector(".result").innerHTML = "Negative Values not Allowed";
	}
}

/**
 * Destroy the BMI Calculator app.
 */
function destroy() {
    removeListeners();
}


/**
 * Add app initilization and destroy functionality
 */
window.onload = init;
window.onunload = destroy;
