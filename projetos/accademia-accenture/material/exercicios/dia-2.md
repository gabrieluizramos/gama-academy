# Dia 2

## Condicionais e Operadores

1) Dado o array `[1, 2, 3, 4, 5, 6]`, escreva um programa que retorna um novo array, contendo somente os valores pares, nesse caso, deverá retornar `[2, 4, 6]`. Dica: operador de módulo `%` pode ajudar nessa tarefa.

```js
const array = [1, 2, 3, 4, 5, 6];
const pares = array.filter(function (valor) {
    return valor % 2 === 0
});

console.log(pares);
```

2) Escreva um script que exibe uma mensagem customizada dependendo do status de um pedido. Seguindo o exemplo:
```js
const MENSAGEM = 'Qualquer texto';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const SUCCESS = 'success';
const WARNING = 'warning';
const ERROR = 'error';

// exibirá a cor CORES.GREEN se o status for success
// exibirá a cor CORES.YELLOW se o status for warn
// exibirá a cor CORES.RED se o status for error

```
Dica: para customizar o `console.log` basta colocar `%c` no início da mensagem e, como segundo valor, informar alguma regra de CSS. Por exemplo:
```js
console.log('%c Esse texto é customizado', 'background: tomato;');
```

Resolva esse exercício com:
- if/else;

```js
const MENSAGEM = 'Qualquer texto';
const STATUS = 'success';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const SUCCESS = 'success';
const WARNING = 'warning';
const ERROR = 'error';

let color;
if (STATUS === SUCCESS) {
    color = CORES.GREEN;
} else if (STATUS === WARNING) {
    color = CORES.YELLOW;
} else if (STATUS === ERROR) {
    color = CORES.RED;
}

console.log('%c' + MENSAGEM, 'background: ' + color);
```

- switch/case.

```js
const MENSAGEM = 'Qualquer texto';
const STATUS = 'success';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const SUCCESS = 'success';
const WARNING = 'warning';
const ERROR = 'error';

let color;

switch (STATUS) {
    case SUCCESS:
        color = CORES.GREEN;
        break;
    case WARNING:
        color = CORES.YELLOW;
        break;
    case ERROR:
        color = CORES.RED;
        break;
}

console.log('%c' + MENSAGEM, 'background: ' + color);
```

3) Utilizando somente if/else, escreva um programa que, à partir de uma string como `[success] qualquer texto`, tem o seguinte comportamento:
- Imprime no console `tudo certo` e o status for `success` ou `warning`;
- Imprime `errow` no console, caso seja `error`;
- Imprime `status inválido` caso não seja nenhum dos status acima.

```js
const string = '[success] qualquer texto';

if (string.startsWith('[success]') || string.startsWith('[warning]')) {
    console.log('tudo certo');
} else if (string.startsWith('[error]')) {
    console.log('errow')
} else {
    console.log('status invalido')
}
```

## Laços de Repetição

1) Escreva um script que lista todos os dados do array `['Lora', 'Logan', 'LeBeau']`.
- Utilizando `while`;

```js
const gatos =['Lora', 'Logan', 'LeBeau'];

let contaGato = 0;

while (contaGato < gatos.length) {
    console.log(gatos[contaGato]);
    contaGato = contaGato + 1;
    // contaGato += 1;
    // contaGato++;
}
```

- Utilizando `for`.

```js
const gatos = ['Lora', 'Logan', 'LeBeau'];

for (let contaGato = 0; contaGato < gatos.length; contaGato++) {
    console.log(gatos[contaGato]);
}
```

2) Escreva um script que perturbe o usuário e fique mostrando o alerta com a mensagem `Clique em ok!` até que o usuário clique em `ok`. Você deverá usar `do/while` e o comando `confirm`, que abrirá no navegador um alerta para o usuário confirmar.

```js
while(!confirm('Clique em ok!')) {}
// ou
do {} while(!confirm('Clique em ok!'))
```

## Funções

1) Desenvolva uma função que recebe `nome` e `idade` e retorna a mensagem `Nome de usuário {nome}. Idade {idade}.`
```js
function boasVindas (nome, idade) {
    const mensagem = `Nome de usuário {nome}. Idade {idade}.`;
    return mensagem.replace('{nome}', nome).replace('{idade}', idade);
}

// var boasVindas = function boasVindas (nome, idade) {
//     const mensagem = `Nome de usuário {nome}. Idade {idade}.`;
//     return mensagem.replace('{nome}', nome).replace('{idade}', idade);
// }

// var boasVindas = (nome, idade) => {
//     const mensagem = `Nome de usuário {nome}. Idade {idade}.`;
//     return mensagem.replace('{nome}', nome).replace('{idade}', idade);
// }

// var boasVindas = (nome, idade) => `Nome de usuário {nome}. Idade {idade}`.replace('{nome}', nome).replace('{idade}', idade);

console.log(boasVindas('Gabriel', 24));
```

2) Refaça o exercício número `1` do tópico `Arrays` utilizando `Arrow Functions`.
```js
const array = [1, 2, 3, 4, 5];

const arrayNovoComForeach = [];
array.forEach(valor => {
    arrayNovoComForeach.push(valor + 1)
});
console.log(arrayNovoComForeach);

const arrayNovoComMap = array.map(valor => valor + 1);
console.log(arrayNovoComMap);
```

3) O seguinte código irá disparar um erro `onClick is not a function`. Como você o corrigiria?
```js
function principal(onClick) {
    const argumentos = { 
        mensagem: 'oi'
    };

    if (typeof onClick === 'function') {
        onClick(argumentos)
    }
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

```js
function Pessoa (nome, gatos) {
    this.nome = nome;
    this.gatos = gatos;
    this.exibeGatos = function () {
        this.gatos.forEach(gato => {
            console.log(gato)
        })
    }
}

const pessoa = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau']);
```

2) Crie uma classe que recebe `nome` e `gatos` como parâmetro e cria o objeto com a estrutura acima.
```js
class Pessoa {
    constructor (nome, gatos) {
        this.nome = nome;
        this.gatos = gatos;
    }

    exibeGatos() {
        this.gatos.forEach(gato => {
            console.log(gato)
        })
    }
}

const pessoa = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau']);
```

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

```js
const nome = 'Gabriel';
const idade = 24;
const gatos = [
    'Loga',
    'Logan',
    'LeBeau'
];

for (let i = 0; i < gatos.length; i++) {
    console.log(gatos[i]);
}
    
console.log('Execução finalizada');
console.log('Obrigado por participar');
```

2) Como podemos abstrair o seguinte código para aplicar _DRY_ de forma coerente?
```js
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [8, 9, 10, 11];

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

```js
const somaArray = (array, somatoria) => array.map((valor) => valor + somatoria);

const exibeArrays = (array, novoArray) => {
    console.log('Array inicial', array);
    console.log('Array novo', novoArray);
};

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [8, 9, 10, 11];

const novoArr1 = somaArray(array, 1);
const novoArr2 = somaArray(array, 2);
const novoArr3 = somaArray(array, 3);

exibeArrays(arr1, novoArr1);
exibeArrays(arr2, novoArr2);
exibeArrays(arr3, novoArr3);
```

## Template Strings

1) Adapte o exercício 1 do tópico `Funções` para utilizar template strings ao invés de concatenar as variáveis nas strings.
```js
const boasVindas = (nome, idade) => `Nome de usuário ${nome}. Idade ${idade}.`;

console.log(boasVindas('Gabriel', 24));
```

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
