function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("bulbon")) {
    image.src = "./img/pic_bulboff.gif";
  } else {
    image.src = "./img/pic_bulbon.gif";
  }
}
