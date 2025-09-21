use henkilokanta;

CREATE TABLE palkka_puuttuu (
    henkiloId INT NOT NULL PRIMARY KEY,
    etunimi VARCHAR(25) NOT NULL,
    sukunimi VARCHAR(30) NOT NULL
);
INSERT INTO palkka_puuttuu (henkiloId, etunimi, sukunimi)
SELECT henkiloId, etunimi, sukunimi FROM henkilo 
WHERE palkka IS NULL;

delete from palkka_puuttuu;
--Удаляем все записи из таблицы palkka_puuttuu

-- Вставляем в таблицу palkka_puuttuu записи из henkilo, где palkka NULL
start transaction;

INSERT INTO palkka_puuttuu (henkiloId, etunimi, sukunimi)
SELECT henkiloId, etunimi, sukunimi FROM henkilo 
WHERE palkka IS NULL;    

delete from henkilo where palkka is null;
commit;
select * from henkilo;
select * from palkka_puuttuu;




create table osasto_puuttuu(
    id integer not null primary key,
    -- autoincrement,
    etunimi varchar(25),
    sukunimi varchar(30)
);

start transaction;
INSERT INTO osasto_puuttuu (id, etunimi, sukunimi)
SELECT henkiloId, etunimi, sukunimi FROM henkilo 
WHERE osasto IS NULL; 

select * from osasto_puuttuu;

delete from henkilo where osasto is null;
rollback;
commit;
select * from henkilo;
select * from osasto_puuttuu;
