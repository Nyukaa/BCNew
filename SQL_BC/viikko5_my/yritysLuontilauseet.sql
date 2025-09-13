drop database if exists yrityskanta;
create database yrityskanta;

use yrityskanta;

create table osasto(
    osastoId integer not null primary key,
    osastonNimi varchar(30) not null,
    osastoSijainti varchar(25) not null

);

create table henkilo(
    henkiloId integer not null primary key,
    etunimi varchar(20) not null,
    sukunimi varchar(30) not null,
    palkka decimal(6,2) not null,
    osastoNumero integer not null,
    foreign key (osastoNumero) references osasto(osastoId)
);
insert into osasto values(1, 'ict', 'kellari');
insert into osasto values(2, 'hallinto', 'kerros 12');
insert into osasto values(3, 'kuljetus', 'talli');
insert into osasto values(4, 'hulto', 'verstas');

insert into henkilo values(1, 'Marja', 'Meri', 5000.00, 1);
insert into henkilo values(2, 'Veera', 'Puro', 7000.00, 1);
insert into henkilo values(3, 'Kalle', 'Kivi', 4500.00, 2);
insert into henkilo values(4, 'Matti',  'Meikäläinen', 3000.00, 3);
insert into henkilo values(5, 'Maija', 'Virta', 3200.00, 4);
insert into henkilo values(6, 'Pekka', 'Puro', 4000.00, 2);

drop user if exists 'pomo'@'localhost';
create user 'pomo'@'localhost' identified by '1234';
grant all privileges on yrityskanta.* to 'pomo'@'localhost';


-- select etunimi, sukunimi, osastonNimi from henkilo 
-- inner join osasto on osastoNumero = osasto.osastoId;