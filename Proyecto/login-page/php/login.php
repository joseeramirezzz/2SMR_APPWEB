<?php

// Iniciar la sesión para poder almacenar variables de sesión
session_start();

// Configuración de conexión a la base de datos
$db_host = "localhost";
$db_user = "root";  // Por defecto en XAMPP suele ser "root"
$db_password = "";     // En XAMPP, por defecto suele estar vacío: ""
$db_name = "primerabasedatos_PHP";      // Nombre de la base de datos creada
$db_table_name = "usuario";     // Nombre de la tabla creada

// Crear la conexión a MySQL usando mysqli
$conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);
if (!$conn) {
    die("No se ha podido conectar a la base de datos: " . mysqli_connect_error());
}

// Recoger los datos enviados desde el formulario
$usuario = $_POST['correo'];
$password = $_POST['contraseña'];

// Consulta SQL para buscar el usuario en la base de datos
$sql = "SELECT * FROM `$db_table_name` WHERE correo = '$usuario'";
$resultado = mysqli_query($conn, $sql);

if (!$resultado) {
    die("Error en la consulta: " . mysqli_error($conn));
}

// Comprobar si se encontró el usuario
if (mysqli_num_rows($resultado) > 0) {
    // Se extraen los datos del usuario
    $user = mysqli_fetch_assoc($resultado);   
    
    // Comparar la contraseña
    // NOTA: En un entorno real se debe usar password_verify() si se han encriptado las contraseñas.
    if ($user['Contraseña'] === $password) {
        // Inicio de sesión exitoso
        $_SESSION['Correo'] = $usuario;
        header("Location: ../html/dashboard.html");
        exit;
    } else {
        // Contraseña incorrecta
        header("Location: ../html/login_fail.html");
        exit;
    }
} else {
    // Usuario no encontrado
    header("Location: ./registro.html");
    exit;
}

// Cerrar la conexión
mysqli_close($conn);
?>
