<?php
session_start();

// Verifica che l'utente sia loggato, altrimenti reindirizza al login
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="pag_registrazione.css">
</head>

<body>
    <div class="dashboard-container">
        <h2>Benvenuto, <?php echo $_SESSION['email']; ?>!</h2>
        <p>Questa è la tua dashboard.</p>
        <a href="../logout.php">Esci</a>
    </div>
</body>

</html>