# Dia 4

## Callbacks

1) Em teoria, o que são callbacks?
São funções executadas em um momento futuro, geralmente ligadas à código assíncrono.

2) Como adaptar a função abaixo para receber um callback que será executado com o resultado da operação ao invés de fazer um `alert`?
```js
const computacaoMuitoCustosa = (callback) => {
    const superCalculo = 1 + 2;
    callback(superCalculo);
}

computacaoMuitoCustosa(resultado => alert('resultado', resultado));
```

## Métodos HTTP

1) Resuma os métodos HTTP:
- GET: para consulta de registros
- POST: para criação de registros
- PUT: para atualizar um registro de forma inteira
- DELETE: para remover um registro
- PATCH: para atualizar um registro de forma parcial

2) O que são e para que servem os Status Codes em HTTP?
Dar visibilidade à um cliente sobre o estado de uma operação utilizando um código padronizado.

## Comunicações AJAX

1) Faça uma chamada para a API `https://jsonplaceholder.typicode.com/users` e liste todos os usuários no console:
- Utilizando XHR (**dica**: utilize a função `JSON.parse` para converter os dados de um texto para objeto JavaScript);
- Utilizando Fetch.

```js
const URL = 'https://jsonplaceholder.typicode.com/users';

// Com XHR
const XHR = new XMLHttpRequest();
XHR.onload = function () {
    console.log(this.response);
};
XHR.responseType = 'json'; // ou convertendo com JSON.parse o this.responseText
XHR.open("GET", URL);
XHR.send();

// Com fetch
fetch(URL)
.then(response => response.json())
.then(console.log);
```

## Promises

1) Converta a chamada HTTP usando `XHR` do exercício anterior para Promise, chamada `meuFetch`, simulando o fetch que usamos no exercício anterior.

2) Utilizando Fetch, faça uma chamada para a API `https://jsonplaceholder.typicode.com/users` e liste todos os usuários no console.
- Realizando as tratativas para caso de erro;
- Depois, adapte o código para utilizar Async/Await.

3) Qual a diferença entre utilizar Promise de maneira `thenable` (com `.then`) ou com `async/await`?

4) Qual a diferença dos estados de uma Promise (`pending`, `fulfilled` e `rejected`)? O que faz uma Promise mudar seu estado?
