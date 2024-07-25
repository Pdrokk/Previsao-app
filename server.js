const express = require('express');
const axios = require('axios');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota para obter informações sobre o clima
app.get('/weather', async (req, res) => {
    const city = req.query.city; // cidade recebida como parâmetro
    const apiKey = process.env.API_KEY; // chave da API armazenada no .env

    try {
        // Realiza a requisição para a API
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        res.json(response.data); // Retorna os dados obtidos
    } catch (error) {
        console.error(error.response.data); // Log do erro para depuração
        res.status(500).json({ error: 'Erro ao obter dados do clima. Cidade não encontrada ou outro problema.' });
    }
});

// Rota para o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
