use henkilokanta;

--set ja := tai =
-- istutonkohtaisia (session специфичный для сеанса

set @x := 5;
select @x;

set @y = 10;
select @y;

select @x+@y as summa;

--select * from information_schema.USE_VARIABLES;

-- 1. Считаем среднюю зарплату и сохраняем в переменную @ka
select @ka := round(avg(palkka), 2) from henkilo;

-- 2.  значение переменной @ka 
select @ka as keskiarvo;

-- 3. Обновляем все записи, у которых зарплата NULL, и ставим среднее значение
update henkilo set palkka = @ka where palkka is null;

-- 4. Обновляем все записи, у которых зарплата меньше среднего, ставим среднее значение
update henkilo set palkka = @ka where palkka < @ka;

-- 5. Пример использования SELECT ... INTO для сохранения среднего в переменную
select round(avg(palkka), 2) into @ka from henkilo;  
select @ka as keskiarvo;

-- 6. Удаляем всех сотрудников, у которых зарплата больше средней
delete from henkilo where palkka > @ka;
