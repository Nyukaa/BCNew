use henkilo;

select etunimi, sukunimi from henkilo;

select  sukunimi, etunimi from henkilo order by sukunimi asc;
select  sukunimi, etunimi from henkilo  order by sukunimi asc, etunimi asc;

select  sukunimi, etunimi from henkilo  order by sukunimi asc, etunimi desc;

select  sukunimi, etunimi, palkka from henkilo  order by palkka asc;

select  sukunimi, etunimi, palkka from henkilo  order by palkka asc, etunimi desc;

select distinct sukunimi from henkilo; -- Уникальные значения
-- Фильтрация
select etunimi, sukunimi, palkka from henkilo where sukunimi='Puro';

select etunimi, sukunimi, palkka from henkilo where sukunimi='Puro' or sukunimi='Meri';

select etunimi, sukunimi, palkka from henkilo 
where sukunimi='Puro' or sukunimi='Meri'
order  by etunimi asc;

select etunimi, sukunimi from henkilo 
where sukunimi='Meri' or palkka=5000;

select etunimi, sukunimi, palkka from henkilo 
where  palkka>2000 and palkka<=5000 ;

select etunimi, sukunimi, palkka from henkilo 
where  palkka<2000 or palkka>5000 ;

select etunimi, sukunimi, palkka from henkilo 
where  palkka is Null or osasto is null;

select etunimi, sukunimi, palkka, osasto from henkilo 
where  palkka is Null or osasto is null;
-- how many rows have... 
select count(*) from henkilo;
select count(palkka) from henkilo;
-- с псевдонимом
select count(palkka) as onPalkka from henkilo;

select count(*)-count(palkka)  as puuttuu from henkilo;

select count(*) as puuttuu from henkilo where palkka is null;

select count(palkka) as puuttuu from henkilo where palkka is null; -- tulos on 0 


-- count how many the same
select etunimi, count(*) as lkm from henkilo 
group by etunimi;

select sukunimi, count(*) as lkm from henkilo 
group by sukunimi having lkm;
-- сгруппировать по фамилии и показать количество
select sukunimi, count(*) as lkm from henkilo 
group by sukunimi having lkm
order by lkm desc;

-- summa/ avarage
select sum(palkka) as palkatYh from henkilo;
select avg(palkka) as keskiPalkka from henkilo;

select round(avg(palkka),2) as keskiPalkka from henkilo;
-- усечение среднего до целого.
select truncate(avg(palkka),0) from henkilo;
-- округление вниз.
select floor(avg(palkka)) from henkilo;
select ceil(avg(palkka)) from henkilo;


select max(palkka) as maxPalkka, min(palkka) as minPalkka from henkilo;
select max(palkka) as maxPalkka, min(palkka) as minPalkka,
max(palkka)-min(palkka) as erotus from henkilo;
-- случайное число от 0 до 1.
select rand() as random;
select rand()*10
select floor(rand()*10)+1 as random; --arvot 1-10
-- к каждой строке добавить случайное число.
select sukunimi, etunimi, rand() as num from henkilo;
select sukunimi, etunimi, rand() as num from henkilo order by num;

-- фамилия либо Puro, либо Meri
select etunimi, sukunimi, palkka 
from henkilo
where sukunimi in ('Puro', 'Meri');
-- ===
select etunimi, sukunimi, palkka 
from henkilo
where (sukunimi= 'Puro'or 'Meri') and palkka>4000;

select etunimi, sukunimi, palkka 
from henkilo
where sukunimi not in ('Puro', 'Meri') and palkka>4000;

select etunimi, sukunimi, palkka from henkilo 
where  palkka>=2000 and palkka<=5000;
-- ===
select etunimi, sukunimi, palkka from henkilo 
where  palkka between 2000 and 5000;



 