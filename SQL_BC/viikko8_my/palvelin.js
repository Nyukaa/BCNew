import path from "node:path";
import express from "express";
import cors from "cors";

import config from "./config.json" with { type: "json" };
const { port, host } = config;

import sqllausetukset from "./sqlasetukset.json" with { type: "json" };
const { yhteystiedot, sqlLauset } = sqllausetukset;

import Tietokanta from "./varastokirjasto.js";

const kukkakauppa = new Tietokanta(yhteystiedot);

import { fileURLToPath } from "node:url";
const JUURI = fileURLToPath(new URL(".", import.meta.url));

//console.log(JUURI);

const app = express();

app.use(cors()); //we dont need this for this example
app.use(express.json());

app.use(express.static(path.join(JUURI, "public")));

app.get('/', (req, res) => 
  res.sendFile(path.join(JUURI, 'public', 'sivut','valikko.html')));


app.get('/kaikkiKukat', (req, res) =>{
    const kaikkiKukatSql=sqlLauset.kaikkiKukat.join(' ');
    kukkakauppa.haeKaikki(kaikkiKukatSql)
    .then(tulos => res.json(tulos))
    //.catch(virhe => res.status(500).json(virhe));
});


app.get('/puutarhat', (req, res) =>{
    const kaikkiPuutarhatSql=sqlLauset.kaikkiPuutarhat.join(' ');
    kukkakauppa.haeKaikki(kaikkiPuutarhatSql)
    .then(tulos => res.json(tulos))
    //.catch(virhe => res.status(500).json(virhe));
});
app.listen(port, host, ()=>console.log(`${host}:${port} palvelee...`));


