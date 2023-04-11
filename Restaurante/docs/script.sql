DROP DATABASE IF EXISTS restaurantes;

CREATE DATABASE restaurantes CHARSET = UTF8 COLLATE utf8_general_ci;

USE restaurantes;

CREATE TABLE cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(25) NOT NULL,
    email VARCHAR(30) NOT NULL,
    senha VARCHAR(30) NOT NULL
);

CREATE TABLE categoria (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE restaurante(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria_id INT NOT NULL,
    endereco VARCHAR(100),
    FOREIGN KEY (categoria_id) REFERENCES categoria (id)
);

CREATE TABLE cardapio(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restaurante_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor FLOAT(4, 2) NOT NULL,
        FOREIGN KEY (restaurante_id) REFERENCES restaurante(id)
);

CREATE TABLE avaliacao(
    restaurante_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    data DATE NOT NULL,
    nota FLOAT(2, 1),
    descricao VARCHAR(255) NOT NULL,
        FOREIGN KEY (restaurante_id) REFERENCES restaurante(id),
        FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);


INSERT INTO cliente (nome, telefone, email, senha)
VALUES('Paulin Pinho','99876-6475','paulip@gmail.com','pp777'),
      ('Gabriel Silva','97812-2730','Gabsilva@gmail.com','gb888'),
      ('Christian Alves','99930-2730','ChrisAlv@gmail.com','ca666');


INSERT INTO categoria (nome)
VALUES('Pizza'),
      ('Lanches'),
      ('Hot-Dog'),
      ('Pastel'),
      ('Marmitas');


INSERT INTO restaurante (nome,restaurante_id, endereco)
VALUES('Sofaronni', 1, "Rua do Pepperoni Japonês"),
      ('Calvo Lanches', 2, "Rua do Balão"),
      ('Salsichina', 3, "Avenida Azul"),
      ('Pastéis A4', 4, "Rua do Rei"),
      ('Comidinhas Da Tia Tina', 5, "Rua de Todos Nós")