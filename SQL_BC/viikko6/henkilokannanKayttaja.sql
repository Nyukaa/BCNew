drop user if exists 'maria'@'localhost';
create user 'maria'@'localhost' identified by 'salainen';
grant all privileges on henkilokanta.* to 'maria'@'localhost';