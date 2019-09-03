const trocaTexto = () => {
  const elemento = document.getElementById("bom-dia");
  elemento.innerHTML = "uma boa noite";
}
const showElem = (findElem, removeElem) => {
  let element;
  if (findElem.indexOf(".") == 0) {
    element = document.querySelector(findElem);
  } else {
    findElem = findElem.replace("#", "");
    element = document.getElementById(findElem);
  }
  removeElem = removeElem.replace(".", "");
  element.classList.remove(removeElem);
}
const removeElem = (findElem, addElem) => {
  let element;
  if (findElem.indexOf(".") == 0) {
    element = document.querySelector(findElem);
  } else {
    findElem = findElem.replace("#", "");
    element = document.getElementById(findElem);
  }
  element.classList.add(addElem);
}
const isNumber = (val) => {
  return !Number.isNaN(val * 1);
  // console.log(!Number.isNaN(val * 1));
}
const maskNumber = (str) => {
  const element = isId(str);
  if (element) {
    let valor = element.value;
    // console.log(valor);
    letStr = valor.substr(-1);
    if (isNumber(letStr)) {
      element.value - valor;
    } else {
      element.value = valor.subStr(0, (valor.length - 1));
    }
  }
}
if (window.location.hash == "#cadFrm") {
  showElem(".frm-agenda", "hidden");
}
