/*
*
* Array.sort()
*
*/

// Implementação permanece igual para o programador
// Mundança no algoritmo que executa a ordenação
const alunos = [
    { nome: "Alan", nota: 9 },
    { nome: "Bruna", nota: 8 },
    { nome: "Carlos", nota: 10 },
    { nome: "Cristina", nota: 10 },
    { nome: "Diego", nota: 7 },
    { nome: "Eliana", nota: 8 },
    { nome: "Fabio", nota: 9 },
]

alunos.sort((a, b) => a.nota - b.nota);