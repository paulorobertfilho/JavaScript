let times = () => {
  return "Hello World."
}
let div = document.getElementById('demo');

setTimeout(() => {
  div.innerHTML = times();
}, 500);
