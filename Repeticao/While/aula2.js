const prompt = require("prompt-sync")();

let escolha;
let i = 1;

while (escolha !== "sair") {
    escolha = prompt("Digite sair para sair: ");
    i++;
    console.log(`Contador = ${i}`);
    
}

// Criar uma variavel com um numero fixo; Repetir até o usuario digitar esse número

