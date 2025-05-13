// JavaScript for Show/Hide Button
function toggleContent() {
  var content = document.getElementById("extraContent");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
