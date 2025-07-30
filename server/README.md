# Teste SolarMarket - Server

Este é o backend do teste técnico para a empresa SolarMarket.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Configurações](#configurações)
- [Instalação](#instalação)
- [Rotas](#rotas)

## Tecnologias Utilizadas

### Backend

* **NestJS** – Framework Node.js para aplicações escaláveis
* **TypeScript** – Tipagem segura e robusta no backend
* **Express** – Servidor web leve para Node.js
* **Sequelize** – ORM para bancos relacionais
* **MySQL** – Banco de dados relacional
* **Dotenv** – Gerenciador de variáveis de ambiente
* **UUID** – Geração de identificadores únicos
* **Prettier** – Padronização de código

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- Node.js (versão 16.0 ou superior)
- npm ou yarn
- Git
- MySql

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
cd JR-lian-souza-miranda-mendes
```

### 2. Configure as variáveis de ambiente

 Crie um arquivo `.env` na pasta "server" e copie o conteúdo do `.env.example`:

```bash
##Db config
DB_NAME=db_name
DB_USER=db_user
DB_PASSWORD=db_password
DB_HOST=db_host
DB_PORT=db_port

##App config
PORT=api_port
```

Preencha as variáveis conforme necessário. Exemplo de variáveis esperadas caso use rode com o docker:

```env
##Db config
DB_NAME=teste
DB_USER=usertest
DB_PASSWORD=passtest
DB_HOST=mysql  
DB_PORT=3306

##App config
PORT=3000
```
> **Notas:**  Se estiver executando com Docker, pode utilizar as variáveis do Db config acima. Caso contrário, defina os valores conforme as configurações do seu ambiente local.

## Instalação

### Como rodar

```bash
#Entre no diretório do backend
cd server

# Instalar dependências
npm install

# Rodar as migrations 
npm run migrate

# Rodar em modo desenvolvimento
npm run start:dev
```

### Para acessar

Acesse a url da api será algo como:
http://localhost:3000/

>**Nota:** A porta da url será de acordo com a informada no .env


## Rotas

> Base URL da API (exemplo local):
> `http://localhost:3000`

## Projects

### POST `/projects`

Cadastra um projeto.

* **Body JSON**:

```json
{
	"name": "Projeto teste",
	"description": "descrição"
}
```

* **Resposta**: `201 Created`

### GET `/projects`

Lista todos os projetos.

* **Resposta**: 

```json
[
	{
		"id": "a9cc552e-0b30-47f6-85a8-42a55a85ae82",
		"name": "Projeto teste",
		"description": "teste",
		"created_at": "2025-07-30T21:07:42.000Z",
		"updated_at": "2025-07-30T21:07:42.000Z",
		"tasks": []
	}
]
```

### GET `/projects/:id`

Lista um projeto específico e suas tasks.

* **Parâmetros de rota**:

  * `id` (string) – ID do projeto a ser buscado

* **Resposta**: 

```json
{
	"id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
	"name": "Projeto Matematica",
	"description": "teste",
	"created_at": "2025-07-30T02:36:09.000Z",
	"updated_at": "2025-07-30T02:36:09.000Z",
	"tasks": [
		{
			"id": "09727a55-1c92-4392-a5ee-4e453ccf0525",
			"title": "teste",
			"description": "descrição do teste",
			"status": "done",
			"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
			"created_at": "2025-07-30T02:36:27.000Z",
			"updated_at": "2025-07-30T02:53:59.000Z"
		},
		{
			"id": "6c866763-a91b-4e0b-8e3d-e20a866f3b32",
			"title": "testando",
			"description": "1111",
			"status": "doing",
			"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
			"created_at": "2025-07-30T03:34:12.000Z",
			"updated_at": "2025-07-30T03:34:12.000Z"
		}
  ]
}
```

### PATCH `/projects/:id`

Atualiza um projeto.

* **Parâmetros de rota**:

  * `id` (string) – ID do projeto a ser atualizado

* **Body JSON**:

```json
{
	"name": "",
	"description": "teste atualização"
}
```

* **Resposta**: 
```json
{
	"id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
	"name": "Projeto Matematica",
	"description": "teste atualização",
	"created_at": "2025-07-30T02:36:09.000Z",
	"updated_at": "2025-07-30T21:11:38.000Z",
	"tasks": []
}
```

### DELETE `/projects/:id`

Deleta um projeto e retorna o projeto que foi deletado.

* **Parâmetros de rota**:

  * `id` (string) – ID do projeto a ser deletado


* **Resposta**: 
```json
{
	"id": "a9cc552e-0b30-47f6-85a8-42a55a85ae82",
	"name": "Projeto teste",
	"description": "teste",
	"created_at": "2025-07-30T21:07:42.000Z",
	"updated_at": "2025-07-30T21:07:42.000Z",
	"tasks": []
}
```

## Tasks

### POST `/tasks`

Cadastra uma tarefa.

* **Body JSON**:

```json
{
	"title": "tarefa teste",
	"description": "teste",
	"status": "todo",
	"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67"
}
```

* **Resposta**: `201 Created`

### GET `/tasks`

Lista todas as tarefas.

* **Resposta**: 

```json
[
	{
		"id": "01623bb5-fd40-4241-8a3d-f9dc85bd16d0",
		"title": "teste",
		"description": "teste",
		"status": "done",
		"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
		"created_at": "2025-07-30T21:20:28.000Z",
		"updated_at": "2025-07-30T21:20:28.000Z"
	},
	{
		"id": "ad4780ca-ee2d-4968-b883-36099faf5717",
		"title": "teste 03",
		"description": "teste",
		"status": "done",
		"project_id": "8f00d777-a7fb-4dda-837a-5da791e0f8c3",
		"created_at": "2025-07-30T21:20:53.000Z",
		"updated_at": "2025-07-30T21:20:53.000Z"
	},
	{
		"id": "de9fbe87-d4dd-4929-8dd4-805623bd6b0b",
		"title": "teste 02",
		"description": "teste",
		"status": "done",
		"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
		"created_at": "2025-07-30T21:20:47.000Z",
		"updated_at": "2025-07-30T21:20:47.000Z"
	}
]
```

### GET `/tasks/:id`

Lista uma tarefa específica.

* **Parâmetros de rota**:

  * `id` (string) – ID da tarefa a ser buscada

* **Resposta**: 

```json
{
	"id": "01623bb5-fd40-4241-8a3d-f9dc85bd16d0",
	"title": "teste",
	"description": "teste",
	"status": "done",
	"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
	"created_at": "2025-07-30T21:20:28.000Z",
	"updated_at": "2025-07-30T21:20:28.000Z"
}
```

### GET `/tasks/project/:id`

Lista todas as tarefas de um projeto específico

* **Parâmetros de rota**:

  * `id` (string) – ID do projeto

* **Resposta**: 

```json
[
	{
		"id": "09727a55-1c92-4392-a5ee-4e453ccf0525",
		"title": "teste",
		"description": "descrição do teste",
		"status": "done",
		"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
		"created_at": "2025-07-30T02:36:27.000Z",
		"updated_at": "2025-07-30T02:53:59.000Z"
	},
	{
		"id": "1a9dc56a-f292-4f57-ac79-0bd08a248cb9",
		"title": "teste",
		"description": "teste",
		"status": "todo",
		"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
		"created_at": "2025-07-30T21:16:22.000Z",
		"updated_at": "2025-07-30T21:16:22.000Z"
	}
]
```

### PATCH `/tasks/:id`

Atualiza uma tarefa.

* **Parâmetros de rota**:

  * `id` (string) – ID da tarefa a ser atualizada

* **Body JSON**:

```json
{
	"title": "tarefa atualizada",
	"description": "descrição atualizada",
	"status": ""
}
```

* **Resposta**: 
```json
{
	"id": "01623bb5-fd40-4241-8a3d-f9dc85bd16d0",
	"title": "tarefa atualizada",
	"description": "descrição atualizada",
	"status": "done",
	"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
	"created_at": "2025-07-30T21:20:28.000Z",
	"updated_at": "2025-07-30T21:23:40.000Z"
}
```

### DELETE `/tasks/:id`

Deleta uma tarefa e retorna a tarefa que foi deletada.

* **Parâmetros de rota**:

  * `id` (string) – ID da tarefa a ser deletada


* **Resposta**: 
```json
{
	"id": "01623bb5-fd40-4241-8a3d-f9dc85bd16d0",
	"title": "tarefa atualizada",
	"description": "descrição atualizada",
	"status": "done",
	"project_id": "bd39e6c8-21b0-47ee-ae4b-6e0c2e407a67",
	"created_at": "2025-07-30T21:20:28.000Z",
	"updated_at": "2025-07-30T21:23:40.000Z"
}
```






