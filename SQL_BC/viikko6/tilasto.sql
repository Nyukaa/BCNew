use henkilokanta;

create table palkka_puuttuu(
    henkiloId integer not null primary key,
    etunimi varchar(25) not null,
    sukunimi varchar(30) not null
);

create table osasto_puuttuu(
    id integer not null primary key,
    enimi varchar(25),
    snimi varchar(30)
);

select * from osasto_puuttuu;

insert into osasto_puuttuu (id,enimi,snimi)
select henkiloId, etunimi, sukunimi from henkilo
where osasto is null;

select * from osasto_puuttuu;

select * from palkka_puuttuu;

insert into palkka_puuttuu (henkiloId,etunimi,sukunimi)
select henkiloId, etunimi, sukunimi from henkilo
where palkka is null;

delete from palkka_puuttuu;
delete from osasto_puuttuu;

-- siirretään henkilöt, joilta palkka puuttuu palkka_puuttuu -tauluun
start transaction;
delete from palkka_puuttuu;
delete from osasto_puuttuu;

insert into palkka_puuttuu (henkiloId,etunimi,sukunimi)
select henkiloId, etunimi, sukunimi from henkilo
where palkka is null;

insert into osasto_puuttuu (id,enimi,snimi)
select henkiloId, etunimi, sukunimi from henkilo
where osasto is null;

delete from henkilo where palkka is null;
delete from henkilo where osasto is null;
commit; 

select * from henkilo;
select * from palkka_puuttuu;
select * from osasto_puuttuu;