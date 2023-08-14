const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gerarSenha(comprimento) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let senha = '';

    for (let i = 0; i < comprimento; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    return senha;
}

function iniciar() {
    console.log('Bem-vindo ao Gerador de Senhas!');
    
    rl.question('Quantos caracteres deseja na senha? ', (comprimento) => {
        const senhaGerada = gerarSenha(comprimento);
        console.log(`Sua senha gerada é: ${senhaGerada}`);
        rl.close();
    });
}

iniciar();

