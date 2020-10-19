# Dia 3

## Formulários

1) Na tag form abaixo, complete o código para conter:
- 1 input do tipo texto;
- 1 input do tipo email;
- 1 input do tipo senha.

Todos os inputs devem possuir seus devidos placeholders.
```html
<form name="cadastro">
    <input type="text" name="usuario" placeholder="Digite seu nome de usuário">
    <input type="email" name="email" placeholder="seu@email.com">
    <input type="password" name="senha" placeholder="Sua senha super secreta">
</form>
```

## Eventos

1) Quando se é preferível atribuir eventos através de `addEventListener` e quando se deve utilizar os atributos como `onclick`?

2) Na estrutura HTML que foi criada acima. Atribua um evento para que, ao disparar o formulário, a página não seja recarregada e exiba todos os dados informados no console.

3) Vamos criar uma validação para esse formulário! Crie um objeto chamado `validacoes` que deverá conter como `chave` os tipos dos campos que criamos anteriormente (`text`, `email` e `password`). Para cada uma dessas chaves, conterá como `valor` um array onde conterá algumas funções de validação já pre-estabelecidas, criadas abaixo. Após isso crie uma função `validaFormulario` que receberá um parâmetro `campos`. Esse parâmetro deverá ser um array contendo cada um dos campos do formulário criado.


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


// Todos os campos devem aplicar a função validaQuantidade como validação
// O campo email, deve aplicar também a função validaEmail
const validacoes = {
    // preencha o objeto com as validações  
};

const validaFormulario = (inputs) => {
    // crie a função de validação
    // ela deverá, para cada campo do objeto inputs
    // executar suas devidas validações e mostre no console as validações após sua execução
};

// não deverá exibir erro
validaFormulario([
    {
        type: 'text',
        name: 'usuario',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '123456'
    },
    {
        type: 'email',
        name: 'email',
        value: 'abc@1234.com.br'
    }
]);

// deverá exibir erro em password e email
validaFormulario([
    {
        type: 'text',
        name: 'usuario',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '1234'
    },
    {
        type: 'email',
        name: 'email',
        value: 'abc@1234'
    }
])
```

4) Após finalizar essa função, vamos atribuí-la ao formulário criado.

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