/*Crie um programa em linguagem JavaScript que recebe um número e imprime no console:

0 - se o número não for primo;

1 - se o número for primo.

O programa deve se chamar verificaNumeroPrimo.js e deve estar em uma pasta chamada atividade1 no repositório do github.*/


function primeNumber(numero) {
    if (numero <= 1) {
        return 0; 
    } else {
        for (let i = 3; i <= Math.sqrt(numero); i ++) {
            if (numero % i === 0) {
                return 0;
            }
        }
        return 1;
    }
}

const numero = 24;
const resultado = primeNumber(numero);

if (resultado === 1) {
    console.log(numero + " é primo");
} else {
    console.log(numero + " não é primo");
}

