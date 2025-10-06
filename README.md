# Controle de Finanças Pessoais

## 📖 Sobre o Projeto

Este é um projeto acadêmico desenvolvido para a disciplina de *Software Product: Analysis, Specification, Project & Implementation*. Trata-se de uma aplicação web **Full-Stack** para o gerenciamento de finanças pessoais, permitindo ao usuário cadastrar, visualizar e editar suas receitas e despesas de forma simples e intuitiva.

O projeto segue uma arquitetura de 3 camadas e foi desenvolvido utilizando metodologias ágeis, com o gerenciamento de tarefas realizado através de um board Kanban no GitHub.

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

* **Front-end:**
    * ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) - Framework para a construção da interface de usuário reativa (SPA).
    * ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) - Linguagem utilizada no desenvolvimento do front-end.

* **Back-end:**
    * ![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white) - Framework para a construção da API REST.
    * ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) - Linguagem principal do back-end.

* **Banco de Dados:**
    * ![Microsoft SQL Server](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white) - Sistema para a persistência dos dados.

---

## ✨ Funcionalidades

### Criar e Listar Lançamentos

* **Listagem de Lançamentos:** A tela principal exibe uma tabela com todos os lançamentos financeiros.
* **Cadastro de Novos Lançamentos:** Um formulário permite ao usuário inserir as informações de um novo lançamento (descrição, valor, data e tipo).
* **Atualização em Tempo Real:** Após o cadastro, a lista na tela é **atualizada automaticamente**, sem a necessidade de recarregar a página, proporcionando uma experiência de usuário fluida.

### Editar um Lançamento

* **Navegação para Edição:** A tabela de lançamentos agora possui um botão "Editar" em cada linha.
* **Página Dedicada:** Ao clicar em "Editar", o usuário é redirecionado para uma página específica de edição (ex: `/editar/14`), utilizando o sistema de rotas do Angular.
* **Carregamento de Dados:** A página de edição busca automaticamente os dados do lançamento específico na API e preenche o formulário, permitindo que o usuário veja as informações atuais antes de modificar.
* **Atualização de Dados:** Após alterar os campos e clicar em "Salvar Alterações", os novos dados são enviados para a API (via método `PUT`), que os atualiza no banco de dados.
* **Redirecionamento Automático:** Após salvar, o usuário é redirecionado de volta para a página principal, onde a lista de lançamentos já reflete as alterações feitas em tempo real.

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
