<?php
// Allow requests from any origin (for development only, consider restricting this in production)
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods (e.g., GET, POST, OPTIONS)
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

// Allow specific HTTP headers (if needed)
header('Access-Control-Allow-Headers: Content-Type');

// Allow cookies and HTTP authentication (if needed)
header('Access-Control-Allow-Credentials: true');

// Set the response content type as JSON
header('Content-Type: application/json');

$con = mysqli_connect("localhost", "root", "", "vydya");
if (!$con) {
    die("Connection error: " . mysqli_connect_error());
}

$query = "SELECT * FROM blood_donation";
$result = mysqli_query($con, $query);

if (!$result) {
    die("Query error: " . mysqli_error($con));
}

// Fetch data from the result set and store it in an array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Close the database connection
mysqli_close($con);

// Return the data as JSON
echo json_encode($data);
?>
