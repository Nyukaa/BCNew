use kukkakauppav1b;

select * from kukka;
select * from kasvupaikka;
select * from kukan_kasvupaikat;
select * from puutarha;
select * from puutarhan_kukat;

select paikanTyyppi from kasvupaikka
natural join kukan_kasvupaikat
natural join kukka
where kukanNimi='Ruusu';

select kukanNimi, paikanTyyppi from kasvupaikka
natural join kukan_kasvupaikat
natural join kukka
order by kukanNimi asc, paikanTyyppi asc;

select kukanNimi, paikanTyyppi, case
    when paikanKuvaus is not null then paikanKuvaus
    else '' end as kuvaus 
from kasvupaikka
natural join kukan_kasvupaikat
natural join kukka
order by kukanNimi asc, paikanTyyppi asc;

select kukanNimi, paikanTyyppi, case
    when paikanKuvaus is not null then paikanKuvaus
   end as kuvaus 
from kasvupaikka
natural join kukan_kasvupaikat
natural join kukka
order by kukanNimi asc, paikanTyyppi asc;

select kukanNimi, paikanTyyppi,paikanKuvaus from kasvupaikka
natural join kukan_kasvupaikat
natural join kukka
order by kukanNimi asc, paikanTyyppi asc;

select puutarhanNimi, paikanTyyppi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka;

select distinct puutarhanNimi, paikanTyyppi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka;

select puutarhanNimi, kukanNimi, paikanTyyppi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka;

select puutarhanNimi, kukanNimi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka
where paikanTyyppi='puolivarjo';

select puutarhanNimi, kukanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka
where paikanTyyppi='puolivarjo';

select puutarhanNimi, kukanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka
where paikanTyyppi='puolivarjo'
order by kukanNimi asc, yksikkohinta asc, puutarhanNimi asc;

select kukanNimi, yksikkohinta,puutarhanNimi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kukan_kasvupaikat
natural join kasvupaikka
where paikanTyyppi='puolivarjo'
order by kukanNimi asc, yksikkohinta asc, puutarhanNimi asc;


-- vaihda aktiivinen kanta: use kukkakauppav1;

select kukanNimi, yksikkohinta,puutarhanNimi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kasvupaikka
where paikanTyyppi='puolivarjo'
order by kukanNimi asc, yksikkohinta asc, puutarhanNimi asc;

select kukanNimi, yksikkohinta,puutarhanNimi from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kasvupaikka
where paikanTyyppi='aurinkoinen'
order by kukanNimi asc, yksikkohinta asc, puutarhanNimi asc;

select kukanNimi, paikanTyyppi from kasvupaikka
natural join kukka
order by kukanNimi asc, paikanTyyppi asc;