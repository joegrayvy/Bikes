
// JS Exercise 1 function - make button show date
function showDate() {
    document.getElementById('date').innerHTML = Date();
}

// JS Exercise 2 function - change formatting
function italicizeText() {
    document.getElementById('aboutme').style.fontStyle='italic';
}

// JS Exercise 3 function - show weekday
function weekDay() {
    const d = new Date();
    const options = { weekday: 'long' }; // Use 'short' for abbreviated names
    const dayName = d.toLocaleDateString('en-US', options);
    const message = "The current day is " + dayName;
    document.getElementById("weekday").innerHTML = message;
}
// Call the function to execute the code when the script is loaded
weekDay();


//  JS EXERCISE 4 - create an array

//Array of bike names

const bike = [
    "Swen",
    "JACK",
    "Whytey",
    "Tommy",
    "Scrappy"
];
const bikeDistance = [
    13000,
    18000,
    500,
    5000,
    500
];

let bikesLength = bike.length;

let bikesArray = "<ul>";
let bikeDistanceArray = "<ul>";
let sumDistance = 0;


for (let i = 0; i < bikesLength; i++) {
//  bikesArray += "<li>" + bike[i] + "</li>"; removed to add #link
    bikesArray += '<li><a href="#' + bike[i] + '">' + bike[i] + '</a></li>';
    bikeDistanceArray += "<li>" + bikeDistance[i] + "</li>";
    sumDistance += bikeDistance[i];
}

bikesArray += "</ul>";
bikeDistanceArray += "</ul>";

document.getElementById("bikes").innerHTML = "My Bikes are: " + bikesArray;
document.getElementById("bikeDistance").innerHTML = "The distance for each Bike is: " + bikeDistanceArray;
document.getElementById("sumDistance").innerHTML = "Sum of Distances: " + sumDistance;

// Replaced this with the for loop above, and repeated for the distance
/*
document.getElementById("bikes").innerHTML = bikes;
document.getElementById("bike0").innerHTML = bikes[0];
document.getElementById("bike1").innerHTML = bikes[1];
document.getElementById("bike2").innerHTML = bikes[2];
document.getElementById("bike3").innerHTML = bikes[3];
document.getElementById("bike4").innerHTML = bikes[4];
*/

// Array of bike distances

// JZ EXERCISE 5 - character count button - added to end of html page in feedback form
function commentsCount(){

    let comments = document.getElementById("comments").value;
    let charCount = comments.length;
    document.getElementById("charCount").innerText = "Number of Characters: " + charCount;

}

//JS Exercise 6 check password is more than 8 charcters
function validateForm() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    if (password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long.";
        return false; // Prevent form submission
    }

    passwordError.innerText = ""; // Clear any previous error messages
    return true; // Allow form submission
}


// JS Exercise 7 - Toggle dark mode button
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}