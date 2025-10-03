use kukkakauppav1b;

delete from puutarhan_kukat;
delete from kukka;
delete from puutarha;
delete from kasvupaikka;

insert into kasvupaikka (paikkaId, paikanTyyppi, paikanKuvaus)
values (1, 'aurinkoinen', 'vaatii suoraa auringon paistetta');

insert into kasvupaikka(paikkaId,paikanTyyppi) values(2,'puolivarjo');
insert into kasvupaikka(paikkaId,paikanTyyppi) values(3,'varjoinen');
insert into kasvupaikka(paikkaId,paikanTyyppi) values(4,'kuiva');
insert into kasvupaikka(paikkaId,paikanTyyppi) values(5,'kostea');

insert into kukka(kukkaId,kukanNimi) value(1,'Ruusu');
insert into kukka(kukkaId,kukanNimi) value(2,'Tulppaani');
insert into kukka(kukkaId,kukanNimi) value(3,'Kaktus');
insert into kukka(kukkaId,kukanNimi) value(4, 'Auringon kukka');
insert into kukka(kukkaId,kukanNimi) value(5, 'Lumme');
insert into kukka(kukkaId,kukanNimi) value(6, 'Orvokki');

insert into kukan_kasvupaikat(kukkaId,paikkaId) values (1,1);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (1,2);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (2,1);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (3,4);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (3,2);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (4,1);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (5,5);
insert into kukan_kasvupaikat(kukkaId,paikkaId) values (6,2);

insert into puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
values (1,'Orvokin tulppaanit oy','Vantaa');

insert into puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
values (2, 'Rovaniemen ruusutarha','Rovaniemi');

insert into puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
values (3, 'Kalevin kaktus ja tulppaani', 'Helsinki');

insert into puutarha (puutarhaId,puutarhanNimi,puutarhanSijainti)
values(4, 'Ruusutarha', 'Tampere');

insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(1, 2, 2);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(1, 1, 5);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(2, 1, 10);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(2, 6, 1);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(3, 3, 25);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(2, 2, 2);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(4, 1, 7);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(4, 4, 9);
insert into puutarhan_kukat(puutarhaId, kukkaId,yksikkohinta) values(4, 5, 30);