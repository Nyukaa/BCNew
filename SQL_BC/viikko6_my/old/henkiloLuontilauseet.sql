-- henkiloLuontilauseet.sql
drop database if exists henkilokanta;
create database henkilokanta;

use henkilokanta;

create table henkilo(
    henkiloId integer not null primary key,
    etunimi varchar(25) not null,
    sukunimi varchar(30) not null,
    osasto varchar(20),
    palkka decimal(6,2) -- max arvo 9999.99
);


