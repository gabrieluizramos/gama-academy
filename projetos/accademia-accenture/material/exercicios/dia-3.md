## Desestruturação

1) Atualize as funções de validação abaixo para utilizar desestruturação nos seus parâmetros de `input`:
```js
const validaQuantidade = (input, minimo = 6) => {
    const ehValido = input.value.trim().length >= minimo;

    if (!ehValido) {
        return 'O campo '+ input.name + ' deve conter no mínimo ' + minimo  + ' caracteres';
    }
}

const validaEmail = (input) => {
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const ehValido = regexp.test(input.value);

    if (!ehValido) {
        return 'O campo ' + input.name + ' não é válido';
    }
}
```

2) Extra: antigamente, alguns exercícios de lógica pediam para trocar os valores da variável `a` e da variável `b`. Da seguinte forma:
```js
let a = 1;
let b = 2;
let auxiliar;

aux = b;
b = a;
a = aux;

console.log(`a = ${a}, b = ${b}`);
```

Como podemos fazer isso sem criar a variável `aux`, somente utilizando desestruturação?

## Spread/Rest

1) Spread/Rest são muito parecidos, já que utilizam os mesmo caracteres. Cite uma diferença entre eles.

2) Como aplicar Rest para receber qualquer quantidade de parâmetro na função abaixo?
```js
const funcao = (a, b) => {
    console.log(a);
    console.log(b);
};

funcao(1, 2, 3, 4, 5, 6)
```

3) Como unir os dois objetos abaixo em um novo objeto, usando Spread?
```js
const usuario = {
    email: 'um@email.com.br',
    senha: 'senha-super-secreta'
};

const detalhes = {
    nome: 'Um nome',
    sobrenome: 'Qualquer',
    bio: 'Uma pessoa qualquer',
};
```

## Callbacks

1) Em teoria, o que são callbacks?

2) Como adaptar a função abaixo para receber um callback que será executado com o resultado da operação ao invés de fazer um `console.log`?
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

## Debugging

1) Para que é utilizada a declaração `debugger;` em um arquivo JavaScript?

2) O que são e para que servem source-maps?

## Single Page Applications

1) O que é uma SPA?

2) Qual a principal diferença de uma SPA para uma aplicação mais "tradicional"? Como elas trafegam dados entre o cliente e o servidor?