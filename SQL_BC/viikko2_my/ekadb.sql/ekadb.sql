show databases; 
create database ekadb;
use ekadb;

create table testi(id integer not null primary key, nimi varchar(30) not null);
show tables; 
insert into testi (id, nimi) values(1, "Leila");
insert into testi (id, nimi) values(2, "Matti");
insert into testi (id, nimi) values(3, "Pirko");
insert into testi (id, nimi) values(4, "Veera");
select * from testi;
select * from ekadb.testi; if not inside 
select nimi, id  from testi;
describe testi;



show create table testi;
...the answer
| Table | Create Table                                                                                                                                                           |
+-------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| testi | CREATE TABLE `testi` (
  `id` int(11) NOT NULL,
  `nimi` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci |
+-------+---------------------------------------------------------

create user 'admin1'@'localhost' identified by 'secret'; 
grant select,insert on ekadb.testi to 'matti'@'localhost';
show grants for 'matti'@'localhost';
grant all privileges on *.* to 'admin1'@'localhost' with grant option;

set password for 'matti'@'localhost'= password('secr')

grant select, insert on empdb.emp 

select user,host,password from mysql.user;
select user,host,password from mysql.user where user='admin1';


exit

mysql -u admin1 -p ekadb;    //pass as admin1
....pasword (we have secret)

drop database ekadb; //delete database
drop user 'admin'@'localhost';  //delete user