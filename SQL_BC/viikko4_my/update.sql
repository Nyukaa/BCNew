update henkilo set palkka=8000 where henkiloID=5;
update henkilo set osasto='tuntematon' where osasto is NULL;

update henkilo 
set osasto = 'ict', palkka = 4500
where henkiloID = 6;
-- Изменяет столбец palkka (зарплата) → ставит 6000

-- Только у тех строк, где henkiloID равен 8 или 20
update henkilo 
set palkka = 6000
where henkiloID in (8, 20);