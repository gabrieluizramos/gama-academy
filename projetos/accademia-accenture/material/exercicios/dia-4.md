# Dia 4

## Callbacks

1) Em teoria, o que são callbacks?

2) Como adaptar a função abaixo para receber um callback que será executado com o resultado da operação ao invés de fazer um `alert`?
```js
const computacaoMuitoCustosa = () => {
    const superCalculo = 1 + 2;
    alert(superCaulco)
}

computacaoMuitoCustosa();
```


## Métodos HTTP

1) Resuma os métodos HTTP:
- GET
- POST
- PUT
- DELETE
- PATCH

2) O que são e para que servem os Status Codes em HTTP?

## Comunicações AJAX

1) Faça uma chamada para a API `https://jsonplaceholder.typicode.com/users` e liste todos os usuários no console:
- Utilizando XHR (**dica**: utilize a função `JSON.parse` para converter os dados de um texto para objeto JavaScript);
- Utilizando Fetch.

## Promises

1) Converta a chamada HTTP usando `XHR` do exercício anterior para Promise, chamada `meuFetch`, simulando o fetch que usamos no exercício anterior.

2) Utilizando Fetch, faça uma chamada para a API `https://jsonplaceholder.typicode.com/users` e liste todos os usuários no console.
- Realizando as tratativas para caso de erro;
- Depois, adapte o código para utilizar Async/Await.

3) Qual a diferença entre utilizar Promise de maneira `thenable` (com `.then`) ou com `async/await`?

4) Qual a diferença dos estados de uma Promise (`pending`, `fulfilled` e `rejected`)?

## Single Page Applications

1) O que é uma SPA?

2) Qual a principal diferença de uma SPA para uma aplicação mais "tradicional"? Como elas trafegam dados entre o cliente e o servidor?

## Node e NPM

1) Conceitualmente, o que é o `Node`, o `NPM` e o `NPX`?

2) Como iniciar um projeto utilizando `NPM`?

3) Qual a diferença entre dependências que estão listadas como `dependencies` e `devDependencies` em um arquivo `package.json`?

4) Como criar uma rotina customizada usando `npm`?

5) Crie um projeto vazio utilizando `npm`.

## Yarn

1) Qual a diferença entre o `Yarn` e o` NPM`?

2) Como funcionam os `workspaces`?

3) Devo utilizar `NPM` e `Yarn` em um mesmo projeto? Por quê?

## Babel

1) O que é o `Babel`? Qual a diferença entre um transpilador e um compilador?

2) Como você instala o `Babel` em um projeto? De que maneiras podemos utilizá-lo?

3) Crie um projeto vazio utilizando `npm` e instale o `Babel` para rodar à partir da CLI e transpilar seu projeto.

## Web Components

1) Essencialmente, o que são Web Components?

2) Você precisa de algum framework/biblioteca para aplicar componentização em uma interface? Por quê?

## Funções como componentes

1) Pra brincar um pouco com React: crie um projeto utilizando `create-react-app` e, dentro desse projeto, crie um botão que dispare um `alert`.


## Console

1) Escreva um programa que exibe uma mensagem `iniciando contagem` e começa um contador de tempo. Após isso, esse programa deverá rodar um laço de repetição qualquer indo de 0 até 100 e depois finalizar a contagem, exibindo o tempo total do contador de tempo.

## Debugging

1) Para que é utilizada a declaração `debugger;` em um arquivo JavaScript?

2) O que são e para que servem source-maps?