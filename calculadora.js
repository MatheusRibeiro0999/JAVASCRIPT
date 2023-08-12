const readline = require('readline'); //módulo para interação com usuário pelo terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});// cria interface de leitura e escrita que se conecta à entrada padrão process.stdin e a saída padrão process.stdout do terminal

//definimos a função calcular onde todo o processo de interação e cálculos acontece.
function calcular() {
    //pergunta ao usuário o primeiro número e guarda o valor na variavel num1
    rl.question('digite o primeiro número: ', (num1) => {
        //pergunta ao usuário a operação e guarda o valor na variavel operacao
        rl.question('digite a operação (+, -, *, /): ', (operacao) => {
            //pergunta ao usuário o segundo valor e guarda o valor na variavel num2
            rl.question('digite o segundo valor: ', (num2) => {
               //converte os números de string para float para calcular 
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let resultado;// declara a variável resultado sem valor definido ainda

                switch (operacao) {
                    case '+':
                        resultado = num1 + num2;
                        break;
                    case '-':
                        resultado = num1 - num2;
                        break;
                    case '*':
                        reultado = num1 * num2;
                        break;
                    case '/':
                        resultado = num1 / num2;
                        break;
                    default:
                        console.log('operação inválida. ');// retorna mensagem de operação inválida
                        rl.close();// encerra a interface de leitura que está sendo usada para interagir com o usuário via terminal
                        return;// encerra a função calcular
                }
                console.log('resultado: ', resultado);
                rl.close();
            });
        });
    });
}
//chama a função calcular para iniciar a interação com o usuário
calcular();