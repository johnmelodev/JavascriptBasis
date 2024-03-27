// CRIANDO CLASSE LIVRO
class Livro {
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoDePublicacao = anoDePublicacao;
        this.disponibilidade = true;
    }
}

// CRIANDO CLASSE BIBLIOTECA
class Biblioteca {
    constructor(nome, telefone, endereco, acervo) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.acervoLivros = acervo || [];
    }

    buscarLivroPeloTitulo(titulo) {
        this.acervoLivros.forEach(livro => {
            if (livro.titulo === titulo) {
                console.log(livro);
            }
        });
    }

    emprestarLivro(titulo) {
        let emprestado = false;
        this.acervoLivros.forEach(livro => {
            if (livro.titulo === titulo && livro.disponibilidade === true) {
                livro.disponibilidade = false;
                emprestado = true;
            }
        });
        if (!emprestado) {
            console.log("Livro não disponível para empréstimo.");
        }
        return emprestado;
    }

    devolverLivro(titulo) {
        this.acervoLivros.forEach(livro => {
            if (livro.titulo === titulo) {
                livro.disponibilidade = true;
                console.log("Livro devolvido");
            }
        });
    }
}

// CRIANDO OBJETOS DA CLASSE LIVRO
let livros = [
    new Livro("livro1", "Marcos", "editora A", 2001),
    new Livro("livro2", "Marcos", "editora F", 1997),
    new Livro("livro3", "Carlos", "editora F", 2010),
    new Livro("livro4", "João", "editora A", 2005),
    new Livro("livro5", "Fábio", "editora C", 2020)
];

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2", livros);

biblioteca.buscarLivroPeloTitulo("livro2");
biblioteca.emprestarLivro("livro1");
biblioteca.devolverLivro("livro1");
