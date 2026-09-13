# Blog Pessoal — Frontend (React)
<img width="1917" height="943" alt="Image" src="https://github.com/user-attachments/assets/c7539908-e69a-4d65-89fe-5513be08b628" />

<p align="center">
  Interface moderna, responsiva e performática construída em React para gerenciamento de postagens, categorias de temas e perfil de usuário, conectada a uma API RESTful completa desenvolvida em NestJS.
</p>

[Visão Geral](#-visão-geral) • [Recursos e Funcionalidades](#-recursos-e-funcionalidades) • [Arquitetura e Fluxo](#-arquitetura-e-fluxo-da-aplicação) • [Tecnologias](#-tecnologias-e-ferramentas) • [Instalação](#-passo-a-passo-de-instalação) • [Integração com Backend](#-integração-com-o-backend)

---

## Visão Geral

O **Blog Pessoal** é uma aplicação web Full Stack criada para permitir que usuários publiquem artigos, compartilhem conteúdos e gerenciem postagens agrupadas por temas específicos. 

Este repositório contém o **código-fonte da camada Frontend**, responsável por toda a experiência visual, controle de estado de autenticação via **JWT (JSON Web Token)**, validação de rotas protegidas e navegação reativa single-page (SPA).

### Repositórios do Projeto

| Projeto | Repositório GitHub | Tecnologias Chave |
| :--- | :--- | :--- |
| **Frontend** | [luhdias-png/Blogpessoal-React](https://github.com/luhdias-png/Blogpessoal-React) | React, TypeScript, Vite, Tailwind CSS, Axios |
| **Backend** | [luhdias-png/Blogpessoal_Nest-Atividade-Generation-](https://github.com/luhdias-png/Blogpessoal_Nest-Atividade-Generation-) | NestJS, TypeScript, TypeORM, PostgreSQL/MySQL, JWT |

---

##  Recursos e Funcionalidades

### Autenticação e Segurança
- **Login e Registro de Usuários:** Cadastro com foto de perfil e dados pessoais.
- **Autenticação JWT:** Armazenamento seguro do token no `localStorage` / Context API e injeção automática no header `Authorization: Bearer <token>` em requisições privadas.
- **Rotas Protegidas:** Redirecionamento automático para a tela de login ao tentar acessar páginas privadas sem um token válido.
- **Logout Seguro:** Limpeza de estado e desconexão com encerramento de sessão local.

### Gerenciamento de Postagens (CRUD)
- **Feed Principal:** Listagem de todas as postagens cadastradas no blog.
- **Criação e Edição:** Formulários dinâmicos para publicar e atualizar artigos vinculados a um tema.
- **Exclusão de Posts:** Modal/página de confirmação antes de remover postagens.

### Gerenciamento de Temas (CRUD)
- **Listagem de Temas:** Exibição das categorias disponíveis no sistema.
- **Cadastro e Atualização:** Permite criar novas categorias/temas ou renomear existentes.
- **Filtro por Tema:** Organização clara das postagens vinculadas a cada categoria.

### Perfil de Usuário
- Exibição de dados do usuário autenticado (Nome, Foto, E-mail/Usuário).

---

## Arquitetura e Fluxo da Aplicação

```text
               +----------------------------------+
               |        Navegador do Usuário      |
               +----------------------------------+
                                |
                                v
               +----------------------------------+
               |     React App (Vite + Router)    |
               +----------------------------------+
                /              |               \
               v               v                v
     +--------------+   +---------------+   +---------------+
     | Auth Context |   |  Pages & UI   |   | Axios Service |
     +--------------+   +---------------+   +---------------+
            |                                       |
            +------------ HTTP (JWT Bearer) --------+
                                |
                                v
               +----------------------------------+
               |       API Backend (NestJS)       |
               +----------------------------------+
```

---

##  Tecnologias e Ferramentas

### Core
- **[React](https://react.dev/) (v18+)** — Biblioteca para construção de interfaces SPA baseadas em componentes.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para garantia de consistência dos contratos com a API.
- **[Vite](https://vitejs.dev/)** — Build tool ultra-rápido para ambiente de desenvolvimento e bundling de produção.

### Estilização e UI
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária e responsiva sem acoplamento de CSS externo.
- **[Lucide React](https://lucide.dev/)** — Ícones modernos e leves em vetor.

### Comunicação e Roteamento
- **[Axios](https://axios-http.com/)** — Cliente HTTP com suporte a interceptores para envio de tokens de autorização.
- **[React Router DOM](https://reactrouter.com/)** — Gerenciamento de rotas e navegação do cliente sem recarregamento de página.

---

##  Passo a Passo de Instalação

### Pré-requisitos
Antes de iniciar, verifique se possui as seguintes ferramentas instaladas:
- **[Node.js](https://nodejs.org/)** (versão 18 LTS ou superior recomendada)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)**
- Instância do **Backend NestJS** rodando localmente ou link de deploy ativo.

### 1. Clonar o Repositório
```bash
git clone https://github.com/luhdias-png/Blogpessoal-React.git
cd Blogpessoal-React
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto contendo a URL base do seu servidor backend:

```env
VITE_API_URL=http://localhost:3000
```
*(Substitua pela URL do backend em produção, como no Render, Vercel ou Railway, se aplicável).*

### 4. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no seu navegador através do endereço exibido no terminal (ex: `http://localhost:5173`).

### 5. Build para Produção
Para compilar e gerar os arquivos otimizados de produção:
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `/dist`.

---

##  Integração com o Backend

O Frontend consome a API RESTful desenvolvida em **NestJS**. Abaixo está o mapeamento dos principais endpoints consumidos pelo Axios:

###  Autenticação (`/usuarios`)
| Método | Endpoint | Descrição | Requer Auth |
| :--- | :--- | :--- | :---: |
| `POST` | `/usuarios/logar` | Realiza login e retorna o Token JWT | ❌ |
| `POST` | `/usuarios/cadastrar` | Cadastra um novo usuário no sistema | ❌ |
| `GET` | `/usuarios/all` | Lista todos os usuários cadastrados | ✅ |

###  Postagens (`/postagens`)
| Método | Endpoint | Descrição | Requer Auth |
| :--- | :--- | :--- | :---: |
| `GET` | `/postagens` | Lista todas as postagens | ✅ |
| `GET` | `/postagens/:id` | Busca uma postagem específica por ID | ✅ |
| `POST` | `/postagens` | Cria uma nova postagem associada a um Tema | ✅ |
| `PUT` | `/postagens` | Atualiza o título/texto de uma postagem | ✅ |
| `DELETE` | `/postagens/:id` | Deleta uma postagem existente | ✅ |

###  Temas (`/temas`)
| Método | Endpoint | Descrição | Requer Auth |
| :--- | :--- | :--- | :---: |
| `GET` | `/temas` | Lista todos os temas cadastrados | ✅ |
| `GET` | `/temas/:id` | Busca um tema por ID | ✅ |
| `POST` | `/temas` | Cadastra um novo tema/categoria | ✅ |
| `PUT` | `/temas` | Atualiza o nome/descrição de um tema | ✅ |
| `DELETE` | `/temas/:id` | Remove um tema cadastrado | ✅ |

---

##  Estrutura de Diretórios

```text
Blogpessoal-React/
├── public/                 # Arquivos públicos e favicons
├── src/
│   ├── assets/             # Imagens, vetores e mídias estáticas
│   ├── components/         # Componentes reutilizáveis
│   │   ├── footer/         # Rodapé da aplicação
│   │   ├── navbar/         # Barra de navegação com menu
│   │   ├── postagens/      # Modais e cards de postagem
│   │   └── temas/          # Formulários e cards de temas
│   ├── contexts/           # Context API (AuthContext para gerenciamento de sessão)
│   ├── models/             # Interfaces/Tipagens TypeScript (Usuario, Postagem, Tema)
│   ├── pages/              # Visualizações de páginas (Home, Login, Cadastro, Perfil)
│   ├── services/           # Configuração de chamadas HTTP com Axios (`Service.ts`)
│   ├── App.tsx             # Roteador principal e Providers de Contexto
│   ├── main.tsx            # Ponto de entrada React DOM
│   └── index.css           # Diretivas do Tailwind CSS e estilos globais
├── .gitignore              # Arquivos ignorados pelo controle de versão
├── index.html              # Template principal HTML
├── package.json            # Gerenciador de dependências e scripts
├── tsconfig.json           # Configuração do compilador TypeScript
└── vite.config.ts          # Configuração de build do Vite
```

---

##  Autor

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/luhdias-png">
        <img src="https://github.com/luhdias-png.png" width="100px;" alt="Foto de André Lucas"/><br />
        <sub><b>André Lucas (Lucas-Dev)</b></sub>
      </a>
    </td>
  </tr>
</table>
