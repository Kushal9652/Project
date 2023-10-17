<?php
// Database connection parameters
$host = "localhost"; // Your MySQL server hostname
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$database = "vydya"; // Your database name

// Create a new MySQLi connection
$mysqli = new mysqli($host, $username, $password, $database);

// Check the connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Initialize variables for form data
$formUsername = '';
$formEmail = '';
$formTiming = '';
$formDate = '';
$formAge = '';
$formPhoneNumber = '';
$formHealthCondition = '';

// Allow cross-origin requests (replace * with your allowed origins)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Check if it's a form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $formUsername = $_POST['username'];
    $formEmail = $_POST['email'];
    $formDate = $_POST['date'];
    $formAge = $_POST['age'];
    $formPhoneNumber = $_POST['phoneNumber'];
    $formHealthCondition = $_POST['healthCondition'];

    // Check if 'timing' key exists in the POST data
    if (isset($_POST['timing'])) {
        $formTiming = $_POST['timing'];
    } else {
        $formTiming = ''; // Set a default value or leave it empty
    }
}

// Prepare and execute the SQL query to insert data into the "appointments" table
$sql = "INSERT INTO appointments (username, email, timing, date, age, phoneNumber, healthCondition) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    die("Error in SQL: " . $mysqli->error);
}

$stmt->bind_param("sssssss", $formUsername, $formEmail, $formTiming, $formDate, $formAge, $formPhoneNumber, $formHealthCondition);

if ($stmt->execute()) {
    // Send a success response
    $response = array("success" => "Appointment added successfully.");
    echo json_encode($response);

    // Redirect to success.html
    header("Location: sucess.html");
    exit; // Ensure that further code is not executed after the redirect
} else {
    // Send an error response
    $response = array("error" => "Error adding appointment: " . $stmt->error);
    echo json_encode($response);
}

// Close the database connection
$stmt->close();
$mysqli->close();
?>
