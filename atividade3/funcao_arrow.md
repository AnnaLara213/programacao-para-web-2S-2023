Funcao arrow é uma forma mais concisa de escrever funcoes. Elas são usadas geralmente para funcoes anonimas e simplificar a escrita de um código. Elas podem ser utilizadas quando funções tem uma unica linha de código e podem omitir chaves '{}' e 'return'.
A funcao arrow não pode ser usada como construtor com 'new' e não possuem seu proprio 'this' e herdam do contexto em que foram definidas.

Exemplo:

const num = [1, 2, 3, 4];
const quadrado = num.map((x) => x * x);
console.log(quadrado);