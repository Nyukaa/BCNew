````
mysql -u admin1 -p < kukkakauppa_full.sql
```

# Tietokantapalvelindemo

## luodaan package.json
```shell
npm init -y
```

## asennetaan riippuvuudet
```shell
npm install mariadb express cors
```
tai

```shell
npm install mariadb
npm install express
npm install cors
```

## es6 moduulituki

jos käytetään es6 moduleita, lisätään package.json:iin

```json
"type":"module"
```


````
