var colors = new Array(
  [0, 255, 150], // яркий зелёный
  [0, 191, 255], // небесно-синий
  [138, 43, 226], // фиолетовый
  [123, 104, 238], // светло-фиолетовый
  [0, 255, 255] // аквамариновый
  // [255, 105, 180]  розовый (легкий акцент)
);

var step = 0;
var colorIndices = [0, 1, 2, 3];
var gradientSpeed = 0.002;

function updateGradient() {
  var gradient = document.getElementById("gradient");

  // Проверяем, активна ли темная тема
  if (!document.body.classList.contains("dark-theme")) {
    gradient.style.background = "none"; // убираем фон в светлой теме
    return;
  }
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  gradient.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    // выбрать новые цвета
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}

setInterval(updateGradient, 10);
