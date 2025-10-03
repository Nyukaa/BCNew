document.addEventListener("DOMContentLoaded ", aloita);

async function aloita() {
  try {
    const tulostaulokko = document.getElementById("tulostaulokko");
    const data = await fetch("/kukat");
    const kukat = await data.json();
    for (const puutarha of puutarhat) {
      console.log(puutahat);
      const tr = document.createElement("tr");
      tr.appendChild(teeSolu(kukka.kukkaId));
      tr.appendChild(teeSolu(kukka.kukanNimi));
      tr.appendChild(teeSolu(kukka.paokanTyyppi));
      tr.appendChild(teeSolu(kukka.paikanKuvaus));

      tulostaulokko.appendChild(tr);
    }
  } catch (err) {
    console.log(err);
  }
}

function teeSolu(data) {
  const td = document.createElement("td");
  td.textContent = data;
  return td;
}
