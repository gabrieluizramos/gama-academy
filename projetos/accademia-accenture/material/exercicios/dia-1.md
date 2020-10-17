## Strings

1) Desenvolva um script que armazene duas variáveis: `nome` e `idade`. Após armazenar essas variáveis o script deverá mostrar a mensagem `Nome de usuário {nome}. Idade {idade}.`. Você deve armazenar a `Nome de usuário {nome}.` e `Idade {idade}.` em duas variáveis diferentes e juntá-las somente na hora de exibir.

2) Desenvolva um script que separe a string `O Rato roeu a roupa do rei de Roma` pelos seus espaços vazios.

3) Complete o script abaixo. Ele deve exibir `true` somente se a categoria da mensagem for `success`, em casos de `warning` ou `error` deve exibir false:
```js
const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

console.log(); // deve exibir true quando verificando mensagem1
console.log(); // deve exibir false quando verificando mensagem2
console.log(); // deve exibir false quando verificando mensagem3
```

## Numbers

1) Complete o script abaixo. Ele deve exibir o valor final em Reais, considerando somente 2 casas decimais.
```js
const valor = 123.456;

console.log(); // Deverá exibir R$123,45
```

2) Escreva um script que utiliza a string `123.456` e exibe:
- Seu número sem as casas decimais;
- Seu número com as casas decimais.

## Arrays

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

2) Troque a string `Qual será o próximo` pra `Chega, já tá bom né`;

3) Remova a string `Chega, já tá bom né` e deixa somente os valores restantes no array.
