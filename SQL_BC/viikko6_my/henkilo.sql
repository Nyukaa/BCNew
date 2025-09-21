-- Удаляем базу, если была
DROP DATABASE IF EXISTS henkilokanta;
CREATE DATABASE henkilokanta;
USE henkilokanta;

-- Создаём таблицу henkilo
CREATE TABLE henkilo (
    henkiloId INT NOT NULL PRIMARY KEY,
    etunimi VARCHAR(25) NOT NULL,
    sukunimi VARCHAR(30) NOT NULL,
    osasto VARCHAR(20),
    palkka DECIMAL(6,2) -- максимум 9999.99
);

-- Вставляем данные
INSERT INTO henkilo VALUES (1, 'Maija', 'Meri', 'ict', 5000);
INSERT INTO henkilo VALUES (2, 'Veera','Virta','hallinto', 7000);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi, osasto, palkka) 
VALUES (3,'Pirkko','Puro','ict', 4000);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi) 
VALUES (4, 'Pekka', 'Virtanen');

INSERT INTO henkilo (sukunimi, etunimi, osasto, palkka, henkiloId)
VALUES ('Myrsky', 'Meri','huolto',4500, 5);

INSERT INTO henkilo VALUES (6,'Amanda','Puro','hallinto',NULL);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi, palkka)
VALUES (7,'Ville-Matti','Virta',7000);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
VALUES (8,'Amadeus','Puro',NULL,NULL);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
VALUES (9,'Amanda','Aakkonen','ict',4000);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
VALUES (10,'Ville Matti','Puro', 'kuljetus',6000);

INSERT INTO henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
VALUES (11,'Ville_Matti','Meri', 'huolto',5000);

-- Создаём пользователя maria и выдаём права
DROP USER IF EXISTS 'maria'@'localhost';
CREATE USER 'maria'@'localhost' IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON henkilokanta.* TO 'maria'@'localhost';
FLUSH PRIVILEGES;
