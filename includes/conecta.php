
<?php  //Conector en PHP, permite la conexion de la base de datos con la pagina web
//Declaracion de variables en donde se almacenaran las claves
$servidor = "localhost";//direccion de la base de datos
$Usuario = "root";//usuario de la base de datos
$password ="";//contrase;a par $bd ="mascotas";//base de datos en donde se almacena la informacion
$conecta = mysqli_connect($servidor, $Usuario, $password, $bd);
if($conecta->conect_error){
    die("Error al conectar la base de datos a la pagina. "$conecta->connect_error);
    
}

?>