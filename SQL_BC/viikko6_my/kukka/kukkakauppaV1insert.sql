USE kukkakauppav1;

DELETE FROM puutarhan_kukat;
DELETE FROM puutarha;
DELETE FROM kukka;
DELETE FROM kasvupaika;

INSERT INTO kasvupaikka (paikkaId, paikkaTyyppi, paikanKuvaus) VALUES
(1, 'puolivarjo', 'Kasvaa sisätiloissa'),
(2, 'varjoinen', 'Kasvaa parvekkeella'),
(3, 'aurinkoinen', 'Kasvaa puutarhassa'),
(4, 'Kuiva', 'Kasvaa luonnossa'),
(5, 'kostea', 'Kasvaa vedessä');

INSERT INTO kukka (kukkaId, kukkanimi, paikkaId) VALUES
(1, 'Ruusu', 1),
(2, 'Tulppaani', 1),
(3, 'Lumme', 5),
(4, 'Kaktus', 4),
(5, 'Auringon kukka', 3),
(6, 'Orvokki', 2);

INSERT INTO puutarha (puutarhaId, puutarhanNimi, puutarhanSijainti) VALUES
(1, 'Kukkatarha Oy', 'Vantaa'),
(2, 'Rovaniemien Puutarha', 'Rovaniemi'),
(3, 'Kukkaketo ja kaktus', 'Helsinki'),
(4, 'Ruusukasvit', 'Tampere');

INSERT INTO puutarhan_kukat (kukkaId, puutarhaId, yksikkoHinta) VALUES
(1, 1, 10),
(2, 1, 12),
(3, 2, 15),
(4, 3, 8),
(5, 1, 20),
(6, 4, 5),
(1, 4, 11),
(2, 4, 30);

