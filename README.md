<h1 align="center">
    <img alt="Produtos" src="./layout.png" width="500px"/>
</h1>

<br>

## 📦 Controle de Produtos

Controle de Produtos é uma aplicação, onde você consegue adicionar, remover ou editar, novos produtos para seu estoque virtual.
- Adicionar um novo produto ao estoque;
- Remover um produto do estoque;
- Editar um produto existente;
- Tornar um porduto indisponível;
- Validação se já existe algum produto com o mesmo código no estoque;	
- Exibição de mensagens de erro;
- Entre outros.

## 🛠 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- ReactJS
- Typescript
- React-Router
- React-Modal
- Toastify
- Unform
- Styled-components

## 📚 Desenvolvimento

Durante o desenvolvimento a construção do layout foi pensando em trazer algo simples e intuitivo, para que o usuário sinta-se confortável durante a sua experiência, para esse objetivo ser alcançado, foi utilizado a biblioteca [Styled-components](https://www.styled-components.com/), que permite a criação de estilos para componentes React, de forma mais perfomatica e dinâmica, além do `Style-Componets`, foi utilizado o [Toastify](https://fkhadra.github.io/react-toastify/introduction) para exibir mensagens de erro, e o [Unform](https://unform.dev/) para a criação de formulários de forma perfomatica, e o [Yup](https://github.com/jquense/yup) para a validação dos campos do formulário.

Afim de zelar pela experiência do usuário, quando o mesmo decidi editar um produto, é exibido um Modal, da biblioteca [React-Modal](https://github.com/reactjs/react-modal), onde é carregado todas as informações do produto.

O `ContextAPI` foi utilizado para a criação de um contexto global, onde será possível acessar os dados do estoque, para que o usuário possa adicionar, editar ou remover um produto. Perpetuando as informações no localStorage.

Para garantir uma padronização de código, foi utilizado o [ESLint](https://eslint.org/) para a validação, e o [Prettier](https://prettier.io/), para a formatação.

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone git@github.com:desafiosjamestip/desafio-front-end.git

# Entre na pasta do projeto, e acessa a branch de desenvolvimento.
$ cd desafio-front-end
$ git checkout luizsmatos-desafio-front-end
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```

---
