class Carro {
    constructor(nome, velocidadeMaxima, potencia, consumo) {
        this.nome = nome;
        this.velocidadeMaxima = velocidadeMaxima;
        this.potencia = potencia;
        this.consumo = consumo;
    }

    CalcularTempoMedio(distancia) {
        // Implemente este método para calcular o tempo médio do carro para percorrer a distância fornecida
        return distancia / this.velocidadeMaxima;
    }
}

class Corrida {
    constructor(nome, tipo, distancia) {
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Vencedor = "";
        this.Participantes = [];
    }

    DefinirVencedor() {
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia);
        let vencedor = this.Participantes[0];

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia);
            if (tempo < menorTempo) {
                menorTempo = tempo;
                vencedor = this.Participantes[index];
            }
        }
        return this.Vencedor = vencedor;
    }

    ExibirVencedor() {
        alert("O vencedor é: " + this.Vencedor.nome);
    }
}

let corrida = new Corrida("Monza", "Formula 1", 60000);

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5);
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9);
corrida.Participantes[2] = new Carro("Peugeot", 300, 220, 10);

corrida.DefinirVencedor();
corrida.ExibirVencedor();
