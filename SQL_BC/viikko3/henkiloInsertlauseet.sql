use henkilokanta;

delete from henkilo; -- tyhjentää koko henkilo-taulun!!!!

insert into henkilo values(1, 'Maija', 'Meri', 'ict', 5000);
insert into henkilo values(2, 'Veera','Virta','hallinto', 7000);

insert into henkilo(henkiloId,etunimi,sukunimi,osasto,palkka) 
values(3,'Pirkko','Puro','ict', 4000);

insert into henkilo (henkiloId, etunimi, sukunimi) values(4, 'Pekka', 'Virtanen');

insert into henkilo (sukunimi, etunimi,osasto,palkka,henkiloId)
values('Myrsky', 'Meri','huolto',4500, 5);

insert into henkilo values(6,'Amanda','Puro','hallinto',null);

insert into henkilo (henkiloId, etunimi, sukunimi,palkka)
values(7,'Ville-Matti','Virta',7000);

insert into henkilo (henkiloId, etunimi,sukunimi,osasto,palkka)
values(8,'Amadeus','Puro',null,null);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto,palkka)
values(9,'Amanda','Aakkonen','ict',4000);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto,palkka)
values(10,'Ville Matti','Puro', 'kuljetus',6000);

insert into henkilo (henkiloId, etunimi, sukunimi, osasto,palkka)
values(11,'Ville_Matti','Meri', 'huolto',5000);



