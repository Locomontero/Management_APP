# Management APP

Este projeto é uma aplicação web desenvolvida para **gestão de clientes**, **projetos** e **atividades** com o objetivo de fornecer visibilidade e controle funcional aos gestores administrativos.

## Tecnologias Utilizadas

### Frontend
- **JavaScript** com **React**: Biblioteca para construção da interface do usuário.
- **Axios**: Utilizado para realizar as requisições HTTP para o backend.

### Backend
- **Java** com **Maven**: A linguagem de programação e o gerenciador de dependências utilizados para o desenvolvimento do backend.
- **Spring Boot**: Framework utilizado para construir a API RESTful.

### Banco de Dados
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações de clientes, projetos e atividades.

### Arquitetura
- O projeto está dividido em dois repositórios separados:
    - **Frontend** (React)
    - **Backend** (Java/Spring Boot)

  Ambos são conectados como **submódulos Git** para maior segurança e controle.

### Funcionalidade
A aplicação permite que os gestores administrativos:
1. **Gerenciem clientes**, associando-os a projetos e atividades.
2. **Criem e editem projetos**, atribuindo status e datas de início/termino.
3. **Visualizem projetos e suas respectivas atividades**, proporcionando uma visão clara do progresso de cada projeto.

### Fluxo de Trabalho
1. **Frontend** (React) consome os dados da **API** desenvolvida em **Spring Boot**.
2. **Axios** no frontend realiza as requisições HTTP para o backend, obtendo e enviando informações de projetos e clientes.
3. **Backend** é responsável por expor as APIs RESTful para gestão dos dados, armazenando informações no banco de dados **PostgreSQL**.

### Submódulos Git
Este repositório contém um submódulo Git para o **backend**, que é mantido em um repositório separado:
- **Frontend**: [Repositório Frontend](https://github.com/Locomontero/FrontendMP)
- **Backend**: [Repositório Backend](https://github.com/Locomontero/BackendMP)

Caso precise clonar o repositório, utilize o seguinte comando para clonar também o submódulo:
```bash
git clone --recursive https://github.com/Locomontero/Management_APP.git
