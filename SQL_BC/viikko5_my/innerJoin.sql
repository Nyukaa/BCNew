 mysql -u admin1 -p <yritysLuontilauseet.sql --secret
 mysql -u pomo -p --1234
 use yrityskanta;
 show tables;
 select etunimi, sukunimi, osastonNimi from henkilo 
    inner join osasto on osastoNumero = osastoId;

 select etunimi, sukunimi, osastonNimi from henkilo 
    inner join osasto on henkilo.osastoNumero = osasto.osastoId;

 select etunimi, sukunimi, osastonNimi from henkilo 
    inner join osasto on osastoNumero = osastoId
    where osastonNimi='kuljetus';

 select etunimi, sukunimi, osastonNimi from henkilo 
    inner join osasto on osastoNumero = osastoId
    where osastonNimi='ict'
    order by sukunimi asc, etunimi asc;
-- wrong and old way
 select etunimi, sukunimi, osastonNimi from henkilo, osasto
 where osastoNumero = osastoId and osastonNimi ='ict'
   order by sukunimi asc, etunimi asc; 

  select etunimi, sukunimi from henkilo where osastoNumero=1;

  select etunimi, sukunimi from henkilo 
  inner join osasto on osastoNumero=osastoId
  where osastonNimi='ict';

  select avg(palkka) as keskipalkka from henkilo where osastoNumero=1;

   select avg(palkka) as keskipalkka from henkilo 
   inner join osasto on osastoNumero=osastoId
   where osastonNimi='ict';

   select osastonNimi, count(henkiloId) as lkm from osasto 
   inner join henkilo on osastoId=osastoNumero
   group by osastonNimi;

 -- shows also departments with no employees
   select osastonNimi, count(henkiloId) as lkm from osasto 
   left join henkilo on osastoId=osastoNumero
   group by osastonNimi;


   select osastonNimi, count(henkiloId) as lkm from osasto 
   left join henkilo on osastoId=osastoNumero
   group by osastonNimi
   order by lkm desc, osastonNimi asc;

 select 
    etunimi, 
    sukunimi, 
    osastonNimi,
    case 
        when palkka > (select avg(palkka) from henkilo) then 'yli keskiarvon'
        when palkka < (select avg(palkka) from henkilo) then 'alle keskiarvon'
        else 'keskiarvossa'
    end as palkkataso
from henkilo
inner join osasto on osastoId = osastoNumero;

select avg(palkka) from henkilo;


-- ilkka.helio@bc.fi