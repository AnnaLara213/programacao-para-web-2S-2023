Uma promise é um objeto JavaScript que representa um valor que apesar de não estar disponível ainda poderá ser no futuro. São utilizadas para operações assíncronas deixando o código mais organizado e legível.

Pode ficar em 3 estados:
Pending sendo o estado inicial
Fulfilled sendo a conlusão com sucesso da operação assíncrona
Rejected sendo a falha da operação assíncrona

Exemplo:

const operacaoAssincrona = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Algo deu errado'));
        }, 1000);
    });
};

operacaoAssincrona()
    .then((resultado) => {
        console.log(`Operação bem-sucedida: ${resultado}`);
    })
    .catch((erro) => {
        console.error(`Erro: ${erro.message}`);
    });
