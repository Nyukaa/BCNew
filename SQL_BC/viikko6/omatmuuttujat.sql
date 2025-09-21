use henkilokanta;

-- istuntokohtaisia (session)
-- set ja := tai =
set @x:=1;
select @x;

set @y=2;
select @y;

-- muttujat voi nähdä
select * from information_schema.USER_VARIABLES;

select @x+@y as summa;

select @ka:=round(avg(palkka),2) from henkilo;

select * from information_schema.USER_VARIABLES;

select @ka;

update henkilo set palkka=@ka where palkka is null;

update henkilo set palkka=@ka where palkka < @ka;

-- select ... into
select round(avg(palkka),2) into @a from henkilo;
select @a;

delete from henkilo where palkka>@a;

select * from information_schema.USER_VARIABLES;