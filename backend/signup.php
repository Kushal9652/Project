<?php
// Get user input from POST request
$uname = $_POST['uname'];
$email = $_POST['email'];
$pass = $_POST['pass'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'vydya');

// Check if the connection was successful
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    // Prepare an SQL INSERT statement
    $stmt = $conn->prepare("INSERT INTO signup (uname, email, pass) VALUES (?, ?, ?)");

    // Check if the statement was prepared successfully
    if ($stmt) {
        // Bind the parameters to the statement
        $stmt->bind_param("sss", $uname, $email, $pass);

        // Execute the statement
        if ($stmt->execute()) {
            // User registration successful, redirect to profile.html
            header("Location: profile.html");
            exit();
        } else {
            // Print an error message if the execution fails
            echo "Error executing SQL statement: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        // Print an error message if the statement preparation fails
        echo "Error preparing SQL statement: " . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
