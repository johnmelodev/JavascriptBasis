class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log("Olá, meu nome é: " + this.nome + "minha idade: " + this.idade + "e minha area de atuação é: " + this.areaAtuacao)
    }


}

console.log("======= Cadastro de alunos =======");
let alunos = [];
let continuar = true;
let indexDeAluno = 0;

while (continuar) {
    let nome = prompt('Insira o nome do aluno');
    let idade = parseInt(prompt('Insira a idade do aluno'));
    let aluno = new Aluno(nome, idade);

    let areaAtuacao = prompt('Insira a área de atuação do aluno');
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno] = aluno;
    let desejaContinuar = prompt('Insira 1 caso deseje cadastrar um novo aluno');
    if (desejaContinuar != "1") {
        continuar = false;
    }
    else {
        indexDeAluno++
    }
}