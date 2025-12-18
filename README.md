# 🕒 Bernardo Lomas Watches — Online Ordering System


**Aplicação Full Stack** de e-commerce de relógios desenvolvida como desafio técnico. O foco principal foi a entrega de um código limpo, arquitetura escalável e uma experiência de usuário (UX) fluida e responsiva.

---

## 📌 Visão Geral

O projeto simula o fluxo completo de compra de um relógio, desde a navegação no catálogo até a finalização do pedido. Foi projetado seguindo as melhores práticas de desenvolvimento de software moderno.

### Funcionalidades e premissas assumidas
- [x]  **Catálogo Dinâmico:** Listagem de produtos consumindo API REST.
- [x]  **Carrinho de Compras:** Adicionar/remover itens com validação de quantidade de itens.
- [x]  **Checkout Simulado:** Fluxo completo de finalização de pedido.
- [x]  **Visual:** Display de cards.
- [x]  **Add to cart:** Botão add to cart.
- [x]  **Feedback ao Usuário:** Notificações (Toasts) para ações de sucesso e erro.
- [x]  **Paginação:** Pagination Technical.
- [x]  **Componentes:** Componentização e reutilização de componentes.
- [x]  **Swagger:** Documentação da API via Swagger.
- [x]  **Git:** Conventional commits.
- [x]  **Responsividade:** Layout adaptado para Mobile e Desktop.
- [x]  **Requisitos:** Outros requisitos pedidos no slide do teste.

---

## 🧱 Arquitetura do Sistema

### Backend (Node.js + Express)
Organizado em camadas para garantir o **Single Responsibility Principle (SRP)**:
- **Routes:** Definição dos pontos de entrada da API.
- **Controllers:** Validação de requisições e formatação de respostas.
- **Services:** Concentração de todas as regras de negócio.
- **Prisma/SQLite:** Camada de persistência leve e eficiente para testes.

### Frontend (React)
- **Context API:** Gerenciamento de estado global sem dependências pesadas.
- **Componentização:** UI dividida em partes pequenas, reutilizáveis e testáveis.
- **CSS Puro:** Estilização manual para demonstrar domínio em fundamentos de design.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend** | React, Vite, TypeScript |
| **Backend** | Node.js, Express, TypeScript |
| **Banco de Dados** | SQLite, Prisma ORM |
| **Documentação** | Swagger (OpenAPI) |
| **Padronização** | Conventional Commits, ESLint |

---

## 🚀 Como Executar

### 1. Backend, banco de dados e Swagger
```bash
git clone https://github.com/BernardoLomas/POC-OrderSystem.git
```

```bash
cd backend
```

```bash
npm install
```

```bash
Crie o .env em backend/.env, depois:
Digite: DATABASE_URL="file:./prisma/dev.db"
```

```bash
npx prisma migrate dev --name init
```

```bash
npm run dev
```

```bash
Backend: http://localhost:3000/api
Swagger: http://localhost:3000/api/docs
```

### 3. Frontend
```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

```bash
Abrir para testar a aplicação: http://localhost:5173
```

## 🤖 Ferramentas de Apoio

Ferramentas de inteligência artificial foram utilizadas como apoio para revisão de código, sugestões de arquitetura e melhoria de UX.  
Todas as decisões finais, implementação e validações foram realizadas manualmente.

## 👤 Autor
Bernardo Lomas Desenvolvedor Full Stack
