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

1) Crie uma função chamada `meuFetch` que utiliza `XHR` e aplica uma `Promise` simulando a função `fetch` que usamos anteriormente.
```js
function meuFetch(url) {
    const XHR = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        try {
            XHR.onload = function () {
                resolve(this.response);
            };
            XHR.responseType = 'json';
            XHR.open("GET", url);
            XHR.send();
        } catch (err) {
            reject(err);
        }
    });
}

meuFetch('https://jsonplaceholder.typicode.com/users')
.then(console.log)
```

2) Utilizando Fetch, faça uma chamada para a API `https://jsonplaceholder.typicode.com/users` e liste todos os usuários no console.
- Realizando as tratativas para caso de erro;
- Depois, adapte o código para utilizar Async/Await.

```js
const URL = 'https://jsonplaceholder.typicode.com/users'

// Promise Thenable
fetch(URL)
.then(response => response.json())
.then(console.log);

// Async/Await
async function main() {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
}
main();
```

3) Qual a diferença entre utilizar Promise de maneira `thenable` (com `.then`) ou com `async/await`?

Apenas a sintaxe e a maneira de leitura. Na maneira `thenable` precisamos ficar encadeando diversos callbacks para execução em etapas da `Promise`. Isso ocorre com `async/await`, entretanto, criamos diretamente variáveis no código e a forma de ler acaba sendo mais estruturada.

4) Qual a diferença dos estados de uma Promise (`pending`, `fulfilled` e `rejected`)? O que faz uma Promise mudar seu estado?

`Pending` é o estado inicial de uma `Promise` construída, antes de ser resolvida com sucesso ou com falha. `Fulfilled` é o estado de uma `Promise` resolvida com sucesso e `Rejected` com erro. Ao utilizar `resolve` ou `reject` (os parâmetros recebidos na função de callback fornecida na criação da `Promise`) com os dados de sucesso ou erro podemos alterar seu estado.
