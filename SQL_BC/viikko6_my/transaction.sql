use henkilokanta;
start transaction;
delete from henkilo where palkka is null;
select * from henkilo;
rollback; -- peruu muutokset;
commit; -- tallentaa muutokset
select * from henkilo;

start transaction;
update henkilo set osasto='ict'where osasto is null;
select * from henkilo;
select @ka:=round(avg(palkka),0) from henkilo;
select * from information_schema.USER_VARIABLES;
update henkilo set palkka=@ where palkka<@ka;
select * from henkilo;
rollback;

select * from henkilo;
select * from information_schema.USER_VARIABLES;

start transaction;
update henkilo set osasto='ict'where osasto is null;
select * from henkilo;
select @ka:=round(avg(palkka),0) from henkilo;
select * from information_schema.USER_VARIABLES;
update henkilo set palkka=@ka where palkka<@ka;
select * from henkilo;
commit;

select * from henkilo;
select * from information_schema.USER_VARIABLES;

start transaction;
update henkilo set osasto='ict'where osasto is null;
select * from henkilo;
update henkilo set palkka=@ka where palkka<@ka;
select * from henkilo;
exit -- keskeyttää transaction on sama kuin rollback

commit;

-- savepoint("ali-transacktio")
start transaction; 
-- Начало транзакции. Все изменения будут в рамках этой транзакции до COMMIT или ROLLBACK.

select * from henkilo; 

update henkilo set osasto='atk' where osasto='ict'; 
-- Обновляем все записи, где osasto = 'ict', меняем на 'atk'.

select * from henkilo; 

savepoint a; 
-- Создаем точку сохранения "a", к которой можно откатиться, не отменяя всю транзакцию.

update henkilo set osasto='tietotekniikka' where osasto='atk'; 


select * from henkilo; 


rollback to a; 
-- Откатываем все изменения после точки сохранения "a". Изменения до savepoint остаются.

select * from henkilo; 
release savepoint a;
-- Удаляем точку сохранения "a". После этого к ней нельзя будет откатиться.
select * from henkilo;

commit; 
-- Подтверждаем все изменения, произошедшие до savepoint. После COMMIT транзакция закрыта.
