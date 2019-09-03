let quiz = [
    {
        pergunta:'Qual o nome do primeiro avião de Santos Dumont',
        respTrue: '14 bis',
        respFalse: '14 bass'
    },
    {
        pergunta:'A lua é um satéline...',
        respTrue: 'natural da terra',
        respFalse: 'artificial da terra'
    },
    {
        pergunta:'quantos séculos há em um milenio',
        respTrue: '10 sec',
        respFalse: '100 sec'
    },
    {
        pergunta:'em qual polo fica antartica',
        respTrue: 'polo sul',
        respFalse: 'polo norte'
    }
]

const addElt = () => {
    let div = document.getElementById('quiz-quiz');
    let novoDivs = '';
    for (let i =0; i < quiz.length; i++) {
        novoDivs+= ` ${i+1}) ${quiz[i].pergunta}? <br />
        <input type="radio" name="quiz${i}" value="${quiz[i].respTrue}">
        ${quiz[i].respTrue} <br />
        <input type="radio" name="quiz${i}" value="${quiz[i].respFalse}">
        ${quiz[i].respFalse} <br />
        <hr />`;
 }
 div.innerHTML = novoDivs;
}

let verificarResp = (id, value) => {
    for ( let i = 0; i < quiz.length; i++) {
        if (id == i) {
            if(quiz[i].respTrue == value) {
                return true;
            }
        }
    }
    return false;
}
const verificar = () => {
    let questTrue = "";
    let questFalse = "";
    let respTrue = 0;
    let respFalse = 0;
    let div = document.getElementById('quiz-quiz');
    const tm = quiz.length;
    for ( let i = 0; i < tm; i++){
        let refRadios = document.getElementsByName(`quiz${i}`);
        for ( let x = 0; x< refRadios.length; x++) {
            if (refRadios[x].checked) {
                if (verificarResp(i, refRadios[x].value)) {
                    respTrue++
                        questTrue += `${i+1}º, `;
                }else{
                    respFalse++
                    questFalse+= `${i+1}º, `;
                }
            }
        }
    }
    questTrue = questTrue.substr(0, (questTrue.length - 2));
    questFalse = questFalse.substr(0, (questFalse.length - 2));
    let divResp = document.getElementById('resp');
    questTrue = `True ${respTrue}<br /> ${questTrue} `;
    questFalse = `False ${respFalse}<br /> ${questFalse} `;
    divResp.innerHTML = `${questTrue} <hr /> ${questFalse}`
}

addElt();
