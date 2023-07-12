CREATE DATABASE mascotas; -- Crea la base de datos "mascotas"

USE mascotas; -- Utiliza la base de datos "mascotas"

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(50),
    direccion VARCHAR(100),
    correo VARCHAR(50),
    telefono VARCHAR(15)
);

CREATE TABLE mascotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    nombre_mascota VARCHAR(50),
    raza VARCHAR(50),
    peso INT,
    vacunado BOOLEAN,
    vacunas VARCHAR(100),
    esterilizado BOOLEAN,
    sexo VARCHAR(10),
    color VARCHAR(20),
    edad INT,
    enfermedades VARCHAR(200),
    medicamentos VARCHAR(200),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
