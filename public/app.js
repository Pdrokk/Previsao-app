async function getWeather() {
    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('result');

    if (!city) {
        resultDiv.innerHTML = 'Por favor, digite o nome de uma cidade.';
        return;
    }

    try {
        const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();

        if (data.cod === 200) {
            resultDiv.innerHTML = `
                <strong>Clima em ${data.name}:</strong><br>
                Temperatura: ${data.main.temp}°C<br>
                Descrição: ${data.weather[0].description}<br>
                Umidade: ${data.main.humidity}%<br>
                Vento: ${data.wind.speed} m/s
            `;
        } else {
            resultDiv.innerHTML = 'Cidade não encontrada.';
        }
    } catch (error) {
        resultDiv.innerHTML = 'Erro ao buscar o clima. Tente novamente mais tarde.';
    }
}