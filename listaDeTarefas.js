//Cria a interface de leitura e escrita no terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,   // Leitura dos dados de entrada do usuário
    output: process.stdout // Saída dos dados para exibição no console
});

// Array para armazenar as tarefas
const tarefas = [];

// Função para adicionar uma nova tarefa ao array
function adicionarTarefa(tarefa) {
    tarefas.push({ descricao: tarefa, concluida: false});
}

// Função para marcar uma tarefa como concluída
function marcarComoConcluida(indice) {
    tarefas[indice].concluida =true;
}

// Função para remover uma tarefa do array
function removerTarefa(indice) {
    tarefas.splice(indice, );
}

// Função para exibir a lista de tarefas no console
function exibirListaDeTarefas() {
    console.log('Lista de Tarefas:');
    tarefas.forEach((tarefa, indice) => {
        // Exibe o número da tarefa, o status de conclusão e a descrição
        console.log(`${indice + 1}. [${tarefa.concluida ? 'X' : ' '}] ${tarefa.descricao}`);
    });
}

// Função para exibir o menu de opções
function menu() {
    console.log('--- Menu ---');
    console.log('1. Adicionar Tarefa');
    console.log('2. Marcar como Concluída');
    console.log('3. Remover Tarefa');
    console.log('4. Exibir Lista de Tarefas');
    console.log('5. Sair');
}

// Função principal que inicia a interação com o usuário
function iniciar() {
    menu();
    // Pergunta ao usuário qual opção ele deseja escolher
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':// Adicionar Tarefa
                rl.question('Digite a descrição da nova tarefa: ', (descricao) => {
                    adicionarTarefa(descricao);
                    console.log('Tarefa adicionada com sucesso.');
                    iniciar();
                });
                break;

            case '2':// Marcar como Concluída
                exibirListaDeTarefas();
                rl.question('Digite o número da tarefa concluída: ', (numero) => {
                    const indice = parseInt(numero) - 1;
                    if (indice >= 0 && indice < tarefas.length) {
                        marcarComoConcluida(indice);
                        console.log('Tarefa marcada como concluída.');
                    } else {
                        console.log('Número de tarefa inválido.');
                    }
                    iniciar();
                });
                break;

            case '3':// Remover Tarefa
                exibirListaDeTarefas();
                rl.question('Digite o número da tarefa a ser removida: ', (numero) => {
                    const indice = parseInt(numero) - 1;
                    if (indice >= 0 && indice < tarefas.length) {
                        removerTarefa(indice);
                        console.log('Tarefa removida com sucesso.');
                    } else {
                        console.log('Número de tarefa inválido.');
                    }
                    iniciar();
                });
                break;

            case '4':// Exibir Lista de Tarefas
                exibirListaDeTarefas();
                iniciar();
                break;

            case '5':// Sair/fechar aplicação
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

// Inicia a interação com o usuário chamando a função principal
iniciar();