# Previsão App

Previsão App é um aplicativo de previsão do tempo desenvolvido em Node.js que fornece informações climáticas em tempo real para diversas cidades.

## Tecnologias Utilizadas

- **Linguagem**: JavaScript (Node.js)
- **Framework**: Express.js
- **API de Previsão do Tempo**: OpenWeatherMap
- **Bibliotecas**:
  - Axios (para requisições HTTP)
  - Dotenv (para gerenciar variáveis de ambiente)

## Funcionalidades

- Busca de previsão do tempo por cidade
- Exibição de temperatura, umidade, velocidade do vento e condição climática
- Interface web para interação com o usuário

## Como Executar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/Pdrokk/Previsao-app.git
   ```
2. **Acesse o diretório do projeto:**
   ```bash
   cd Previsao-app
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Configure a chave de API do OpenWeatherMap:**
   - Crie uma conta e obtenha uma chave de API em [OpenWeatherMap](https://openweathermap.org/api).
   - Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
     ```
     API_KEY=SUA_CHAVE_AQUI
     ```
5. **Inicie o servidor:**
   ```bash
   node server.js
   ```
6. **Acesse a aplicação:**
   - Abra seu navegador e visite `http://localhost:3000`.

## Estrutura do Projeto

```
Previsao-app/
├── node_modules/       # Dependências do Node.js
├── public/             # Arquivos estáticos (CSS, imagens)
│   ├── css/
│   │   └── style.css   # Estilos da aplicação
│   └── images/         # Imagens utilizadas na aplicação
├── .env                # Variáveis de ambiente
├── package-lock.json   # Arquivo de bloqueio de versões do npm
├── package.json        # Configurações e dependências do projeto
├── server.js           # Arquivo principal do servidor
└── README.md           # Documentação do projeto
```

## Contribuição

Se desejar contribuir:

1. **Fork este repositório**
2. **Crie uma branch com sua feature:**
   ```bash
   git checkout -b minha-feature
   ```
3. **Faça commit das suas alterações:**
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. **Envie um push para a branch:**
   ```bash
   git push origin minha-feature
   ```
5. **Abra um Pull Request**

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

Criado por [Pedro](https://github.com/Pdrokk). Sinta-se à vontade para entrar em contato para dúvidas ou sugestões!
