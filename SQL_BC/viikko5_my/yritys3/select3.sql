use yrityskanta3;

select sukunimi, etunimi, osastonNimi, toimenNimi from henkilo
natural join osastoHenkilo
natural join osasto
natural join toimenkuva;

select sukunimi, etunimi, osastonNimi, toimenNimi from henkilo
natural join osastoHenkilo
natural join osasto
natural join toimenkuva
where toimenNimi!='johtaja'
order by sukunimi asc, etunimi asc, henkiloId asc;