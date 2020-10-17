# Dia 1

## Strings

1) Desenvolva um script que armazene duas variáveis: `nome` e `idade`. Após armazenar essas variáveis o script deverá mostrar a mensagem `Nome de usuário {nome}. Idade {idade}.`. Você deve armazenar a `Nome de usuário {nome}.` e `Idade {idade}.` em duas variáveis diferentes e juntá-las somente na hora de exibir.

```js
const nome = 'Gabriel';
const idade = 24;

const mensagemNome = 'Nome de usuário {nome}.';
const mensagemIdade = 'Idade {idade}.';

const mensagemNomeFormatada = mensagemNome.replace('{nome}', nome);
const mensagemIdadeFormatada = mensagemIdade.replace('{idade}', idade);

const mensagemFinal = mensagemNomeFormatada + ' ' + mensagemIdadeFormatada;

console.log(mensagemFinal);
```

2) Desenvolva um script que separe a string `O Rato roeu a roupa do rei de Roma` pelos seus espaços vazios.

```js
const texto = 'O Rato roeu a roupa do rei de Roma';
const textoSeparado = texto.split(' ');

console.log(textoSeparado);
```

3) Complete o script abaixo. Ele deve exibir `true` somente se a categoria da mensagem for `success`, em casos de `warning` ou `error` deve exibir `false`:

```js
const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

const tipoDaMensagem = '[success]';

console.log(mensagem1.startsWith(tipoDaMensagem)); // deve exibir true quando verificando mensagem1
console.log(mensagem2.startsWith(tipoDaMensagem)); // deve exibir false quando verificando mensagem2
console.log(mensagem3.startsWith(tipoDaMensagem)); // deve exibir false quando verificando mensagem3
```

## Numbers

1) Complete o script abaixo. Ele deve exibir o valor final em Reais, considerando somente 2 casas decimais.

```js
const valor = 123.456;

const prefixo = 'R$';
const numeroFormatado = valor.toFixed(2).replace('.', ',');

const valorEmReais = prefixo + numeroFormatado;

console.log(valorEmReais); // Deverá exibir R$123,45
```

2) Escreva um script que utiliza a string `123.456` e exibe:
- Seu número sem as casas decimais;
- Seu número com as casas decimais.

```js
const numero = '123.456';

const numeroComCasasDecimais = parseFloat(numero); // ou Number
const numeroSemCasasDecimais = parseInt(numero);

console.log(numeroComCasasDecimais);
console.log(numeroSemCasasDecimais);
```

## Arrays

1) Escreva um programa que, dado o array `[1, 2, 3, 4, 5]` deverá exibir: `[2, 3, 4, 5, 6]`.
- Utilizando forEach;
- Utilizando map.

```js
const array = [1, 2, 3, 4, 5];

const arrayNovoComForeach = [];
array.forEach(function (valor) {
    arrayNovoComForeach.push(valor + 1)
});
console.log(arrayNovoComForeach);

const arrayNovoComMap = array.map(function (valor) {
    return valor + 1;
});
console.log(arrayNovoComMap);
```

2) Escreva um programa que, dado o array `[1, 2, 3, 4, 5]` deverá retornar somente o número `3`.

```js
const array = [1, 2, 3, 4, 5];

const comFind = array.find(function (valor) {
    console.log(valor);
    return valor == 3;
});
// const comFilter = array.filter(function (valor) {
//     console.log(valor);
//     return valor == 3;
// });

console.log(comFind);
// console.log(comFilter);
```

3) Escreva um programa que, dado o array `[1, 2, 3, 4, 5]` deverá retornar a soma dos itens desse array, totalizando `15`.
- Utilizando forEach;
- Utilizando reduce.

```js
const array = [1, 2, 3, 4, 5];

let somaComForeach = 0;
array.forEach(function (valor) {
    somaComForeach = somaComForeach + valor;
});
console.log(somaComForeach);

const somaComReduce = array.reduce(function (acumulador, atual) {
    return acumulador + atual;
});
console.log(somaComReduce);
```

4) Escreva um programa que inverte uma palavra, ou seja, `javascript` deverá se tornar `tpircsavaj`.
```js
const texto = 'javascript';

const textoInvertido = texto.split('').reverse().join('');

console.log(textoInvertido);
```

5) Dado o array `[1, 2, 3, 4, 5]`, escreva um programa que exibe um novo array, contendo o primeiro e o último item
```js
const array = [1, 2, 3, 4, 5];
const novoArray = [
    array[0],
    array[array.length - 1]
];

console.log(novoArray);
```

6) Dado o seguinte array:

```js
const mensagens = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
]
```
Escreva um script que retorna `['success', 'warning', 'error']`.

```js
const mensagens = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
];

const mensagensFormatadas = mensagens.map(function (mensagem) {
    const status = mensagem.split(' ')[0];
    const statusFormatado = status.replace('[', '').replace(']', '');
    
    return statusFormatado;
});

console.log(mensagensFormatadas);
```

7) Dado o array `['Lora', 'Logan', 'LeBeau', 'Outro']` escreva um programa que retorna um array com todos os nomes que iniciam com `L`.

```js
const array = ['Lora', 'Logan', 'LeBeau', 'Outro'];

const arrayFiltrado = array.filter(function (nome) {
    return nome.startsWith('L');
});

console.log(arrayFiltrado);
```

## Objetos

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

```js
console.log(Object.keys(pessoa));
```

2) Troque a string `Qual será o próximo` pra `Chega, já tá bom né`;

```js
pessoa.gatos[pessoa.gatos.length - 1] = 'Chega, já tá bom né';
console.log(pessoa);
```

3) Remova a string `Chega, já tá bom né` e deixa somente os valores restantes no array.

```js
pessoa.gatos.pop();
console.log(pessoa);
```
