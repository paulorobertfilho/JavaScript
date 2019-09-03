let div = document.getElementById('demo');
let cont = 0;

let idx = setInterval(() => {
  cont++;
  if (cont == 5) clearInterval(idx);
  if (cont < 10) cont = `0${cont}`;
  div.innerHTML = cont;
}, 100);
