drop user if exists 'maria'@'localhost';
create user 'maria'@'localhost' identified by '123';
grant all privileges on henkilokanta.* to 'maria'@'localhost';