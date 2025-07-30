# Teste SolarMarket - Client

Este é o frontend do teste técnico para a empresa SolarMarket.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Configurações](#configurações)
- [Instalação](#instalação)

## Tecnologias Utilizadas

### Frontend

* **Vue.js** – Framework JavaScript para interfaces reativas
* **TypeScript** - Superset do JavaScript com tipagem estática
* **Tailwind CSS** – Framework utilitário para estilização rápida
* **Axios** – Cliente HTTP para requisições assíncronas
* **Prettier** – Formatador automático de código
* **Dotenv** – Gerenciador de variáveis de ambiente

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- Node.js (versão 16.0 ou superior)
- npm ou yarn
- Git

```bash
# Verificar versões
node --version
npm --version
git --version
```

## Configurações

Antes de iniciar o projeto, é necessário configurar as variáveis de ambiente. Siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/LianMiranda/JR-lian-souza-miranda-mendes.git
cd JR-lian-souza-miranda-mendes.git
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta "client" e copie o conteúdo do `.env.example`:

```bash
VITE_API_URL=api_url
```

Preencha a variável com a url da API. Exemplo de variáveis esperadas:

```env
VITE_API_URL=http://localhost:3000
```

## Instalação

### Como rodar

```bash
#Entre no diretório do frontend
cd client

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Lint + formatação
npm run lint
npm run format
```

### Para acessar

Acesse a ulr informada no terminal. Deve ser algo como:
http://localhost:5173/


>**Nota 01:** Certifique-se que o backend esteja rodando em um terminal separado.




