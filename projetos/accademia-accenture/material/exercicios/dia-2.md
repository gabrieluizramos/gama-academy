## Condicionais e Operadores

1) Dado o array `[1, 2, 3, 4, 5, 6]`, escreva um programa que retorna um novo array, contendo somente os valores pares, nesse caso, deverá retornar `[2, 4, 6]`. Dica: operador de módulo `%` pode ajudar nessa tarefa.

2) Escreva um script que exibe uma mensagem customizada dependendo do status de um pedido. Seguindo o exemplo:
```js
const MENSAGEM = 'Qualquer texto';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const status1 = 'success';
const status2 = 'warning';
const status3 = 'error';

// exibirá a cor CORES.GREEN se o status for success
// exibirá a cor CORES.YELLOW se o status for warn
// exibirá a cor CORES.RED se o status for error

```
Dica: para customizar o `console.log` basta colocar `%c` no início da mensagem e, como segundo valor, informar alguma regra de CSS. Por exemplo:
```js
console.log('%c Esse texto é customizado', 'background: tomato;')
```

Resolva esse exercício com:
- if/else;
- switch/case.

3) Utilizando somente if/else, escreva um programa que, à partir de uma string como `[success] qualquer texto`, tem o seguinte comportamento:
- Imprime no console `tudo certo` e o status for `success` ou `warning`;
- Imprime `errow` no console, caso seja `error`;
- Imprime `status inválido` caso não seja nenhum dos status acima.

## Laços de Repetição

1) Escreva um script que lista todos os dados do array `['Lora', 'Logan', 'LeBeau']`.
- Utilizando `while`;
- Utilizando `for`.

2) Escreva um script que perturbe o usuário e fique mostrando o alerta com a mensagem `Clique em ok!` até que o usuário clique em `ok`. Você deverá usar `do/while` e o comando `confirm`, que abrirá no navegador um alerta para o usuário confirmar.

## Funções

1) Desenvolva uma função que recebe `nome` e `idade` e retorna a mensagem `Nome de usuário {nome}. Idade {idade}.`

2) Refaça o exercício número `1` do tópico `Arrays` utilizando `Arrow Functions`.

3) O seguinte código irá disparar um erro `onClick is not a function`. Como você o corrigiria?
```js
function principal(onClick) {
    const argumentos = { 
        mensagem: 'oi'
    };
    onClick(argumentos)
}

principal(null)
```

## Funções Construtoras e Classes

Seguindo o objeto:
```js
const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
    ]
};


pessoa.exibeGatos() // deverá imprimir no console 'Lora', 'Logan' e 'LeBeau'
```

1) Crie uma função construtora que recebe `nome` e `gatos` como parâmetro e cria o objeto com a estrutura acima.

2) Crie uma classe que recebe `nome` e `gatos` como parâmetro e cria o objeto com a estrutura acima.


## Console

1) Escreva um programa que exibe uma mensagem `iniciando contagem` e começa um contador de tempo. Após isso, esse programa deverá rodar um laço de repetição qualquer indo de 0 até 100 e depois finalizar a contagem, exibindo o tempo total do contador de tempo.

## Boas práticas e DRY

1) Organize o código abaixo para manter uma melhor consistência, como preferir:
```js
const nome  = "Gabriel";
let age =    24
var gatos = [
    'Loga',
    "Logan", 'LeBeau']

    for (let i = 0; i < gatos.length; i++   ) {
        console.log(gatos[  i])
    
    
    
    }
    
console.log("Execução finalizada");
console.log('Obrigado por participar');
```

2) Como podemos abstrair o seguinte código para aplicar _DRY_ de forma coerente?
```js
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [5, 6, 7, 8];

const novoArr1 = arr1.map(function (valor) {
    return valor + 1;
});

const novoArr2 = arr2.map(function (valor) {
    return valor + 2;
});

const novoArr3 = arr3.map(function (valor) {
    return valor + 3;
});

console.log('Array inicial', arr1);
console.log('Array novo', novoArr1);
console.log('Array inicial', arr2);
console.log('Array novo', novoArr2);
console.log('Array inicial', arr3);
console.log('Array novo', novoArr3);
```

---


## Formulários

1) Na tag form abaixo, complete o código para conter:
- 1 input do tipo texto;
- 1 input do tipo senha;
- 1 input do tipo email;

Todos os inputs devem possuir seus devidos placeholders.
```html
<form>
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
        name: 'username',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '123456'
    },
    {
        type: 'email',
        name: 'usuario',
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
        name: 'E-mail',
        value: 'abc@1234'
    }
])
```

4) Após finalizar essa função, vamos atribuí-la ao formulário criado.

## Template Strings

1) Adapte a função de validação anterior para utilizar template strings ao invés de concatenar as variáveis nas strings.

## Ternário, && e ||

1) Ajuste o código abaixo para utilizar ternário:
```js
let status = 'success';

let message = '';

if (status === 'success') {
    message = 'Usuário criado com sucesso';
} else if (status === 'warning') {
    message = 'Usuário cadastrado, mas tivemos algum problema';
} else if (status === 'error') {
    message = 'Ocorreu um erro ao cadastrar';
}

console.log(message);
```

2) Aproveite o ajuste acima e extraia o ternário para uma função que recebe o status retorna a mensagem. Caso ela não retorne nada, exiba a mensagem `Sem status'`.

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
