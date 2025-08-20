# Tiedon rakenteita

## Tiedon tallentaminen

-   muistiin
    -   tieto häviää aina ohjelman/koneen
        "sammutuksen" yhteydessä

-   levylle (tai vastaava pysyvään 
    talletukseen kykenevä laite)
    -   pysyy vaikka ohjelma/kone sammutetaan

Tieto talletetaan bittijonona

## bitit

-   1 bitti 2 tilaa 0 tai 1
-   2 bittiä 4 (2^2) tilaa 00, 01, 10, 11
-   3 bittiä 8 (2^3) tilaa (oktaluvut)
-   4 bittiä 16 (2^4) tilaa (heksaluvut)

-   8 bittiä (tavu) 256 (2^8) tilaa (extended ascii)

## Esimerkki

```
01001000011001010110100100100001
```

Tiedetään: koodattu extended ascii:lla,
paloitellaan 8 bitin (tavu) jonoihin

```
01001000 01100101 01101001 00100001  
   H         e        i        !
```

## unicode

https://home.unicode.org/

## Tiedoston talletusmuodot

-   binääritiedostot
    -   binäärimuotoinen data
    -   kuvat
    -   äänet
    -   video
    -   käännetyt ohjelmat

-   "tekstitiedostot"

### tekstitiedosto, jossa on "rakenteetonta" tietoa

```
Leila Hökki
2025

Raportti

Tämä vuosi 2025 oli alku GTX-sarjan kehitykselle. Uuden tuotesarjan esitteli Leila Hökki ja mukana oli myös tekijä Pirkko Puro esittelytilaisuudessa....
```

tai

```
Raportti

Tämä vuosi 2025 oli alku GTX-sarjan kehitykselle. Uuden tuotesarjan esitteli Leila Hökki ja mukana oli myös tekijä Pirkko Puro esittelytilaisuudessa....

Leila Hökki
2025
```

Ongelma: tietojen ohjelmallinen käsittely vaikeaa

#### Parannus?

```
tekijä Leila Hökki
vuosi 2025

Raportti

Tämä vuosi 2025 oli alku GTX-sarjan kehitykselle. Uuden tuotesarjan esitteli Leila Hökki ja mukana oli myös tekijä Pirkko Puro esittelytilaisuudessa....
```

### Ratkaisu: rakenteinen tieto

```json
{
    "tekija":{
        "etunimi":"Leila",
        "sukunimi":"Hökki"
    },
    "vuosi":2025,
    "raportti":{
        "otsikko":"Raportti",
        "teksti":[
            "Tämä vuosi 2025 oli alku GTX-sarjan", 
            "kehitykselle. Uuden tuotesarjan esitteli", 
            "Leila Hökki ja mukana oli myös tekijä ",
            "Pirkko Puro esittelytilaisuudessa...."
        ]
    }
}
```


```xml
<dokumentti>
    <tekija>
        <etunimi>Leila</etunimi>
        <sukunimi>Hökki</sukunimi>
    </tekija>
    <vuosi>2025</vuosi>
    <raportti>
        <otsikko>Raportti</otsikko>
        <teksti>
            Tämä vuosi 2025 oli alku GTX-sarjan kehitykselle. Uuden tuotesarjan esitteli Leila Hökki ja mukana oli myös tekijä Pirkko Puro esittelytilaisuudessa....
        </teksti>
    </raportti>
</dokumentti>
```

## rakenteisia tekstimuotoja

-   json (https://www.json.org/json-en.html)
-   xml (www.w3.org)
-   csv/tsv (Comma Separated Value/ Tab Separated Value)
-   ini
-   html/css (https://html.spec.whatwg.org/multipage/)
-   markdown
-   svg (kuvatiedosto, xml-tiedosto)

### Esimerkki csv

```csv
"etunimi","sukunimi","ikä"
"Leila","Hökki",20
"Pirkko","Puro",30
```

```csv
etunimi,sukunimi,ikä
Leila,Hökki,20
Pirkko,Puro,30
```

### Esimerkki INI

```ini
;kommentti alkaa puolipisteellä
[database] ;lohko section
driver=mysql
host=localhost
port=3306
database=henkilodb
[user]
user=saku
```

sama jsonilla
```json
{
    "database":{
        "driver":"mysql",
        "host":"localhost",
        "port":3306,
        "database":"henkilodb"
    },
    "user":{
        "user":"saku"
    }
}
```
### Esimerkki henkilön tietokone
```json
[
    {
        "etunimi":"Matti",
        "sukunimi":"Puro",
        "tietokone":{"nimi":"Brain I", "hinta":300}
    },
    {
        "etunimi":"Meri",
        "sukunimi":"Myrskylä",
        "tietokone":{"nimi":"Brain I", "hinta":300}
    },
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "tietokone":{"nimi":"AI 1", "hinta":400}
    }
]
```

Sama csv-muodossa

```csv
etunimi, sukunimi, tknimi, tkhinta
Matti, Puro, Brain I, 300
Meri, Myrskylä, Brain I, 300
Leila, Hökki, AI 1, 400
```

Kehitetään edelleen jakamalla tietokoneet ja henkilöt omiin tiedostoihinsa

#### tietokoneet
```csv
tkid,nimi,hinta
1, Brain I, 300
2, AI 1, 400
```

#### henkilöt
```csv
etunimi, sukunimi, tietokonenro
Matti, Puro, 1
Meri, Myrskylä, 1
Leila, Hökki, 2
```
