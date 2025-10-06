-- 1. Удаляем и создаём базу заново
DROP DATABASE IF EXISTS kukkakauppa;
CREATE DATABASE kukkakauppa;
USE kukkakauppa;

-- 2. Создаём пользователя (если нужно)
DROP USER IF EXISTS 'kauppias'@'localhost';
CREATE USER 'kauppias'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON kukkakauppa.* TO 'kauppias'@'localhost';

-- 3. Таблицы
CREATE TABLE kasvupaikka(
    paikkaId INT NOT NULL PRIMARY KEY,
    paikanTyyppi VARCHAR(30) NOT NULL,
    paikanKuvaus VARCHAR(100)
);

CREATE TABLE kukka(
    kukkaId INT NOT NULL PRIMARY KEY,
    kukanNimi VARCHAR(30) NOT NULL,
    paikkaId INT NOT NULL,
    FOREIGN KEY (paikkaId) REFERENCES kasvupaikka(paikkaId)
);

CREATE TABLE puutarha(
    puutarhaId INT NOT NULL PRIMARY KEY,
    puutarhanNimi VARCHAR(50) NOT NULL,
    puutarhanSijainti VARCHAR(40) NOT NULL
);

CREATE TABLE puutarhan_kukat(
    puutarhaId INT NOT NULL,
    kukkaId INT NOT NULL,
    yksikkohinta INT NOT NULL,
    varasto INT NOT NULL,
    PRIMARY KEY(puutarhaId, kukkaId),
    FOREIGN KEY (puutarhaId) REFERENCES puutarha(puutarhaId),
    FOREIGN KEY (kukkaId) REFERENCES kukka(kukkaId)
);

CREATE TABLE asiakas(
    asiakasId INT NOT NULL PRIMARY KEY,
    etunimi VARCHAR(30) NOT NULL,
    sukunimi VARCHAR(40) NOT NULL,
    osoite VARCHAR(100) NOT NULL
);

CREATE TABLE tilaus(
    tilausId INT NOT NULL PRIMARY KEY,
    asiakasId INT NOT NULL,
    tilauspvm DATE NOT NULL,
    FOREIGN KEY (asiakasId) REFERENCES asiakas(asiakasId)
);

CREATE TABLE tilauksen_kukat(
    tilausId INT NOT NULL,
    kukkaId INT NOT NULL,
    puutarhaId INT NOT NULL,
    lkm INT NOT NULL,
    hinta INT NOT NULL,
    PRIMARY KEY(tilausId, kukkaId, puutarhaId),
    FOREIGN KEY (tilausId) REFERENCES tilaus(tilausId),
    FOREIGN KEY (kukkaId) REFERENCES kukka(kukkaId),
    FOREIGN KEY (puutarhaId) REFERENCES puutarha(puutarhaId)
);

-- 4. Тестовые данные
-- kasvupaikka
INSERT INTO kasvupaikka (paikkaId, paikanTyyppi, paikanKuvaus)
VALUES (1, 'aurinkoinen', 'vaatii suoraa auringon paistetta');

INSERT INTO kasvupaikka(paikkaId,paikanTyyppi) VALUES(2,'puolivarjo');
INSERT INTO kasvupaikka(paikkaId,paikanTyyppi) VALUES(3,'varjoinen');
INSERT INTO kasvupaikka(paikkaId,paikanTyyppi) VALUES(4,'kuiva');
INSERT INTO kasvupaikka(paikkaId,paikanTyyppi) VALUES(5,'kostea');

-- kukka
INSERT INTO kukka(kukkaId,kukanNimi,paikkaId) VALUES(1,'Ruusu',1);
INSERT INTO kukka(kukkaId,kukanNimi,paikkaId) VALUES(2,'Tulppaani',1);
INSERT INTO kukka(kukkaId,kukanNimi,paikkaId) VALUES(3,'Kaktus',4);
INSERT INTO kukka(kukkaId,kukanNimi,paikkaId) VALUES(4,'Auringon kukka',1);
INSERT INTO kukka(kukkaId,kukanNimi,paikkaId) VALUES(5,'Lumme',5);
INSERT INTO kukka(kukkaId,kukanNimi,paikkaId) VALUES(6,'Orvokki',2);

-- puutarha
INSERT INTO puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
VALUES (1,'Orvokin tulppaanit oy','Vantaa');

INSERT INTO puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
VALUES (2, 'Rovaniemen ruusutarha','Rovaniemi');

INSERT INTO puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
VALUES (3, 'Kalevin kaktus ja tulppaani', 'Helsinki');

INSERT INTO puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
VALUES (4, 'Ruusutarha', 'Tampere');

-- puutarhan_kukat
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(1, 2, 2, 100);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(1, 1, 5, 50);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(2, 1, 10, 200);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(2, 6, 1, 300);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(3, 3, 25, 150);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(2, 2, 2, 250);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(4, 1, 7, 80);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(4, 4, 9, 120);
INSERT INTO puutarhan_kukat(puutarhaId, kukkaId, yksikkohinta, varasto) VALUES(4, 5, 30, 60);
