use henkilokanta;


update henkilo set palkka=8000 where henkiloId=6;
update henkilo set osasto='tuntematon' where osasto is null;

update henkilo set osasto='ict', palkka=4500 where henkiloId=4;
update henkilo set palkka=5500 where sukunimi='Puro';
update henkilo set palkka=6000 where henkiloId in (8, 20);

update henkilo set palkka=8000 
where henkiloId not in (8, 20) and sukunimi='Puro';

update henkilo set palkka=3000 where henkiloId not in (8,20);

