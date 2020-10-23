# Dia 6

## TypeScript

1) O que é o `TypeScript`? No que ele se diferencia do JavaScript?

É um superset, ou seja, uma camada em cima do JavaScript, auxiliando na tipagem e contando com algumas funcionalidades extras. A tipagem em si é um dos principais diferenciais, já que JavaScript, por si só, não é uma linguagem tipada.

2) É possível executar `TypeScript` no navegador?

Não, pois o navegador interpreta apenas HTML, CSS e JS.

3) Quais os pontos positivos de se utilizar `TypeScript` em um projeto? Quais os pontos negativos?

Os positivos são as tipagens e as checagens enquanto desenvolvemos, sem contar os auxílios como _intellisense_ e _autocomplete_. Os negativos são a complexidade, já que utilizar TS vai demandar uma configuração extra e também pode ser algo novo para uma pessoa que não está acostumada além dos possíveis erros não muito claros do compilador.

4) O que é análise estática de código?

Podemos pensar que é uma análise feita em um código em tempo de desenvolvimento, por exemplo, os feedbacks de erro de ferramentas como o compilador do TS (tsc) e o ESLint.

5) Para quê são utilizados os Enums? O que eles geram no código final em JavaScript?

É uma estrutura que atua como um objeto/constante, gerando um objeto no código final mas mantendo a estrutura do código TS com valores humanamente legíveis.
```ts
enum Roles {
    ADMIN,
    USER
}
```

6) O que são Union Types e como utilizá-los?

É um operador que define diferentes valores a serem aplicados em uma tipagem, oferecendo múltiplas escolhas. Utiliza o caracter `|` para encadear possíveis tipos/valores a serem utilizados:
```ts
type Pessoa = {
    name: string;
    age: string | number;
    role: 'user' | 'admin'
}
```

7) O que são Intersection Types e como utilizá-los?

É um operador que une diferentes Type Aliases. Utiliza o caractere `&` para fazer essa união:
```ts
type Pessoa = {
    name: string;
    age: number;
}

type PossuiPets = {
    pets: string[];
}

type PessoaComPets = Pessoa & PossuiPets;
```

8) O que são Type Aliases e como utilizá-los?

Type Aliases é uma forma de construir uma tipagem mais complexa. Utiliza a palavra reservada `type`, seguido de um nome e da tipagem necessária.
```ts
type Pessoa = {
    name: string;
    age: number;
}
```

9) O que são Interfaces e quais suas semelhanças com Type Aliases?

São bem parecidas na questão de criar um tipo mais robusto. Entretanto, Interfaces possuem uma união implícita quando redeclaramos uma interface com o nome de uma já utilizada. Interfaces também são tipagens muito utilizadas quando relacionadas à Orientação à Objetos tradicional.

10) Inicie um projeto com `TypeScript`. Configure-o para fazer compilar os arquivos dentro da pasta `src`. Essa pasta deverá conter um arquivo exemplificando os tipos que aprendemos:
- String
- Number
- Boolean
- Array
- Tuple
- Null e Undefined
- Any
- Unknown
- Void
- Never
- Object
- Function
- Union Types
- Intersection Types
- Type Aliases

## Debugging

1) Para que é utilizada a declaração `debugger;` em um arquivo JavaScript?

Pra criar um `breakpoint` (um ponto de pausa) no código em tempo de execução. Facilitando o trabalho de realizar uma depuração ("debuggar") em um código.

2) O que são e para que servem Source Maps?

São arquivos com extensão `.map` que são carregados ao depurar uma aplicação. Servem como uma "ponte" entre o arquivo minificado (da aplicação) e o código fonte, auxiliando na depuração e nos possibilitando verificar diretamente o código que escrevemos.

## Console

1) Escreva um programa que exibe uma mensagem `iniciando contagem` e começa um contador de tempo. Após isso, esse programa deverá rodar um laço de repetição qualquer indo de 0 até 100 e depois finalizar a contagem, exibindo o tempo total do contador criado.
```js
console.time('contador');
for (let i = 0; i < 100; i++) {
    console.log('executando');
}
console.timeEnd('contador');
```