CREATE TABLE computer (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    type VARCHAR(18) NOT NULL,
    price INT NOT NULL,
    processor VARCHAR(20) NOT NULL
);


INSERT INTO computer (id, name, type, price, processor)
VALUES (10, 'TestComp', 'server', 999, 'TestCPU');

INSERT INTO computer (id, name, type, price, processor)
VALUES (20, 'DemoComp', 'laptop', 499, 'DemoCPU');

CREATE USER 'sophie'@'localhost' IDENTIFIED BY 'SFfliXFN';
GRANT ALL PRIVILEGES ON computerdb.* TO 'sophie'@'localhost';
FLUSH PRIVILEGES;