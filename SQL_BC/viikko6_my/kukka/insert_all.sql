-- 1. Удаляем и создаем базу заново

DROP DATABASE IF EXISTS kukkakauppav1;
CREATE DATABASE kukkakauppav1;
USE kukkakauppav1;

-- 1. Таблица kasvupaika
CREATE TABLE kasvupaika (
    paikkaId INT NOT NULL PRIMARY KEY,
    paikkaTyyppi VARCHAR(30) NOT NULL,
    paikanKuvaus VARCHAR(100)
);

-- 2. Таблица kukka
CREATE TABLE kukka (
    kukkaId INT NOT NULL PRIMARY KEY,
    kukkanimi VARCHAR(30) NOT NULL,
    paikkaId INT NOT NULL,
    FOREIGN KEY (paikkaId) REFERENCES kasvupaika(paikkaId)
);

-- 3. Таблица puutarha
CREATE TABLE puutarha (
    puutarhaId INT NOT NULL PRIMARY KEY,
    puutarhanNimi VARCHAR(50) NOT NULL,
    puutarhanSijainti VARCHAR(40) NOT NULL
);

-- 4. Таблица puutarhan_kukat
CREATE TABLE puutarhan_kukat (
    kukkaId INT NOT NULL,
    puutarhaId INT NOT NULL,
    yksikkoHinta INT NOT NULL,
    PRIMARY KEY (kukkaId, puutarhaId),
    FOREIGN KEY (kukkaId) REFERENCES kukka(kukkaId),
    FOREIGN KEY (puutarhaId) REFERENCES puutarha(puutarhaId)
);

-- 5. Вставка данных
INSERT INTO kasvupaika VALUES
(1, 'puolivarjo', 'Kasvaa sisätiloissa'),
(2, 'varjoinen', 'Kasvaa parvekkeella'),
(3, 'aurinkoinen', 'Kasvaa puutarhassa'),
(4, 'Kuiva', 'Kasvaa luonnossa'),
(5, 'kostea', 'Kasvaa vedessä');

INSERT INTO kukka VALUES
(1, 'Ruusu', 1),
(2, 'Tulppaani', 1),
(3, 'Lumme', 5),
(4, 'Kaktus', 4),
(5, 'Auringon kukka', 3),
(6, 'Orvokki', 2);

INSERT INTO puutarha VALUES
(1, 'Kukkatarha Oy', 'Vantaa'),
(2, 'Rovaniemien Puutarha', 'Rovaniemi'),
(3, 'Kukkaketo ja kaktus', 'Helsinki'),
(4, 'Ruusukasvit', 'Tampere');

INSERT INTO puutarhan_kukat VALUES
(1, 1, 10),
(2, 1, 12),
(3, 2, 15),
(4, 3, 8),
(5, 1, 20),
(6, 4, 5),
(1, 4, 11),
(2, 4, 30);
