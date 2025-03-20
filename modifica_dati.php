<?php
session_start();
require_once 'db.php'; // Assicurati di avere un file di connessione al database

// Controlla se l'utente è autenticato
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit();
}

$user_id = $_SESSION['user_id'];
$success_msg = $error_msg = "";

// Recupera i dati attuali dal database
$sql = "SELECT company_name, email FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    $company_name = $row['company_name'];
    $email = $row['email'];
} else {
    $error_msg = "Errore nel recupero dei dati.";
}

// Se il form è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $company_name = trim($_POST['company_name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (!empty($company_name) && !empty($email)) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error_msg = "Formato email non valido.";
        } else {
            // Aggiorna i dati nel database
            if (!empty($password)) {
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $sql = "UPDATE users SET company_name = ?, email = ?, password = ? WHERE id = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("sssi", $company_name, $email, $hashed_password, $user_id);
            } else {
                $sql = "UPDATE users SET company_name = ?, email = ? WHERE id = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ssi", $company_name, $email, $user_id);
            }

            if ($stmt->execute()) {
                $success_msg = "Dati aggiornati con successo!";
            } else {
                $error_msg = "Errore durante l'aggiornamento.";
            }
        }
    } else {
        $error_msg = "Tutti i campi obbligatori devono essere compilati.";
    }
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifica Dati</title>
    <link rel="stylesheet" href="pag_registrazione.css">
</head>

<body>
    <div class="container">
        <h2>Modifica i tuoi dati</h2>

        <?php if (!empty($success_msg)): ?>
            <p class="success"><?= htmlspecialchars($success_msg) ?></p>
        <?php endif; ?>

        <?php if (!empty($error_msg)): ?>
            <p class="error"><?= htmlspecialchars($error_msg) ?></p>
        <?php endif; ?>

        <form action="" method="POST">
            <label for="company_name">Nome Azienda:</label>
            <input type="text" name="company_name" value="<?= htmlspecialchars($company_name) ?>" required><br>

            <label for="email">Email:</label>
            <input type="email" name="email" value="<?= htmlspecialchars($email) ?>" required><br>

            <label for="password">Nuova Password (lascia vuoto se non vuoi cambiarla):</label>
            <input type="password" name="password"><br>

            <button type="submit">Aggiorna Dati</button>
        </form>

        <p><a href="dashboard.php">Torna alla Dashboard</a></p>
    </div>
</body>

</html>