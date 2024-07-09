<?php
// Database credentials
$servername = "localhost";
$username = "root"; // use your MySQL username
$password = ""; // use your MySQL password
$dbname = "bikesDB";

// Create connection, using the database credentials
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Insert the name and email into the database here
    $stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $email);

    // if it all worked ok then confirmation message otherwise show an error
    if ($stmt->execute()) {
        echo "Thank you, $name! Your email ($email) has been received.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Error: Invalid request!";
}
?>
