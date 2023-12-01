<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $first_name = $_POST["first_name"];
  $last_name = $_POST["last_name"];
  $email = $_POST["email_address"];
  $date_of_birth = $_POST["date_of_birth"];

  // Saving data to the file "form_data.txt"
  $file = fopen("form_data.txt", "a");
  fwrite($file, "First Name: " . $first_name . "\n");
  fwrite($file, "Last Name: " . $last_name . "\n");
  fwrite($file, "Email Address: " . $email . "\n");
  fwrite($file, "Date of Birth: " . $date_of_birth . "\n");
  fwrite($file, "-------------------------\n");
  fclose($file);

  // Redirecting the user to the page "index.html" after 5 seconds
  header("refresh:5;url=index.html");
  echo "Thank you for your submission! You will be redirected to the homepage in 5 seconds.";
}
?>
