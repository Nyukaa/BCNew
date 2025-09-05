use henkilokanta;

delete from henkilo where sukunimi='Puro';
delete from henkilo where osasto in ('ict', 'kuljetus');
delete from henkilo where etunimi like '%a';
delete from henkilo where henkiloID=7;