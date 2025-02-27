<?php
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

// Creamos las variables con la información del cliente enviada a través del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$usuario = $_POST['correo'];
$password = $_POST['contraseña'];

// Consulta SQL para buscar el usuario en la base de datos
$sql = "SELECT * FROM `$db_table_name` WHERE correo = '$usuario'";
$resultado = mysqli_query($conn, $sql);

if (!$resultado) {
   die("Error en la consulta: " . mysqli_error($conn));
}
 
if (mysqli_num_rows($resultado) > 0) {
   header('Location: ../html/fail.html');
   exit;
} else {
   // Insertar el nuevo registro
   $sql_insert = "INSERT INTO `$db_table_name` (nombre, apellido, correo, contraseña) VALUES ('$nombre', '$apellido', '$usuario', '$password')";
   $retry_value = mysqli_query($conn, $sql_insert);

   if (!$retry_value) {
       die("Error: " . mysqli_error($conn));
   }
   
   header('Location: ../html/success.html');
   exit;
}
// Cerrar la conexión
mysqli_close($conn);
		
?>