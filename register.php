<?php
header("Content-Type: application/json");
require_once "db.php";
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $companyName = trim($_POST["companyName"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $password = trim($_POST["password"] ?? "");
    $phone = trim($_POST["phone"] ?? "");
    $address = trim($_POST["address"] ?? "");

    if (empty($companyName) || empty($email) || empty($password) || empty($phone) || empty($address)) {
        echo json_encode(["success" => false, "error" => "Tutti i campi sono obbligatori."]);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "error" => "Email non valida."]);
        exit();
    }

    $stmt = $conn->prepare("SELECT id FROM aziende WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(["success" => false, "error" => "Email già registrata."]);
        exit();
    }

    $stmt->close();

    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Inserisci i dati nel database
    $stmt = $conn->prepare("INSERT INTO aziende (nome, email, password, telefono, indirizzo) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $companyName, $email, $hashedPassword, $phone, $address);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Errore durante la registrazione."]);
    }

    $stmt->close();
}

$conn->close();
