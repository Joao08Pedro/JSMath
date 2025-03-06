var prompt = require("prompt-sync")();

while (true) {
    let opcao = prompt("Digite não para sair");
    if (opcao == "nao") {
        break;
    }
    console.log(" `nao`, não foi digitado");
}
console.log("saiu");

// "Break" Faz parar