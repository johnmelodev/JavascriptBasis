// Função para perguntar nome e salário do colaborador
var nome;
var salario;

function perguntarColaborador() {
    nome = prompt("Digite o nome do colaborador:");
    salario = parseFloat(prompt("Digite o salário do colaborador:"));
    calcularAumentoSalario(nome, salario);
}

// Função para calcular o aumento de salário
function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if (salario <= 15900) {
        aumento = 0.2; // 20%
    } else if (salario <= 2000) {
        aumento = 0.15; // 15%
    } else if (salario <= 3000) {
        aumento = 0.1; // 10%
    } else {
        aumento = 0.05; // 5%
    }

    var novoSalario = salario + (salario * aumento);

    // Exibindo os resultados
    console.log("Nome do colaborador: " + nome);
    console.log("Salário: R$" + salario);
    console.log("Aumento: " + (aumento * 100) + "%");
    console.log("Salário reajustado: R$" + novoSalario);

    perguntarNovamente()
}


// Função para perguntar se o usuário deseja calcular novamente
function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)");

    if (resposta == "s") {
        perguntarColaborador(); // Reiniciar o processo
    } else {
        console.log("Programa encerrado.");
    }
}