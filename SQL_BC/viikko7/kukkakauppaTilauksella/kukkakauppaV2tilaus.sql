use kukkakauppa;

start transaction;
-- haetaan amandan asiakasId
select @id:=asiakasId from asiakas 
where etunimi='Amanda' and sukunimi='Oksanen';

-- luodaan tilaus amandalle
insert into tilaus (tilausId, asiakasId, tilauspvm)
values (6, @id, current_date);

-- select tilausId, sukunimi from tilaus
-- natural join asiakas;

--  tilataan ruusuja kukkaId=1 rovaniemen ruusutarhasta puutarhaId=2
set @tilattavaLkm=10;

select @yksHinta:=yksikkohinta from puutarhan_kukat 
where puutarhaId=2 and kukkaId=1;

-- päivitetään puutarhan varasto
update puutarhan_kukat set varasto=varasto-@tilattavaLkm
where puutarhaId=2 and kukkaId=1;

-- lisätään kukan tiedot tilausen_kukat tauluun
insert into tilauksen_kukat (tilausId, kukkaId, puutarhaId, lkm, hinta)
values(6, 1, 2, @tilattavaLkm, @yksHinta);

-- select * from puutarhan_kukat;
-- select * from tilauksen_kukat;

-- rollback;

commit;

select tilausId, tilauspvm, kukanNimi, puutarhanNimi, lkm, hinta 
from tilauksen_kukat
natural join tilaus
natural join kukka
natural join puutarha;

select puutarhanNimi, kukanNimi, yksikkohinta, varasto 
from puutarhan_kukat
natural join puutarha
natural join kukka
order by puutarhanNimi asc, kukanNimi asc;

select tilausId, tilauspvm, sukunimi, kukanNimi, puutarhanNimi, lkm, hinta 
from tilauksen_kukat
natural join tilaus
natural join kukka
natural join puutarha
natural join asiakas;


start transaction;

select @asid:=coalesce(max(asiakasId),0)+1 from asiakas;
select @tilid:=coalesce(max(tilausId),0)+1 from tilaus;

insert into asiakas (asiakasId, etunimi, sukunimi, osoite)
values(@asid,'Pekka','Puro','Datakatu 3');

insert into tilaus (tilausId, asiakasId, tilauspvm)
values (@tilid, @asid, current_date);

-- select tilausId, sukunimi from tilaus
-- natural join asiakas;

--  tilataan ruusuja kukkaId=1 rovaniemen ruusutarhasta puutarhaId=2
set @tilattavaLkm=10;

select @yksHinta:=yksikkohinta from puutarhan_kukat 
where puutarhaId=2 and kukkaId=1;

-- päivitetään puutarhan varasto
update puutarhan_kukat set varasto=varasto-@tilattavaLkm
where puutarhaId=2 and kukkaId=1;

-- lisätään kukan tiedot tilausen_kukat tauluun
insert into tilauksen_kukat (tilausId, kukkaId, puutarhaId, lkm, hinta)
values(@tilid, 1, 2, @tilattavaLkm, @yksHinta);

-- select * from puutarhan_kukat;
-- select * from tilauksen_kukat;

-- rollback;

commit;

select puutarhanNimi, kukanNimi, yksikkohinta, varasto 
from puutarhan_kukat
natural join puutarha
natural join kukka
order by puutarhanNimi asc, kukanNimi asc;

select tilausId, tilauspvm, sukunimi, kukanNimi, puutarhanNimi, lkm, hinta 
from tilauksen_kukat
natural join tilaus
natural join kukka
natural join puutarha
natural join asiakas;