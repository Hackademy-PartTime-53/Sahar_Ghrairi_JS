<?php
header("Content-Type: application/json");
require_once "db.php"; // Importa la configurazione del database

// Verifica che la connessione sia stata effettuata correttamente
if (!$conn) {
    echo json_encode(["error" => "Errore di connessione al database"]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Metodo non consentito"]);
    exit;
}

// Recupera i dati inviati
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["error" => "Dati non validi"]);
    exit;
}

// Estrai i dati
$companyName = trim($data["companyName"] ?? "");
$email = trim($data["email"] ?? "");
$password = trim($data["password"] ?? "");
$phone = trim($data["phone"] ?? "");
$address = trim($data["address"] ?? "");

// Validazione base
if (empty($companyName) || empty($email) || empty($password) || empty($phone) || empty($address)) {
    echo json_encode(["success" => false, "error" => "Tutti i campi sono obbligatori."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "error" => "Email non valida."]);
    exit();
}

// Verifica se l'email è già registrata
$stmt = $conn->prepare("SELECT id FROM aziende WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(["success" => false, "error" => "Email già registrata."]);
    exit();
}

$stmt->close();

// Hash della password per sicurezza
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Inserisci i dati nel database
$stmt = $conn->prepare("INSERT INTO aziende (nome, email, password, telefono, indirizzo) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $companyName, $email, $hashedPassword, $phone, $address);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Registrazione completata",
        "data" => $data
    ]);
} else {
    // Restituisce l'errore MySQL se la query non va a buon fine
    echo json_encode([
        "success" => false,
        "error" => "Errore durante la registrazione: " . $stmt->error
    ]);
}

$stmt->close();
$conn->close();
?>


<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="pag_registrazione.css">
</head>

<body>
    <div class="login-container">
        <h2>Accedi al tuo account</h2>
        <?php if (isset($error_msg)): ?>
            <p class="error"><?= $error_msg ?></p>
        <?php endif; ?>
        <form action="" method="POST">
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Accedi</button>
        </form>
        <p>Non hai ancora un account? <a href="../register/register.php">Registrati qui</a></p>
    </div>
</body>

</html>