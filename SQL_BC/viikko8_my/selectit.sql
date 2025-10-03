use kukkakauppa;

select kukkId, kukanNimi, paikanTyyppi, paikanKuvaus  from kasvupaikka
natural join kukka
order by kukanId asc;

select puutarhanId, puutarhanNimi, PuutarhanSijainti from puutarha
order by puutarhanId asc;