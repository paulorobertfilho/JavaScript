function imc() {
  var vAlt = parseFloat(document.getElementById("f_alt").value.replace(',', '.'));
  var vPes = parseFloat(document.getElementById("f_pes").value.replace(',', '.'));

  if (vAlt === 0 || vPes === 0) {
    alert('digite peso e altura');
  } else {

    let vIMC = vPes / vAlt;

    alert('Seu IMC é: ' + vIMC);
  }
}
