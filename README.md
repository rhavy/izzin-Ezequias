# izzin SaaS Platform

O **izzin** é uma plataforma SaaS completa para criação de sites, gestão de leads (CRM), automação de marketing e gestão de afiliados, com suporte a White Label.

## 🚀 Funcionalidades Principais

- **Editor de Sites Arrasta-e-Solta**: Crie páginas profissionais de forma visual e rápida.
- **CRM & Gestão de Leads**: Capture e gerencie leads diretamente da sua plataforma.
- **Funis de E-mail**: Automação de marketing integrada para nutrição de leads.
- **Gestão de Equipes**: Controle de consultores e acompanhamento de desempenho em tempo real.
- **Sistema de Afiliados**: Gestão de comissionamento e expansão de rede de revendedores.
- **White Label**: Personalize a identidade visual e utilize domínios customizados para sua própria plataforma.

## 👥 Níveis de Acesso

- **Líder/Empresa**: Painel completo para gestão de equipes, afiliados, CRM e configurações de White Label.
- **Afiliado**: Área dedicada para gestão de sua própria conta, editor de sites e funis.
- **Administrador**: Painel master para gerenciamento de todos os assinantes e sistemas da plataforma.

## 🛠️ Stack Tecnológica

- **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Banco de Dados**: [Prisma ORM](https://www.prisma.io/) (MySQL)
- **Autenticação**: [Better Auth](https://www.better-auth.com/)
- **Cache/Queue**: [Redis (ioredis)](https://redis.io/)
- **E-mails**: [Nodemailer](https://nodemailer.com/)

## ⚙️ Configuração Local

### Pré-requisitos

- Node.js (v20+)
- MySQL
- Redis

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/rhavy/izzin-Ezequias.git
   cd izzin-Ezequias
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com base no arquivo de exemplo (ou use as chaves necessárias: `DATABASE_URL`, `REDIS_URL`, `BETTER_AUTH_SECRET`, etc.).

4. Gere o cliente Prisma:
   ```bash
   npx prisma generate
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🏗️ Estrutura do Projeto

- `src/app`: Rotas e páginas da aplicação (App Router).
- `src/components`: Componentes de UI reaproveitáveis.
- `src/lib`: Configurações de bibliotecas (Prisma, Redis, etc.).
- `src/services`: Regras de negócio e lógica de serviço.
- `prisma/`: Esquemas do banco de dados.
- `public/`: Arquivos estáticos.
