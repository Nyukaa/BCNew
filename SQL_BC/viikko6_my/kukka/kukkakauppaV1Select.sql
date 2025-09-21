-- 1. Список всех цветов в каждом саду, сортировка по имени сада и имени цветка
SELECT puutarhanNimi, kukkanimi
FROM puutarha
NATURAL JOIN puutarhan_kukat
NATURAL JOIN kukka
ORDER BY puutarhanNimi ASC, kukkanimi ASC;
-- Комментарий: выводим названия садов и цветов, объединяя таблицы через естественные ключи, сортируем по имени сада, потом цветка

-- 2. Список всех цветов в каждом саду с указанием цены за единицу
SELECT puutarhanNimi, kukkanimi, yksikkoHinta
FROM puutarha
INNER JOIN puutarhan_kukat ON puutarha.puutarhaId = puutarhan_kukat.puutarhaId
ORDER BY puutarhanNimi ASC, kukkanimi ASC;
-- Комментарий: аналогично предыдущему, но используем INNER JOIN и показываем цену цветка

-- 3. Названия всех цветов, которые растут в "aurinkoinen" (солнечное) место
SELECT kukkanimi
FROM kukka
NATURAL JOIN kasvupaikka
WHERE paikkaTyyppi = 'aurinkoinen';
-- Комментарий: выбираем только те цветы, которые имеют место произрастания с типом "солнечное"

-- 4. Список садов и цветов, растущих в "aurinkoinen" местах с указанием типа места, сортировка
SELECT puutarhanNimi, kukkanimi, paikkaTyyppi
FROM puutarha
NATURAL JOIN puutarhan_kukat
NATURAL JOIN kukka
NATURAL JOIN kasvupaikka
WHERE paikkaTyyppi = 'aurinkoinen'
ORDER BY kukkanimi ASC, puutarhanNimi ASC;
-- Комментарий: объединяем четыре таблицы и фильтруем по типу места, сортируем по имени цветка и саду

-- 5. Минимальная и максимальная цена для каждого вида цветка
SELECT kukkanimi, MIN(yksikkoHinta) AS halvin_hinta, MAX(yksikkoHinta) AS kallein
FROM kukka
NATURAL JOIN puutarhan_kukat
GROUP BY kukkanimi;
-- Комментарий: считаем минимальную и максимальную цену каждого цветка среди всех садов

-- 6. Сады с минимальной ценой среди всех цветов
SELECT puutarhanNimi, yksikkoHinta
FROM puutarha
NATURAL JOIN puutarhan_kukat
WHERE yksikkoHinta = (SELECT MIN(yksikkoHinta) FROM puutarhan_kukat);
-- Комментарий: ищем сад или сады, где самая низкая цена за цветок среди всех записей

-- 7. Сохраняем минимальную цену для цветка "Ruusu" в переменную
SELECT @minimi = MIN(yksikkoHinta)
FROM kukka
NATURAL JOIN puutarhan_kukat
WHERE kukkanimi = 'Ruusu';
-- Комментарий: используем переменную @minimi для дальнейшей фильтрации

-- 8. Сохраняем максимальную цену для цветка "Ruusu" в переменную
SELECT @maksimi = MAX(yksikkoHinta)
FROM kukka
NATURAL JOIN puutarhan_kukat
WHERE kukkanimi = 'Ruusu';
-- Комментарий: сохраняем максимальную цену в переменную @maksimi

-- 9. Выводим все сады, где цена цветка равна минимальной для "Ruusu"
SELECT puutarhanNimi, kukkanimi, paikkaTyyppi
FROM puutarha
NATURAL JOIN puutarhan_kukat
NATURAL JOIN kukka
WHERE yksikkoHinta = @minimi;
-- Комментарий: фильтруем только те записи, где цена цветка "Ruusu" равна минимальной среди всех садов


select kukkanimi, puutarhanNimi, yksikkoHinta from puutarha
natural join puutarhan_kukat
natural join kukka
where yksikkoHinta in( @maksimi, @minimi);
