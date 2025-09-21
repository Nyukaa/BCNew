use kukkakauppav1;

show databases;
show tables;

select * from kasvupaikka;
select * from kukka;
select * from puutarha;
select * from puutarhan_kukat;

select puutarhanNimi, kukanNimi from puutarha
natural join puutarhan_kukat
natural join kukka;

select puutarhanNimi, kukanNimi from puutarha 
natural join puutarhan_kukat 
natural join kukka 
order by puutarhanNimi asc, kukanNimi asc;

select puutarhanNimi, kukanNimi, yksikkohinta from puutarha
inner join puutarhan_kukat on puutarhan_kukat.puutarhaId=puutarha.puutarhaId
inner join kukka on puutarhan_kukat.kukkaId=kukka.kukkaId
order by puutarhanNimi asc, kukanNimi asc;

select kukanNimi from kukka
natural join kasvupaikka
where paikanTyyppi='aurinkoinen';

select kukanNimi, puutarhanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
natural join kasvupaikka
where paikanTyyppi='aurinkoinen'
order by kukanNimi asc, puutarhanNimi asc;

select kukanNimi, min(yksikkohinta) as halvin, max(yksikkohinta) as kallein 
from kukka
natural join puutarhan_kukat
where kukanNimi='Ruusu';

select kukanNimi, min(yksikkohinta) as halvin, max(yksikkohinta) as kallein  
from kukka 
natural join puutarhan_kukat 
group by kukanNimi;

select puutarhanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
where yksikkohinta=(select min(yksikkohinta) from kukka
natural join puutarhan_kukat where kukanNimi='Ruusu');

select kukanNimi,puutarhanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
where yksikkohinta=(
    select min(yksikkohinta) from kukka
    natural join puutarhan_kukat where kukanNimi='Ruusu'
);

select @minimi:=min(yksikkohinta) from kukka
natural join puutarhan_kukat
where kukanNimi='Ruusu';

select kukanNimi,puutarhanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
where yksikkohinta=@minimi;

select @maksimi:=max(yksikkohinta) from kukka
natural join puutarhan_kukat
where kukanNimi='Ruusu';

select kukanNimi,puutarhanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
where yksikkohinta=@minimi or yksikkohinta=@maksimi;

select kukanNimi,puutarhanNimi, yksikkohinta from puutarha
natural join puutarhan_kukat
natural join kukka
where yksikkohinta in (@minimi, @maksimi);