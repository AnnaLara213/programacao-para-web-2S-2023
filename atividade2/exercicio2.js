const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
]


function calcaularTransposta(m) {
    const transposta = [];
    for (let i = 0; i < m[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < m.length; j++) {
            transposta[i][j] = m[j][i];
        }
    }
    return transposta;
}

function imprimirMatriz(m) {
    for (let i = 0; i < m.length; i++) {
        console.log(m[i]);
    }
}
console.log('\nMatriz A:\n');
imprimirMatriz(matrizA);

const matrizTransposta = (calcaularTransposta(matrizA));
console.log('\nMatriz Transposta A:\n');
imprimirMatriz(matrizTransposta);