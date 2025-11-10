import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors'
import { Conta } from './src/model/Conta'

export function main() {

    let opcao: number;
        
    while (true) {
        console.log(colors.bg.black, colors.fg.yellow, "*************************************");
        console.log("                                     ");
        console.log("           BANCO DO BRASIL           ");
        console.log("                                     ");
        console.log("*************************************");
        console.log("                                     ");
        console.log(" 1 - Criar Conta                     ");
        console.log(" 2 - Listar todas as Contas          ");
        console.log(" 3 - Buscar Conta por Numero         ");
        console.log(" 4 - Atualizar dados da Conta        ");
        console.log(" 5 - Apagar Conta                    ");
        console.log(" 6 - Sacar                           ");
        console.log(" 7 - Depositar                       ");
        console.log(" 8 - Transferir valores entre Contas ");
        console.log(" 9 - Sair                            ");
        console.log("                                     ");
        console.log("*************************************");
        console.log("                                     ",
            colors.reset);
    
        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break;
    
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                
                keyPress()
                break;
            
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por numero\n\n", colors.reset);
                
                keyPress()
                break;
            
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma conta\n\n", colors.reset);

                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong, "\n\nDeposito\n\n", colors.reset);
                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferencia entre contas\n\n", colors.reset);
                keyPress()
                break;
            
            case 9:
                console.log(colors.fg.greenstrong, "\nBanco do Brasil - Seu futuro começa aqui!");
                sobre();
                console.log(colors.reset, "");
                process.exit(0)

            default:
                console.log("\nOpcao invalida!\n");
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*************************************");
    console.log("Projeto desenvolvido por:");
    console.log("Pedro Santana");
    console.log("Github.com/perdop");
    console.log("*************************************");    
}

main()

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}