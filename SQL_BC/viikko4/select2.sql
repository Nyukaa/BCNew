use henkilokanta;

select etunimi, sukunimi from henkilo 
where sukunimi like 'V%';

select etunimi, sukunimi from henkilo 
where sukunimi like 'Vi%n';

select etunimi, sukunimi from henkilo 
where sukunimi like '%nen';

select etunimi, sukunimi from henkilo 
where etunimi like '%a';

select etunimi, sukunimi from henkilo 
where etunimi like '___k_';

select etunimi, sukunimi from henkilo 
where etunimi like '%r_';

select etunimi,sukunimi from henkilo 
where etunimi like 'Ville_Matti';

select etunimi,sukunimi from henkilo 
where etunimi like 'Ville\_Matti';

select etunimi,sukunimi from henkilo 
where etunimi='Ville_Matti';

-- insert into henkilo 
-- values (20,'Ville_Matias','Puro',null,null);

select etunimi,sukunimi from henkilo 
where etunimi like 'Ville\_Mat%';

select etunimi,sukunimi from henkilo 
where etunimi like 'Ville_Mat%';

select etunimi,sukunimi,palkka from henkilo
where palkka = (select min(palkka) from henkilo);

select etunimi,sukunimi,palkka from henkilo
where palkka = (select max(palkka) from henkilo);

select etunimi,sukunimi,palkka from henkilo
where palkka > (select avg(palkka) from henkilo);

select etunimi,sukunimi,palkka from henkilo
where palkka < (select avg(palkka) from henkilo);

select coalesce(max(henkiloId),0)+1 from henkilo;

select etunimi, sukunimi, palkka, case
    when palkka>4000 then 'hyvä palkka'
    else '' end as kuvaus
from henkilo;

select etunimi, sukunimi, palkka, case
    when palkka>4000 then 'hyvä palkka'
    end as kuvaus
from henkilo;

select etunimi, sukunimi, palkka, case
    when palkka>4000 then 'hyvä palkka'
    when palkka is null then 'palkka puuttuu'
    else '' end as kuvaus
from henkilo;

select etunimi, sukunimi, palkka, case
    when palkka=(select min(palkka) from henkilo) then 'pienin palkka'
    when palkka=(select max(palkka) from henkilo) then 'suurin palkka'
    else '' end as kuvaus
from henkilo;

-- update henkilo set palkka=4000;

select etunimi, sukunimi, palkka, case
    when palkka=(select max(palkka) from henkilo) then 'suurin palkka'
    when palkka=(select min(palkka) from henkilo) then 'pienin palkka'
    else '' end as kuvaus
from henkilo;

select etunimi, sukunimi, palkka, case
    when palkka=(select min(palkka) from henkilo) then 'pienin palkka'
    when palkka=(select max(palkka) from henkilo) then 'suurin palkka'
    when palkka<(select avg(palkka) from henkilo) then 'alle keskiarvon'
    else '' end as kuvaus
from henkilo;

select etunimi, sukunimi, palkka, 
    case
        when palkka=(select min(palkka) from henkilo) then 'pienin palkka'
        when palkka=(select max(palkka) from henkilo) then 'suurin palkka'
        else '' end as kuvaus, 
    case
        when palkka<(select avg(palkka) from henkilo) then 'on'
        else '' end as 'alle keskiarvon'
from henkilo;