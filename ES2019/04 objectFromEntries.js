/*
*
* Object.fromEntries()
*
*/

let alunos = {
    ana: 15,
    beatriz: 22,
    carlos: 18,
    diogo: 17,
    manuel: 21
}

// Converter o objeto em Array
let vetorAlunos = Object.entries(alunos);

// Converte o objeto em um vetor e filtra os alunos pela idade
let maiorDeIdade = vetorAlunos.filter(([nome, idade]) => {
    return idade >= 18;
})

// Problema, precisa ser feito manualmente a conversão de volta para objeto
let alunosMaioresDeIdade = {};

for (let [nome, idade] of maiorDeIdade) {
    alunosMaioresDeIdade[nome] = idade;
}

alunosMaioresDeIdade = Object.fromEntries(maiorDeIdade);

let cuidado = [
    ["pedro", 18],
    ["maria", 17],
    ["carlos", 21],
    ["pedro", 21],
    ["tatiana", 16],
];

let importante = Object.fromEntries(cuidado); 