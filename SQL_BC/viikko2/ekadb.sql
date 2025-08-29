show databases;
create database ekadb;
use ekadb;
show tables;
create table testi(
    id integer not null primary key,
    nimi varchar(30) not null
);
show tables;

insert into testi (id, nimi) values(1,'Leila');
select * from testi;
insert into testi (id, nimi) values(2,'Matti');
select * from testi;
select nimi from testi;
select nimi,id from testi;
select id,nimi from testi;


describe testi;
show create table testi;


create user 'admin1'@'localhost' identified by '12345';
grant all privileges on *.* to 'admin1'@'localhost' with grant option;
select user,host,password from mysql.user;
select user,host,password from mysql.user where user='admin1';
exit

--  mysql -u admin1 -p
show databases;
select * from ekadb.testi;
drop database ekadb;
show databases;

create user 'matti'@'localhost' identified by 'salainen';
grant select,insert on ekadb.testi to 'matti'@'localhost';

show grants for 'matti'@'localhost';

exit

-- mysql -u matti -p
show databases;
use ekadb;
select * from testi;
insert into testi(id,nimi) values(3,'Pirkko');
select * from testi;
insert into testi(id,nimi) values(30,'Veera');
select * from testi;

-- seuraavat eivät onnistu, koska matilla ei ole oikeuksia näihin toimintoihin
-- delete from testi;
-- ERROR 1142 (42000): DELETE command denied to user 'matti'@'localhost' for table 'testi'
-- MariaDB [ekadb]> drop database ekadb;
-- ERROR 1044 (42000): Access denied for user 'matti'@'localhost' to database 'ekadb'
-- MariaDB [ekadb]> drop table testi;
-- ERROR 1142 (42000): DROP command denied to user 'matti'@'localhost' for table 'testi'
-- MariaDB [ekadb]>