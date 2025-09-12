drop database if exists yrityskanta3;
create database yrityskanta3;

use yrityskanta3;

drop user if exists 'pomo3'@'localhost';
create user 'pomo3'@'localhost' identified by '1234';
grant all privileges on yrityskanta3.* to 'pomo3'@'localhost';

create table osasto(
    osastoId integer not null primary key,
    osastonNimi varchar(30) not null,
    osastoSijainti varchar(25) not null

);

create table henkilo(
    henkiloId integer not null primary key,
    etunimi varchar(20) not null,
    sukunimi varchar(30) not null,
    palkka decimal(6,2) not null
    -- osastoNumero integer not null
   
);

create table toimenkuva(    
    toimenId integer not null primary key,
    toimenNimi varchar(30) not null,
    asema varchar(30),
    toimenKuvaus varchar(200)
);

create table osastoHenkilo(
    osastoId integer not null,
    henkiloId integer not null,
    toimenId integer not null,
    primary key(osastoId, henkiloId, toimenId),
    foreign key(osastoId) references osasto(osastoId),
    foreign key(henkiloId) references henkilo(henkiloId),
    foreign key(toimenId) references toimenkuva(toimenId)

);



insert into osasto values(1, 'ict', 'kellari');
insert into osasto values(2, 'hallinto', 'kerros 12');
insert into osasto values(3, 'kuljetus', 'talli');
insert into osasto values(4, 'hulto', 'verstas');

insert into henkilo values(1, 'Marja', 'Meri', 5000.00);
insert into henkilo values(2, 'Veera', 'Puro', 7000.00);
insert into henkilo values(3, 'Kalle', 'Kivi', 4500.00);
insert into henkilo values(4, 'Matti',  'Meikäläinen', 3000.00);
insert into henkilo values(5, 'Maija', 'Virta', 3200.00);


insert into toimenkuva values(1, 'koodari', 10, 'ohjelmistojen koodaaminen');
insert into toimenkuva values(2, 'skuskaaja', 1, null);
insert into toimenkuva values(3,  'johtaja', 20,'osaston johtaminen');


insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(1,1,1);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(1,4,1);
insert into osastoHenkilo (osastoId, henkiloId,  toimenId   ) values(3,2,2);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(2,5,2);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(3,3,3);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(3,3,1);




-- select etunimi, sukunimi, osastonNimi from henkilo 
-- inner join osasto on osastoNumero = osasto.osastoId;