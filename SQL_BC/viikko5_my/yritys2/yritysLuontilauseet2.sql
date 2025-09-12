drop database if exists yrityskanta2;
create database yrityskanta2;

use yrityskanta2;

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

create table osastoHenkilo(
    osastoId integer not null,
    henkiloId integer not null,
    primary key(osastoId, henkiloId),
    foreign key(osastoId) references osasto(osastoId),
    foreign key(henkiloId) references henkilo(henkiloId)

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


insert into osastoHenkilo (osastoId, henkiloId) values(1,1);
insert into osastoHenkilo (osastoId, henkiloId) values(1,4);
insert into osastoHenkilo (osastoId, henkiloId) values(3,2);
insert into osastoHenkilo (osastoId, henkiloId) values(2,5);
insert into osastoHenkilo (osastoId, henkiloId) values(3,3);


drop user if exists 'pomo2'@'localhost';
create user 'pomo2'@'localhost' identified by '1234';
grant all privileges on yrityskanta2.* to 'pomo2'@'localhost';


-- select etunimi, sukunimi, osastonNimi from henkilo 
-- inner join osasto on osastoNumero = osasto.osastoId;