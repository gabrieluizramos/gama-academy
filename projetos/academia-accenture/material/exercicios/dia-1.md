## Introdução ao JavaScript

### Strings

1) Desenvolva um script que armazene duas variáveis: `nome` e `idade`. Após armazenar essas variáveis o script deverá mostrar a mensagem `Nome de usuário {nome}. Idade {idade}.`. Você deve armazenar a `Nome de usuário {nome}.` e `Idade {idade}.` em duas variáveis diferentes e juntá-las somente na hora de exibir.

2) Desenvolva um script que separe a string `O Rato roeu a roupa do rei de Roma` pelos seus espaços vazios.

3) Complete o script abaixo. Ele deve exibir `true` somente se a categoria da mensagem fro `success`, em casos de `warning` ou `error` deve exibir false:
```js
const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

console.log(); // deve exibir true quando verificando mensagem1
console.log(); // deve exibir false quando verificando mensagem2
console.log(); // deve exibir false quando verificando mensagem3
```

### Numbers

1) Complete o script abaixo. Ele deve exibir o valor final em Reais, considerando somente 2 casas decimais.
```js
const valor = 123.456;

console.log(); // Deverá exibir R$123,45
```

2) Escreva um script que utiliza a string `123.456` e exibe:
- Seu número sem as casas decimais;
- Seu número com as casas decimais.

### Arrays

1) Escreva um programa que, dado o array `[1, 2, 3, 4, 5]` deverá exibir: `[2, 3, 4, 5, 6]`.
- Utilizando forEach;
- Utilizando map.

2) Escreva um programa que, dado o array `[1, 2, 3, 4, 5]` deverá retornar somente o número `3`.

3) Escreva um programa que, dado o array `[1, 2, 3, 4, 5]` deverá retornar a soma dos itens desse array, totalizando `15`.
- Utilizando forEach;
- Utilizando map.

4) Escreva um programa que inverte uma palavra, ou seja, `javascript` deverá se tornar `tpircsavaj`.

5) Dado o array `[1, 2, 3, 4, 5]`, escreva um programa que retorna um novo array, contendo o primeiro e o último item

6) Dado o seguinte array:
```js
const messages = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
]
```
Escreva um script que retorna `['success', 'warning', 'error']`.

7) Dado o array `['Lora', 'Logan', 'LeBeau', 'Outro']` escreva um programa que retorna um array com todos os nomes que iniciam com `L`.

### Objetos

Dado o seguinte objeto:
```js
const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
        'Qual será o próximo?'
    ]
};
```

1) Exiba suas chaves;

2) Troca a string `Qual será o próximo` pra `Chega, já tá bom né`;

3) Remove a string `Chega, já tá bom né` e deixa somente os valores restantes no array.


### Condicionais e Operadores

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

### Laços de Repetição

1) Escreva um script que lista todos os dados do array `['Lora', 'Logan', 'LeBeau']`.
- Utilizando `while`;
- Utilizando `for`.

2) Escreva um script que perturbe o usuário e fique mostrando o alerta com a mensagem `Clique em ok!` até que o usuário clique em `ok`. Você deverá usar `do/while` e o comando `confirm`, que abrirá no navegador um alerta para o usuário confirmar.

### Funções

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

### Funções Construtoras e Classes

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


### Console

1) Escreva um programa que exibe uma mensagem `iniciando contagem` e começa um contador de tempo. Após isso, esse programa deverá rodar um laço de repetição qualquer indo de 0 até 100 e depois finalizar a contagem, exibindo o tempo total do contador de tempo.

### Boas práticas e DRY

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