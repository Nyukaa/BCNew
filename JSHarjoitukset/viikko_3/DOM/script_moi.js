document.getElementById("moi").addEventListener("click", moi);

function moi() {
  let headers = document.getElementsByTagName("h1");
  for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = headers[i].textContent + "!!!";
  }
}

document.getElementById("").addEventListener("click", moi);
elementti.innerText = "Näkyvä teksti";
