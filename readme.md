# Carsten — Prova Técnica Frontend

Aplicação web desenvolvida para a prova técnica da Carsten, utilizando HTML, CSS e JavaScript puro, com integração completa à API REST fornecida pela empresa.

---

# Objetivo

Desenvolver uma aplicação frontend capaz de consumir a API da prova técnica, implementando:

- Cadastro de usuário
- Verificação de e-mail
- Login autenticado
- Perfil do usuário
- Recuperação de senha
- Redefinição de senha

---

# Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Fetch API
- LocalStorage
- Live Server (VSCode)

---

# Estrutura do projeto

```txt
carsten/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── main.js
│   ├── router.js
│   ├── state.js
│   ├── storage.js
│   ├── ui.js
│   │
│   └── pages/
│       ├── login.js
│       ├── register.js
│       ├── dashboard.js
│       ├── send-code.js
│       ├── validate-code.js
│       ├── forgot-password.js
│       └── reset-password.js
```

---

# Funcionalidades implementadas

## Cadastro de usuário

Integração com:

```txt
POST /api/v1/auth/register
```

Permite:
- nome
- e-mail
- senha

Validações:
- senha mínima de 8 caracteres
- campos obrigatórios

---

## Verificação de e-mail

Integração com:

```txt
POST /api/v1/auth/send-code
POST /api/v1/auth/validate-code
```

Fluxo:
1. envio do código
2. validação do código recebido por e-mail

---

## Login autenticado

Integração com:

```txt
POST /api/v1/auth/login
```

Autenticação em duas camadas:
- `Authorization: Bearer pk_...`
- `X-Access-Token: JWT`

---

## Perfil do usuário

Integração com:

```txt
GET /api/v1/user/me
```

Exibe:
- nome
- e-mail
- status de verificação
- ID do usuário
- data de criação

---

## Recuperação de senha

Integração com:

```txt
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
```

Fluxo:
1. solicitação de código
2. redefinição de senha

---

# Persistência de sessão

O JWT é salvo no:

```txt
localStorage
```

Permitindo:
- manter login após refresh
- restauração automática da sessão

---

# Proteção de rota

A rota de dashboard exige autenticação.

Caso não exista JWT:
- usuário é redirecionado para login

---

# Sistema de feedback visual

Implementado:
- mensagens de erro
- mensagens de sucesso
- loading states
- botões desabilitados durante requests

Sem utilização de `alert()`.

---

# Tratamento de erros HTTP

Tratamento para:
- `401`
- `409`
- `422`
- `429`

---

# Configuração da API

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://api.carsten.com.br/api/prova
VITE_API_TOKEN=seu_token_pk
```

Substitua `seu_token_pk` pelo token fornecido pela empresa avaliadora.

# Como executar o projeto

## 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

---

## 2. Abrir no VSCode

---

## 3. Instalar a extensão Live Server

Extensão:
```txt
Live Server
```

Autor:
```txt
Ritwick Dey
```

---

## 4. Executar

Clique com botão direito no:

```txt
index.html
```

Depois:

```txt
Open with Live Server
```

---

# Endpoints utilizados

```txt
POST /api/v1/auth/register
POST /api/v1/auth/send-code
POST /api/v1/auth/validate-code
POST /api/v1/auth/login
GET  /api/v1/user/me
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
```

---

# Melhorias implementadas além do solicitado

- Organização modular do código
- Persistência de autenticação
- Proteção de rota
- UX com loading e feedback visual
- Estrutura escalável
- Separação por páginas e responsabilidades

---

# Autor

Pedro  
PROVA-2026-003