/**
 * 
 * String.matchAll
 * 
 */

const string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    + 'Ut tristique semper rutrum. Aliquam mattis sit amet lectus sed pretium.'
    + 'Aliquam at lamet neque, ut ultrices libero. Etiam sollicitudin eget tamet nec elementum.'
    + 'Curabitur sagittis a wamet ut lacinia';

const regex = /\w?amet/g;
//exibe todos os itens encontrados

console.log(string.match(regex));

// Para obter mais informações das substrings
let padrao;
while (padrao = regex.exec(string)) {
  console.log(padrao);
}

// usando o matchAll (especialmente em inglês) fica mais fácil
// de ler o algoritmo
for (const padrao of string.matchAll(regex)) {
    console.log(padrao);
  }