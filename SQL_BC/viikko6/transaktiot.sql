-- https://mariadb.com/docs/server/reference/sql-statements/transactions
-- https://en.wikipedia.org/wiki/Database_transaction
-- https://fi.wikipedia.org/wiki/ACID
-- https://en.wikipedia.org/wiki/ACID

use henkilokanta;

start transaction;
delete from henkilo where palkka is null;
select * from henkilo;
rollback; -- peruu muutokset

select * from henkilo;

start transaction;
delete from henkilo where palkka is null;
select * from henkilo;
commit; --hyväksyy muutokset

select * from henkilo;

start transaction;
update henkilo set osasto='ict' where osasto is null;
select * from henkilo;
select @ka:=round(avg(palkka),0) from henkilo;
select * from information_schema.USER_VARIABLES;
update henkilo set palkka=@ka where palkka<@ka;
select * from henkilo;
rollback;

select * from henkilo;
select * from information_schema.USER_VARIABLES;

start transaction;
update henkilo set osasto='ict' where osasto is null;
select * from henkilo;
select @ka:=round(avg(palkka),0) from henkilo;
select * from information_schema.USER_VARIABLES;
update henkilo set palkka=@ka where palkka<@ka;
select * from henkilo;
commit;

select * from henkilo;
select * from information_schema.USER_VARIABLES;

select @ka:=round(avg(palkka),0) from henkilo;
select * from information_schema.USER_VARIABLES;

start transaction;
update henkilo set osasto='ict' where osasto is null;
select * from henkilo;
update henkilo set palkka=@ka where palkka<@ka;
select * from henkilo;
exit -- keskeyttää transaction, on sama kuin rollback


-- savepoint ("alitransaktio")

start transaction;
select * from henkilo;
update henkilo set osasto='atk' where osasto='ict';
select * from henkilo;
savepoint a;
update henkilo set osasto='tietotekniikka' where osasto='atk';
select * from henkilo;
rollback to a; -- hylkää savepoint a:n jälkeen tehdyt muutokset
select * from henkilo;
commit;

select * from henkilo;

start transaction;
select * from henkilo;
update henkilo set osasto='atk' where osasto is null;
select * from henkilo;
savepoint a;
update henkilo set osasto='tietotekniikka' where osasto='atk';
select * from henkilo;
release savepoint a; 
select * from henkilo;
commit;