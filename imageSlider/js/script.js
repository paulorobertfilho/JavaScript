var slides = ["image/s1.png", "image/s2.png", "image/s3.png"];
var tam = slides.length;
var sAtual = 1;
var tmpSlider;
function trocaAutomatica() {
  sAtual++;
  if (sAtual >= tam) sAtual = 0;
  document.getElementById('divSlider').style.backgroundImage = "url('" + slides[sAtual] + "')";
}
function iniciarSlide() {
  document.getElementById('divSlider').style.backgroundImage = "url('" + slides[sAtual] + "')";
  tmpSlider = setInterval(trocaAutomatica, 3000);
}
function parar() {
  clearInterval(tmpSlider);
}
function troca(dir) {
  sAtual += dir;
  if (sAtual < 0) {
    sAtual = 2;
  } else if (sAtual >= tam) {
    sAtual = 0;
  }
  document.getElementById('divSlider').style.backgroundImage = "url('" + slides[sAtual] + "')";
  clearInterval(tmpSlider);
  tmpSlider = setInterval(trocaAutomatica, 3000);
}
