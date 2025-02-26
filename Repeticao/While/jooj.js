const prompt = require("prompt-sync")();
const jogador = prompt("Digite seu Nickname: ")

// const senha = Math.floor(Math.random() * 10) + 1; 
// Da um número aleatório de 1 a 10

const senha = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let numeroEscolha;

while (numeroEscolha != senha) {
    tentativas++;
    numeroEscolha = prompt("Digite a senha: ")

    if (numeroEscolha > senha) {
        console.log("O numero está menos");   
    }   else {
        console.log("O numero esta a mais");
        
    }
}

console.log(`O ${jogador} levou ${tentativas} para acertar a senha.`);
