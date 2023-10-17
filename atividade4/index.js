const calc = require('./util/calculadora');
const express = require('express');

const app = express();

app.get("/somar/:a/:b", function (req, res) {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let resultado = calc.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});

app.get("/subtrair/:a/:b", function (req, res) {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let resultado = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${resultado}`);
});

app.get("/multiplicar/:a/:b", function (req, res) {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let resultado = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${resultado}`);
});

app.get("/dividir/:a/:b", function (req, res) {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);

    if (b === 0) {
        res.status(400).send('Não é possível dividir por zero.');
    } else {
        let resultado = calc.dividir(a, b);
        res.send(`${a} / ${b} = ${resultado}`);
    }
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("App rodando na porta " + PORT);
});
