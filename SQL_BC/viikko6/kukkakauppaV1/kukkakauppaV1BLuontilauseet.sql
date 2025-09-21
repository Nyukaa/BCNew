drop database if exists kukkakauppav1b;
create database kukkakauppav1b;

use kukkakauppav1b;

create table kasvupaikka(
    paikkaId integer not null primary key,
    paikanTyyppi varchar(30) not null,
    paikanKuvaus varchar(100)
);

create table kukka(
    kukkaId integer not null primary key,
    kukanNimi varchar(30) not null
);

create table kukan_kasvupaikat(
    kukkaId integer not null,
    paikkaId integer not null,
    primary key(kukkaId,paikkaId),
    foreign key (kukkaId) references kukka(kukkaId),
    foreign key (paikkaId) references kasvupaikka(paikkaId)
);

create table puutarha(
    puutarhaId integer not null primary key,
    puutarhanNimi varchar(50) not null,
    puutarhanSijainti varchar(40) not null
);

create table puutarhan_kukat(
    puutarhaId integer not null,
    kukkaId integer not null,
    yksikkohinta integer not null,
    primary key(puutarhaId, kukkaId),
    foreign key (puutarhaId) references puutarha(puutarhaId),
    foreign key (kukkaId) references kukka(kukkaId)
);





