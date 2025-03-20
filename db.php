<?php
header("Content-Type: application/json");
require 'register.php';

// Configurazione database
$host = "lhcp1129.webapps.net";
$username = "sandbox_ghrairi";
$password = "7#c8O!f6JoH#6m7";
$dbname = "sandbox_ghrairi";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);


$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Connessione al database fallita: " . $conn->connect_error]));
}
