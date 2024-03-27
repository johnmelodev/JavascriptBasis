// FLUXO DE FUNCIONAMENTO
let continuar = true;
do {
    let opcao = prompt("Escolha uma opção:\n1 - Cadastrar hotel\n2 - Cadastrar Reserva\n3 - Procurar reserva pelo hotel\n4 - Procurar hotel pela reserva\n5 - Procurar reserva pelo responsável\n6 - Procurar hotéis por categoria\n7 - Atualizar telefone de um hotel\n8 - Encerrar o programa");

    switch (opcao) {
        case "1":
            CadastrarHotel();
            break;
        case "2":
            CadastrarReserva();
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel"));
            break;
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva"));
            break;
        case "5":
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva"));
            break;
        case "6":
            ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")));
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"));
            let telefone = prompt("Digite o novo telefone");
            AtualizarTelefone(idHotel, telefone);
            break;
        case "8":
            console.log("Programa encerrado");
            continuar = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }
} while (continuar);

// FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL
function AtualizarTelefone(idHotel, telefone) {
    hotels[idHotel - 1].Telefone = telefone;
    console.log("Número de telefone atualizado!");
}

// FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = [];
    for (let i = 0; i < hotels.length; i++) {
        if (categoria === hotels[i].Categoria) {
            hoteisProcurados.push(hotels[i]);
        }
    }
    console.log(hoteisProcurados);
    return hoteisProcurados;
}
