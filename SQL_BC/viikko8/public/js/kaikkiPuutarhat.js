document.addEventListener('DOMContentLoaded', aloita);


async function aloita(){
    try{
        const tulostaulukko = document.getElementById('tulostaulukko');

        const data = await fetch('/puutarhat');
        const puutarhat=await data.json();

        for(const puutarha of puutarhat){
            const tr=document.createElement('tr');
            tr.appendChild(teeSolu(puutarha.puutarhaId));
            tr.appendChild(teeSolu(puutarha.puutarhanNimi));
            tr.appendChild(teeSolu(puutarha.puutarhanSijainti));

            tulostaulukko.appendChild(tr);
        }
    }
    catch(virhe){
        console.log(virhe); //vain debug
    }
} //aloita loppu

function teeSolu(data){
    const td=document.createElement('td');
    td.textContent=data;
    return td;
}