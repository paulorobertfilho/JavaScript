/*
*
* Array.flat()
* Array.flatMap()
*
*/

let cadeirasPorSemestre = [
    ["Matemática Fundamental", "Lógica de Programação", "Algoritmos", "Inglês Técnico", "Introdução a Computação"],
    ["Cálculo 1", "Programação", "Estrutura de Dados 1", ["Projeto 1", "Normas Academicas"], "Banco de Dados"],
    ["Cálculo 2", "Programação O.O.", "Estrutura de Dados 2", "Engenharia de Software", "Sistemas Operacionais"],
    ["Redes", "Programação Web", "Compiladores", ["Projeto 2", "Produção de Texto"], "Micro controladores"]
];

let cadeiras = [];

// Uma forma de "achatar" o vetor
// repetir quantas vezes precisar.
cadeiras = [].concat.apply([], cadeirasPorSemestre );

cadeiras = cadeirasPorSemestre.flat();
// valor 1 é default;
cadeiras = cadeirasPorSemestre.flat(2);
// até não haver mais vetores aninhados;
cadeiras = cadeirasPorSemestre.flat(Infinity);

/*
Flat Map
*/

let notas = [7.8, 6.2, 8.0, 6.4];

let notaArredondar = notas.map(nota => [nota, Math.round(nota)]);

let notasFlat = [];
notasFlat = [].concat.apply([], notaArredondar);

notasFlat = notas.flatMap(nota => [nota, Math.round(nota)]);
//Faz apenas um nivel = flat(1)