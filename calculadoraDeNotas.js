const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log('--- Calculadora de Notas ---');
    console.log('1. Calcular Média');
    console.log('2. Calcular Soma');
    console.log('3. Calcular Valor Mínimo');
    console.log('4. Calcular Valor Máximo');
    console.log('5. Sair');
}

function calcularMedia(notas) {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    return total / notas.length;
}

// Função para calcular a soma das notas
function calcularSoma(notas) {
    return notas.reduce((acc, nota) => acc + nota, 0);
}

// Função para calcular o valor mínimo das notas
function calcularMinimo(notas) {
    return Math.min(...notas);
}

// Função para calcular o valor máximo das notas
function calcularMaximo(notas) {
    return Math.max(...notas);
}

function iniciar() {
    exibirMenu();
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite as notas separadas por vírgula: ', (input) => {
                    const notas = input.split(',').map(nota => parseFloat(nota));
                    const media = calcularMedia(notas);
                    console.log(`A média das notas é: ${media.toFixed(2)}`);
                    iniciar();
                });
                break;
            case '2':
                // Solicitar notas, calcular soma e exibir
                break;
            case '3':
                // Solicitar notas, calcular valor mínimo e exibir
                break;
            case '4':
                // Solicitar notas, calcular valor máximo e exibir
                break;
            case '5':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida. Por favor, escolha uma opção válida.');
                iniciar();
                break;
        }
    });
}

iniciar();