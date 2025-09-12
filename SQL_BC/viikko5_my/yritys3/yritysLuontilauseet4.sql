-- Удаляем старую базу и создаём новую
drop database if exists yrityskanta4;
create database yrityskanta4;
use yrityskanta4;

-- Создаём пользователя
drop user if exists 'pomo4'@'localhost';
create user 'pomo4'@'localhost' identified by '1234';
grant all privileges on yrityskanta4.* to 'pomo4'@'localhost';

-- 1️⃣ Таблица отделов (родитель)
create table osasto(
    osastoId integer not null primary key,
    osastonNimi varchar(30) not null,
    osastoSijainti varchar(25) not null
);

-- 2️⃣ Таблица должностей (родитель)
create table toimenkuva(
    toimenId integer not null primary key,
    toimenNimi varchar(30) not null,
    asema varchar(30),
    toimenKuvaus varchar(200)
);

-- 3️⃣ Таблица сотрудников (дочерняя: ссылается на osasto и toimenkuva)
create table henkilo(
    henkiloId integer not null primary key,
    etunimi varchar(20) not null,
    sukunimi varchar(30) not null,
    palkka decimal(6,2) not null,
    osastoId integer not null,
    toimenId integer not null,
    foreign key (osastoId) references osasto(osastoId),
    foreign key (toimenId) references toimenkuva(toimenId)
);

-- 4️⃣ Таблица связи отдел-сотрудник-должность
create table osastoHenkilo(
    osastoId integer not null,
    henkiloId integer not null,
    toimenId integer not null,
    primary key(osastoId, henkiloId, toimenId),
    foreign key(osastoId) references osasto(osastoId),
    foreign key(henkiloId) references henkilo(henkiloId),
    foreign key(toimenId) references toimenkuva(toimenId)
);

-- 5️⃣ Вставка данных в родительские таблицы
insert into osasto values(1, 'ict', 'kellari');
insert into osasto values(2, 'hallinto', 'kerros 12');
insert into osasto values(3, 'kuljetus', 'talli');
insert into osasto values(4, 'hulto', 'verstas');

insert into toimenkuva values(1, 'koodari', 10, 'ohjelmistojen koodaaminen');
insert into toimenkuva values(2, 'skuskaaja', 1, null);
insert into toimenkuva values(3, 'johtaja', 20,'osaston johtaminen');

-- 6️⃣ Вставка сотрудников
insert into henkilo values(1, 'Marja', 'Meri', 5000.00, 1, 1);
insert into henkilo values(2, 'Veera', 'Puro', 7000.00, 3, 2);
insert into henkilo values(3, 'Kalle', 'Kivi', 4500.00, 3, 3);
insert into henkilo values(4, 'Matti', 'Meikäläinen', 3000.00, 1, 2);
insert into henkilo values(5, 'Maija', 'Virta', 3200.00, 2, 2);

-- 7️⃣ Вставка в таблицу связи
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(1,1,1);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(1,4,1);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(3,2,2);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(2,5,2);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(3,3,3);
insert into osastoHenkilo (osastoId, henkiloId, toimenId) values(3,3,1);
