
<?php
// Run MAMP and place php files in C:\\MAMP\htdocs to run a local host
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    echo "Thank you, $name! Your email ($email) has been received.";
} else {
    echo "Error: Invalid request!";
}
?>
