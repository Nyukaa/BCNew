USE computerdb;

INSERT INTO computer (id, name, type, price, processor) VALUES
(1, 'Cera 2400', 'supercomputer', 1500, 'X-Force'),
(5, 'Xunil 4.7', 'gameover', 700, 'MinPower'),
(4, 'Beast II', 'embedded', 100, 'PiTron 3'),
(7, 'King 3000', 'tabletop', 499, 'BNE'),
(2, 'BigFlop Mark II', 'pocket computer', 300, 'Brain 456'),
(3, 'GameDelux', 'laptop', 200, 'Selenium II'),
(6, 'MaxEffect 2000', 'server', 2000, 'MotorOlè');

SELECT * FROM computer;

SELECT processor, id, type FROM computer;

SELECT * FROM computer WHERE price = 2000;
SELECT * FROM computer WHERE name = 'Xunil 4.7';
SELECT * FROM computer WHERE name = 'King 3000';

UPDATE computer SET type = 'laptop', price = 300 WHERE id = 2;
UPDATE computer SET type = 'embedded', price = 300 WHERE id = 3;
UPDATE computer SET price = 300, name = 'MaxEffect 2000', type = 'laptop' WHERE id = 6;
UPDATE computer SET price = 100, type = 'embedded', name = 'GameDelux' WHERE id = 2;

DELETE FROM computer WHERE id = 1;
DELETE FROM computer WHERE id = 2;
DELETE FROM computer WHERE processor = 'Brain 456';
DELETE FROM computer WHERE processor = 'Selenium II' AND type = 'tabletop';
DELETE FROM computer WHERE processor = 'Selenium II' OR processor = 'X-Force' OR price = 100;

SELECT * FROM computer;