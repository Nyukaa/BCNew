use henkilo;

-- начинается с буквы V like 
select etunimi, sukunimi, palkka from henkilo 
where sukunimi like 'V%';

-- '_a%' вторая буква — a 
select etunimi, sukunimi, palkka from henkilo 
where sukunimi like '_a%';
-- like '%ur%' подстроку or  
select etunimi, sukunimi, palkka from henkilo 
where sukunimi like '%ur%';
-- like '%nen' оканчивается на nen
select etunimi, sukunimi, palkka from henkilo 
where sukunimi like '%nen';

--
select etunimi, sukunimi, palkka from henkilo 
where palkka < (select avg(palkka) from henkilo ); 
-- этот запрос возвращает новый ID, который можно использовать для вставки
select coalesce(max(henkiloID), 0) + 1 from henkilo;


select etunimi, sukunimi,palkka, case
when  palkka > 5000 then 'hyvä'
else '' end as kuvaus from henkilo;


select etunimi, sukunimi,palkka, case
when  palkka > 5000 then 'hyvä'
when  palkka is null then 'puuttuu'
else '' end as kuvaus
 from henkilo;

 select etunimi, sukunimi,palkka, case
when  palkka=(select min(palkka) from henkilo)  then 'pienin'
when  palkka=(select max(palkka) from henkilo)  then 'suurin'
else '' end as kuvaus
 from henkilo;

--- update database
 update henkilo set palkka=4000;

select etunimi, sukunimi,palkka, case
when  palkka=(select min(palkka) from henkilo)  then 'pienin'
when  palkka=(select max(palkka) from henkilo)  then 'suurin'
when  palkka<(select avg(palkka) from henkilo)  then 'alle keskiarvon'
else '' end as kuvaus
from henkilo;

select etunimi, sukunimi,palkka, 
case
    when  palkka=(select min(palkka) from henkilo)  then 'pienin'
    when  palkka=(select max(palkka) from henkilo)  then 'suurin'

    else '' end as kuvaus, 
case 
    when  palkka<(select avg(palkka) from henkilo)  then 'on'
    else '' end as 'alle keskiarvon'
from henkilo;