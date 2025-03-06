const prompt = require("prompt-sync")();
    let somaNotas = 0;
    let qtdNotas = 0;

while (true) {
    let nota = +prompt("Digite a nota do aluno (ou valor negativo para encerrar): ");
        if (nota < 0) {
            console.log(`Nota Negativa ${nota}`);
            break;
    }
    console.log(nota);
        somaNotas += nota;
        qtdNotas++;

}

const media = +somaNotas / +qtdNotas;
console.log(media);
