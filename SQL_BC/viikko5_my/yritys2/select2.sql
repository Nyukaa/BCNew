show database;
use yrityskanta2;
show tables;
select * from osasto;
select * from henkilo;
select * from osastoHenkilo;

select osastonNimi, osastoSijainti from osasto
inner join osastoHenkilo on osasto.osastoId=osastoHenkilo.osastoId
inner join henkilo on osastoHenkilo.henkiloId=henkilo.henkiloId
where etunimi='Marja';
-- natural join works when column names are the same
select osastonNimi, osastoSijainti from osasto
natural join osastoHenkilo 
natural join henkilo 
where etunimi='Marja';

select etunimi, sukunimi from henkilo
    natural join osastoHenkilo 
    where osastoId=1;

select osastonNimi, osastoSijainti from osasto
natural join osastoHenkilo 
natural join henkilo 
where osastonNimi='ict';    
