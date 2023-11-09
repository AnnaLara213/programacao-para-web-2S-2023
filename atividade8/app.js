const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

const calculadoraRouter = require('./routes/calculadora');
app.use('/', calculadoraRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
