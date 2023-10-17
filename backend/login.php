<?php
$email = $_POST['email'];
$pass = $_POST['pass'];
$con = new mysqli('localhost', 'root', '', 'vydya');

if ($con->connect_error) {
    die("Failed to connect: " . $con->connect_error);
} else {
    $stmt = $con->prepare("select * from signup where email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    if ($stmt_result->num_rows > 0) {
        $data = $stmt_result->fetch_assoc();
        if ($data['pass'] === $pass) {
            // Login successful, redirect to profile.html
            header("Location: profile.html");
            exit(); // Make sure to exit after redirection
        } else {
            echo "Invalid login";
        }
    } else {
        echo "<h2>Invalid email</h2>";
    }
}
?>
