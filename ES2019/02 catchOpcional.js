/*
*
* parametro no catch ficou opcional;
*
*/

//catch era obrigado a passar a excessão como parametro, mesmo que não fosse utilizado
try {
    throw "erro";
} catch (e) {
    console.error("Ocorreu um erro");
}

// Agora é possível omitir o valor
try {
    throw "erro";
} catch {
    console.error("Ocorreu um erro");
}