DROP DATABASE IF EXISTS bookdb;
CREATE DATABASE bookdb;
USE bookdb;


CREATE TABLE book (
    bookID INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    author VARCHAR(12) NOT NULL,
    year INT NOT NULL,
    genre VARCHAR(23) NOT NULL
);


INSERT INTO book (bookID, name, author, year, genre)
VALUES (100, 'Test Book 1', 'Tester A', 2020, 'fiction');

INSERT INTO book (bookID, name, author, year, genre)
VALUES (200, 'Test Book 2', 'Tester B', 2021, 'nonfiction');


DROP USER IF EXISTS 'mia'@'localhost';
CREATE USER 'mia'@'localhost' IDENTIFIED BY '4k7QXgo1';
GRANT ALL PRIVILEGES ON bookdb.* TO 'mia'@'localhost';
FLUSH PRIVILEGES;
