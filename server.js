require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY; // Chave da API no arquivo .env

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para buscar o clima
app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'Nome da cidade não fornecido.' });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do clima.' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});