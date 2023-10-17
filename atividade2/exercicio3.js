function multiplicarMatriz(m1, m2) {
    const linhas1 = m1.length;
    const colunas1 = m1[0].length;
    const linhas2 = m2.length;
    const colunas2 = m2[0].length;
    
    
    if (colunas1 !== linhas2) {
        return null;
    }

    const resultado = [];
    for (let i = 0; i < linhas1; i++) {
        resultado[i] = [];
        for (let j = 0; j < colunas2; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < colunas1; k++) {
                resultado[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }
    return resultado;
}



const m1 = [
    [1, 2],
    [3, 4],
];

const m2 = [
    [5, 6],
    [7, 8],
];

const resultado = multiplicarMatriz(m1, m2);

if (!resultado) {
    console.log("Não é possível calcular");
} else {
    console.log("Resultado da multiplicação entre " + m1 + " e " + m2 + " = " + resultado);
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i]);
    }
}