
// JS Exercise 1 function
function showDate() {
    document.getElementById('date').innerHTML = Date();
}

// JS Exercise 2 function
function italicizeText() {
    document.getElementById('aboutme').style.fontStyle='italic';
}

// JS Exercise 3 function
function weekDay() {
    const d = new Date();
    const options = { weekday: 'long' }; // Use 'short' for abbreviated names
    const dayName = d.toLocaleDateString('en-US', options);
    const message = "The current day is " + dayName;
    document.getElementById("weekday").innerHTML = message;
}
// Call the function to execute the code when the script is loaded
weekDay();


//  JS EXERCISE 4 

const bikes = [
"Swen",
"JACK",
"Whytey",
"Tommy",
"Scrappy"];
document.getElementById("bike0").innerHTML = bikes[0];
document.getElementById("bike1").innerHTML = bikes[1];
document.getElementById("bike2").innerHTML = bikes[2];
document.getElementById("bike3").innerHTML = bikes[3];
document.getElementById("bike4").innerHTML = bikes[4];
