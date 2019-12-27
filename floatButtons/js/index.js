const KEY_PF1 = 112;
const KEY_PF2 = 113;
const KEY_PF3 = 114;
const KEY_PF4 = 115;
const KEY_PF5 = 116;

function toggleFAB(fab) {
  if (document.querySelector(fab).classList.contains("show")) {
    document.querySelector(fab).classList.remove("show");
  } else {
    document.querySelector(fab).classList.add("show");
  }
}

document.querySelector(".fab .main").addEventListener("click", function() {
  toggleFAB(".fab");
});
document.querySelector("#opcao1").addEventListener("click", function() {
  var e = $.Event("keydown");
  var event = document.createEvent("Event");
  event.initEvent("build", true, true);
  event.keyCode = 112;
  document.dispatchEvent(event);
});
document.querySelector("#opcao2").addEventListener("click", function() {
  var e = $.Event("keydown");
  var event = document.createEvent("Event");
  event.initEvent("build", true, true);
  event.keyCode = 113;
  document.dispatchEvent(event);
});
document.querySelector("#opcao3").addEventListener("click", function() {
  var e = $.Event("keydown");
  var event = document.createEvent("Event");
  event.initEvent("build", true, true);
  event.keyCode = 114;
  document.dispatchEvent(event);
});
document.querySelector("#opcao4").addEventListener("click", function() {
  var e = $.Event("keydown");
  var event = document.createEvent("Event");
  event.initEvent("build", true, true);
  event.keyCode = 115;
  document.dispatchEvent(event);
});
document.querySelector("#opcao5").addEventListener("click", function() {
  var e = $.Event("keydown");
  var event = document.createEvent("Event");
  event.initEvent("build", true, true);
  event.keyCode = 116;
  document.dispatchEvent(event);
});
