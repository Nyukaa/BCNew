use henkilokanta;

select etunimi, sukunimi from henkilo;

select sukunimi,etunimi from henkilo;
select sukunimi,etunimi from henkilo order by sukunimi asc;
select sukunimi,etunimi from henkilo order by sukunimi asc, etunimi asc;
select sukunimi,etunimi from henkilo order by sukunimi asc, etunimi desc;

select sukunimi,etunimi,palkka from henkilo;
select sukunimi,etunimi,palkka from henkilo order by palkka desc, sukunimi asc, etunimi asc;
select sukunimi,etunimi from henkilo order by palkka desc, sukunimi asc, etunimi asc;

select sukunimi from henkilo;
select distinct sukunimi from henkilo;
select etunimi,sukunimi,palkka from henkilo where sukunimi='Puro';
select etunimi,sukunimi,palkka from henkilo where sukunimi='Puro' or sukunimi='Meri';

select etunimi,sukunimi,palkka from henkilo 
where sukunimi='Puro' or sukunimi='Meri'
order by sukunimi asc, etunimi asc;

select etunimi,sukunimi,palkka from henkilo where sukunimi='Puro' and sukunimi='Meri';
select etunimi,sukunimi from henkilo where sukunimi='Puro' and palkka=4000;

select sukunimi,etunimi,palkka from henkilo 
where palkka>=5000 and palkka <7000;

select sukunimi,etunimi,palkka from henkilo 
where palkka>=5000 and palkka <=7000;

select sukunimi,etunimi,palkka from henkilo 
where palkka<5000 or palkka>6000;

select sukunimi,etunimi,palkka from henkilo 
where palkka<>5000;

select sukunimi,etunimi,palkka from henkilo 
where palkka!=5000;

select sukunimi,etunimi from henkilo where palkka is null;

select sukunimi,etunimi from henkilo where osasto is null;

select sukunimi,etunimi from henkilo 
where osasto is null and palkka is null;

select sukunimi,etunimi,osasto,palkka from henkilo 
where osasto is null or palkka is null;

select count(*) from henkilo;
select count(palkka) from henkilo;

select count(palkka) as onPalkka from henkilo;

select count(*)-count(palkka) as puuttuu from henkilo;
select count(*) as puuttuu from henkilo where palkka is null;
select count(palkka) as puuttuu from henkilo where palkka is null;  -- tulos 0

select sukunimi, count(*) as lkm from henkilo
group by sukunimi;

select sukunimi, count(*) as lkm from henkilo
group by sukunimi having lkm>1;

select sukunimi, count(*) as lkm from henkilo
group by sukunimi having lkm>1
order by lkm desc;

select sum(palkka) as palkatYht from henkilo;
select avg(palkka) as keskipalkka from henkilo;
select round(avg(palkka),2) as keskipalkka from henkilo;
select truncate(avg(palkka),0) from henkilo;
select floor(avg(palkka)) from henkilo;
select ceil(avg(palkka)) from henkilo;

select min(palkka) as minimi, max(palkka) as maksimi from henkilo;

select min(palkka) as minimi, max(palkka) as maksimi, 
max(palkka)-min(palkka) as erotus from henkilo;
select rand();
select rand()*10;
select floor(rand()*10); -- arvot 0-9
select floor(rand()*10)+1; -- arvot 1-10

select sukunimi,etunimi,rand() as numero from henkilo;

select sukunimi,etunimi,rand() as numero from henkilo 
order by numero asc;

select sukunimi,etunimi from henkilo 
order by rand() asc;

select etunimi,sukunimi,palkka from henkilo 
where sukunimi='Puro' or sukunimi='Meri';

select etunimi,sukunimi,palkka from henkilo 
where sukunimi in ('Puro','Meri');

select etunimi,sukunimi,palkka from henkilo 
where sukunimi not in ('Puro','Meri');

select etunimi,sukunimi,palkka from henkilo 
where sukunimi not in ('Puro','Meri') and palkka<5000;

select etunimi,sukunimi,palkka from henkilo 
where sukunimi in ('Puro','Meri') and palkka<5000;

select etunimi,sukunimi,palkka from henkilo 
where (sukunimi='Puro' or sukunimi='Meri') and palkka<5000;

select sukunimi,etunimi,palkka from henkilo 
where palkka>=5000 and palkka <=7000;

select sukunimi,etunimi,palkka from henkilo 
where palkka between 5000 and 7000;