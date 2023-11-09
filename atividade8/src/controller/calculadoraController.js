function mostrarCalculadora(req, res) {
    res.render('calculadora/index.html');
}

function calcular(req, res) {
    const { n1, n2, operador } = req.body;
    let resultado;

    if (operador === '+') {
        resultado = parseFloat(n1) + parseFloat(n2);
    } else if (operador === '-') {
        resultado = parseFloat(n1) - parseFloat(n2);
    } else if (operador === '*') {
        resultado = parseFloat(n1) * parseFloat(n2);
    } else if (operador === '/') {
        resultado = parseFloat(n1) / parseFloat(n2);
    }

    res.render('calculadora/index.html', { resultado });
}

module.exports = {
    mostrarCalculadora,
    calcular,
};
