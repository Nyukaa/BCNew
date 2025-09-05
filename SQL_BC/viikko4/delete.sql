use henkilokanta;

delete from henkilo where sukunimi='Puro';
delete from henkilo where osasto in ('hallinto', 'tuntematon');
delete from henkilo where etunimi like '%a';
delete from henkilo where henkiloId=11;
delete from henkilo; -- POISTAA KAIKKI RIVIT TAULUSTA!!!!