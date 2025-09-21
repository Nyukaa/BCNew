drop DATABASE if exists kukkakauppav1;
create DATABASE kukkakauppav1;
use kukkakauppav1;

create table kasvupaika (
    paikkaId integer not null primary key,
    paikkaTyyppi varchar(30) not null,
    paikanKuvaus varchar(100)
    
);

create table kukka (
    kukkaId integer not null primary key,
    kukkanimi varchar(30) not null,
    paikkaId integer not null,
     
    
);
create table kukan_kasvupaikat (
    paikkaId integer not null primary key,
    paikkaTyyppi varchar(30) not null,
    paikanKuvaus varchar(100)
    primary key (kukkaId, paikkaId),
    foriegn key (kukkaId) references kasvupaika(paikkaId)
    foreign key (paikkaId) references kasvupaika(paikkaId)
);


create  table puutarha (
    puutarhaId integer not null primary key,
    puutarhanNimi varchar(50) not null,
    puutarhanSijainti varchar(40) not null
    
);

create table puutarhan_kukat (
    
    kukkaId integer not null,
    puutarhaId integer not null,
    yksikkoHinta integer not null,
   primary key (kukkaId, puutarhaId),

    foreign key (kukkaId) references kukka(kukkaId),
    foreign key (puutarhaId) references puutarha(puutarhaId)
);