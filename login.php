<?php
header("Content-Type: application/json");
session_start();

require_once "db.php"; // File con connessione al database

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["error" => "Metodo non consentito"]);
    exit;
}

// Ricezione dati dalla richiesta POST
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? null;
$password = $data['password'] ?? null;

// Validazione input
if (!$email || !$password) {
    echo json_encode(["error" => "Email e password obbligatorie"]);
    exit;
}

// Query per cercare l'utente nel database
$sql = "SELECT id, email, password FROM utenti WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Verifica password
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];
        echo json_encode(["success" => "Login effettuato con successo"]);
    } else {
        echo json_encode(["error" => "Password errata"]);
    }
} else {
    echo json_encode(["error" => "Utente non trovato"]);
}

$stmt->close();
$conn->close();
?>

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

        <!-- Messaggio di errore se credenziali errate -->
        <?php if (isset($error_msg)): ?>
            <p class="error"><?= $error_msg ?></p>
        <?php endif; ?>

        <!-- Form di login -->
        <form action="" method="POST">
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Accedi</button>
        </form>

        <!-- Link per registrarsi se non si ha un account -->
        <p>Non hai ancora un account? <a href="pag_registrazione.html">Registrati qui</a></p>
    </div>
</body>

</html>