#  Automação E2E com Cypress — SauceDemo

Suíte de testes automatizados end-to-end para o e-commerce de demonstração [SauceDemo](https://www.saucedemo.com/), cobrindo os principais fluxos de autenticação, carrinho de compras e checkout.

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://github.com/breendo08/saucedemo_cypress_portifolio/actions/workflows/cy.yml/badge.svg)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

##  Sobre o projeto

Este projeto tem como objetivo demonstrar conhecimento prático em automação de testes E2E, aplicando boas práticas de organização de código e separação entre dados de teste e lógica de execução.

A aplicação testada é o **SauceDemo**, um e-commerce fictício criado especificamente para prática de automação, com cenários conhecidos de login, produtos e checkout.

##  Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — framework de automação E2E
- JavaScript
- Node.js
- [GitHub Actions](https://github.com/features/actions) — pipeline de CI/CD
- [Mochawesome](https://github.com/adamgruber/mochawesome) — geração de relatório de evidências

##  Cenários cobertos

| Área | Cenário | Status |
|---|---|---|
| Autenticação | Login com credenciais válidas | ✔️ |
| Autenticação | Login com credenciais inválidas (mensagem de erro) | ✔️ |
| Autenticação | Logout | ✔️ |
| Produtos | Adicionar produto ao carrinho | ✔️ |
| Produtos | Remover produto do carrinho | ✔️ |
| Checkout | Fluxo completo de compra (end-to-end) | ✔️ |

##  Estrutura do projeto

```
.github/
└── workflows
    └──cy.yml
cypress/
├── e2e/
│   ├── auth/
│   │   ├── login.cy.js          # Cenários de login (válido, inválido)
│   │   └── logout.cy.js         # Cenário de logout
│   ├── produtos
│   │   └── produto.cy.js        # Adicionar e remover produtos
│   └── checkout/
│       └── fluxo-completo.cy.js # Checkout end-to-end
└── support/
    ├── commands.js              # Comandos customizados reutilizáveis
    └── e2e.js

```

### Por que essa organização

- **Separação por domínio** (`auth`, `produtos`, `checkout`) facilita localizar testes e mantém os arquivos pequenos e legíveis.

##  Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/breendo08/saucedemo_cypress_portifolio

# Acesse a pasta do projeto
cd saucedemo_cypress_portifolio

# Instale as dependências
npm install
```

### Executando os testes

```bash
# Abrir o Cypress em modo interativo (com navegador visível)
npx cypress open

# Rodar todos os testes em modo headless (terminal)
npx cypress run

# Rodar uma suíte específica
npx cypress run --spec "cypress/e2e/auth/login.cy.js"
```

##  CI/CD — Execução automática

Este projeto possui um pipeline configurado com **GitHub Actions** que executa toda a suíte de testes automaticamente a cada `push` ou `pull request` para a branch `main`.

O workflow está definido em [`.github/workflows/cypress.yml`](.github/workflows/cypress.yml) e realiza:

1. Instalação das dependências
2. Execução de todos os testes Cypress em modo headless
3. Geração do relatório de evidências (Mochawesome)
4. Upload do relatório como artefato da execução

O status da última execução pode ser visto no badge no topo deste README.

##  Relatório de evidências

Os resultados de cada execução são documentados com **Mochawesome**, gerando um relatório em HTML com:

- Resultado individual de cada teste (passou/falhou)
- Tempo de execução por cenário
- Screenshots automáticos dos testes que falharam

Para gerar o relatório localmente:

```bash
npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=true
```

O relatório é gerado na pasta `cypress/reports` e pode ser aberto diretamente no navegador.

>  Em execuções via GitHub Actions, o relatório fica disponível como artefato — acesse a aba **Actions** do repositório, selecione a execução desejada e baixe o arquivo gerado.


##  Próximos passos

- [x] Integração com GitHub Actions para execução automática em cada push
- [x] Geração de relatório de evidências com Mochawesome
- [ ] Cobertura de cenários com `cy.intercept()` para testes de contrato de API


Projeto criado para fins de estudo e portfólio.

---

Desenvolvido por **[Brendo Dias]** — [LinkedIn](https://www.linkedin.com/in/brendo-dias-arag%C3%A3o-85323031/?skipRedirect=true) · [GitHub](https://github.com/breendo08)