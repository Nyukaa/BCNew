drop user if exists 'puutarhuri'@'localhost';
create user 'puutarhuri'@'localhost' identified by 'ruusu';
grant all privileges on kukkakauppav1.* to 'puutarhuri'@'localhost';
