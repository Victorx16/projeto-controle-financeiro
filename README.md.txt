# Controle de Finanças Pessoais

## 📖 Sobre o Projeto

Este é um projeto acadêmico desenvolvido para a disciplina de *Software Product: Analysis, Specification, Project & Implementation*. Trata-se de uma aplicação web **Full-Stack** para o gerenciamento de finanças pessoais, permitindo ao usuário cadastrar e visualizar suas receitas e despesas de forma simples e intuitiva.

O projeto segue uma arquitetura de 3 camadas e foi desenvolvido utilizando metodologias ágeis, com o gerenciamento de tarefas realizado através de um board Kanban no GitHub.

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

* **Front-end:**
    * ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) - Framework principal para a construção da interface de usuário reativa (SPA).
    * ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) - Linguagem utilizada no desenvolvimento do front-end.

* **Back-end:**
    * ![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white) - Framework para a construção da API REST.
    * ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) - Linguagem principal do back-end.

* **Banco de Dados:**
    * ![Microsoft SQL Server](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white) - Sistema de gerenciamento para a persistência dos dados.

---


## 🚀 Como Executar o Projeto

Para executar a aplicação, é necessário ter os dois ambientes (back-end e front-end) rodando simultaneamente.

### Back-end (API)

1.  Abra o projeto `controle-financeiro` no IntelliJ IDEA.
2.  Certifique-se de que as configurações de banco de dados no arquivo `application.properties` estão corretas.
3.  Execute a classe principal `ControleFinanceiroApplication`.
4.  O servidor estará rodando em `http://localhost:8080`.

### Front-end (Aplicação Web)

1.  Abra a pasta do projeto `controle-financeiro-frontend` no VS Code.
2.  Abra um terminal e instale as dependências (apenas na primeira vez):
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
4.  Acesse a aplicação no seu navegador em `http://localhost:4200`.