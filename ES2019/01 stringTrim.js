/*
*
* String.trimStart();
* String.trimEnd();
*
*/

let olaMundo = "    Olá Mundo   ";

// Antigo
olaMundo.trimLeft(); //"Olá Mundo   ";
olaMundo.trimRight(); //"     Olá Mundo";

// Novo
let olaStart = olaMundo.trimStart(); //"Olá Mundo    ";
let olaEnd = olaMundo.trimEnd(); //"Olá Mundo    ";

// Não esqueça do trim();
console.log(olaMundo.trim());