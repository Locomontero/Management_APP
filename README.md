# Management_APP

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
- O projeto está estruturado com o **frontend** e **backend** dentro de um único repositório, utilizando **submódulos Git** para maior segurança e controle.
  - O **Frontend** está na pasta `FrontendMP`.
  - O **Backend** está na pasta `BackendMP`.

### Funcionalidade
A aplicação permite que os gestores administrativos:
1. **Gerenciem clientes**, associando-os a projetos e atividades.
2. **Criem e editem projetos**, atribuindo status e datas de início/termino.
3. **Visualizem projetos e suas respectivas atividades**, proporcionando uma visão clara do progresso de cada projeto.

### Fluxo de Trabalho
1. O **Frontend** (React) consome os dados da **API** desenvolvida em **Spring Boot**.
2. **Axios** no frontend realiza as requisições HTTP para o backend, obtendo e enviando informações de projetos e clientes.
3. O **Backend** é responsável por expor as APIs RESTful para gestão dos dados, armazenando informações no banco de dados **PostgreSQL**.

### Submódulos Git
Este repositório contém submódulos Git para o **frontend** e o **backend**, que estão localizados nas seguintes pastas:
- **Frontend**: Pasta `FrontendMP`
- **Backend**: Pasta `BackendMP`

### Como Clonar o Repositório com Submódulos

Para clonar o repositório principal e inicializar corretamente os submódulos, utilize o seguinte comando:

```bash
git clone --recurse-submodules https://github.com/Locomontero/Management_APP.git
