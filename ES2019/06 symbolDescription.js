/*
*
* Symbol.description
*
*/

const laranja = Symbol('Uma Laranja');

// Para acessar a descrição do simbolo
console.log(String(laranja));
// ou
console.log(laranja.toString());

// Utilizr o .description para retornar apenas a descrição
console.log(laranja.description);