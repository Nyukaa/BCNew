айди в MySQL под админом (root или admin1):
На самом деле неважно из какой директории ты запускаешь клиент MySQL (mysql), потому что это бинарный файл, который установлен в систему и доступен через PATH.

```
mysql -u admin1 -p
```

Выполни команды:

```
DROP USER IF EXISTS 'mia'@'localhost';
CREATE USER 'mia'@'localhost' IDENTIFIED BY '4k7QXgo1';
GRANT ALL PRIVILEGES ON bookdb.\* TO 'mia'@'localhost';
FLUSH PRIVILEGES;
```

Внутри MySQL введи:

```
SELECT user, host FROM mysql.user WHERE user = 'mia';
```

Выйди (exit;) и попробуй:

```
mysql -u mia -p
```

Пароль:

```
4k7QXgo1
```
