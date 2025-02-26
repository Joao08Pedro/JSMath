// Criar uma variavel com um numero fixo; Repetir até o usuario digitar esse número

const prompt = require("prompt-sync")();

let escolha;
let i = 12;
let tentativas = 0;

while (escolha != i) {
    tentativas++;
    escolha = prompt("Digite 12 para sair: ");
    console.log(`Contador = ${i}`);
}

console.log(`Você ficou ${tentativas} tentativas para acertar`);
