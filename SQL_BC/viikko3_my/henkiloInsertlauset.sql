use henkilokanta;

delete from henkilo; -- wrong

insert into henkilo values(1, 'Marja', 'Meri', 'ict', 5000.00);
insert into henkilo values(2, 'Veera', 'Virta', 'ict', 7000.00);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
values(3, 'Petr', 'Meri', 'ict', 5000.00);

insert into henkilo (henkiloId, etunimi, sukunimi)
values(4, 'Abna', 'Meri');

insert into henkilo (etunimi, sukunimi, osasto, palkka, henkiloId)
values('Alex', 'Meri', 'ict', 5000.00, 5);

insert into henkilo (etunimi, sukunimi, osasto, palkka, henkiloId)
values('Arra', 'Uro', null, null, 6);

insert into henkilo (etunimi, sukunimi, osasto, palkka, henkiloId)
values('Arra', 'Uro', null, null, 8);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
values(7, 'Anna', 'Iva', 'ict', 4500.00);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
values(9, 'Ville Matti', 'Uro', 'kuljetus', 6000.00);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto, palkka)
values(10, 'Ville_Matti', 'Puro', 'kuljetus', 6000.00);