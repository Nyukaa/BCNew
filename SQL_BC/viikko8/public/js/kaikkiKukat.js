document.addEventListener('DOMContentLoaded', aloita);


async function aloita(){
    try{
        const tulostaulukko = document.getElementById('tulostaulukko');

        const data = await fetch('/kukat');
        const kukat=await data.json();

        for(const kukka of kukat){
            const tr=document.createElement('tr');
            tr.appendChild(teeSolu(kukka.kukkaId));
            tr.appendChild(teeSolu(kukka.kukanNimi));
            tr.appendChild(teeSolu(kukka.paikanTyyppi));
            tr.appendChild(teeSolu(kukka.paikanTyyppi));

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