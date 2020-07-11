# XP 34
## Hackers

Oi, pessoal! Como estão?

Espero que tenham curtido nossa manhã e espero ter ajudado um pouquinho vocês nesse processo todo. Foi muito bacana poder participar e trocar ideias com vocês!

Essa página contém as respostas das perguntas que vocês fizeram pelo [OneAsk](https://oneask.app/e/xp34x-treinamento1-hacker/5eeccfa3d46eb9b2dac8e590) caso precisem consultar.

Se precisarem entrar em contato comigo:

- Meu usuário em todas as redes sociais é `@gabrieluizramos` e no [meu site](http://gabrieluizramos.com.br/) estão todos os meus links
- Podem me adicionar no [LinkedIn](https://www.linkedin.com/in/gabrieluizramos/) também

Bons estudos! Se precisarem é só chamar!! 🚀

---

1) Poderia compartilhar sites, dicas para treinar js?

- [freecodecamp](https://www.freecodecamp.org/)
- [codecademy](https://www.codecademy.com/)
- [hackerrank](https://www.hackerrank.com/)

Fora isso, alguns blogs, livros e pessoas que eu curto e gosto de acompanhar:
- [Willian Justen](https://willianjusten.com.br/)
- [Vedovelli](https://blog.vedovelli.com.br/)
- [Flavio Copes](https://flaviocopes.com/)
- [Kent C. Dodds](https://kentcdodds.com/)
- [Eric Elliot](https://twitter.com/_ericelliott)
- [Valentino Gagliardi](https://twitter.com/gagliardi_vale) e seu livro [The Little JavaScript Book](https://leanpub.com/little-javascript/)
- Comentamos também do livro [Eloquente JavaScript](https://github.com/braziljs/eloquente-javascript), [Cangaceiro JavaScript](http://cangaceirojavascript.com.br/) e dos livros da [Casa do Código](https://www.casadocodigo.com.br/) em geral.


Se quiserem, vocês podem ler [meus posts](https://gabrieluizramos.com.br/) também!

---

2) quando eu uso var e quando eu uso let?

R: Como vimos ao longo do nosso bate-papo, temos alguns detalhes de escopo e de atribuição quando utilizamos `var`. Eu costumo utilizar `const` sempre que possível. Se eu preciso reatribuir um valor para uma variável em determinado ponto, utilizo `let` (já que `const` não permite reatribuir um valor mas no cenário de array/objetos é possível modificar os valores já existentes) e faz um tempo que não utilizo mais `var` por questões de padronização e melhorias da linguagem e ferramentas de trabalho.

---

3) Quais são as boas práticas para deixar o código mais enxuto e economizar memória? Quando aplicar essas práticas?

R: Existem várias, desde a simples organização de código em pequenos pedaços e funções (`arrow functions` ajudam bastante nesses cenários).

---

4) Sobre estrutura de repetição, sabemos que, for: sei qual é o range, while: não sei o range. Achei confuso a utilização do for dentro de um while, poderia compartilhar outros exemplos?

R: Acho difícil pensar em um cenário onde você precise utilizar os dois juntos, não é muito comum. Eu gosto de pensar que são estruturas de repetição parecidas que resolvem problemas de formas diferentes: no caso do `for`, precisamos de uma variável que serve como contador, no caso do `while` (e do `do...while`) precisamos apenas de uma condição. São duas ferramentas para resolver as nossas necessidades de laços de repetição.

---

5) pode explicar melhor sobre operador ternario?

R: Podemos pensar no ternário como uma estrutura de `if/else`, só que reduzida. Ele funciona da seguinte maneira: `condicao ? execucao_se_verdadeiro : execucao_se_falso`. Ou seja, você deve informar uma condição (como no if!) e logo depois inserir uma interrogação `?`. Depois disso teremos a nossa execução de código se essa condição for verdadeira e, para uma execução onde a condição é falsa, utilizamos dois pontos `:` e escrevemos o código desejado. Vale lembrar que o ternário já retorna esse valor por padrão.

Se quiser, pode testar o código abaixo:
```js
const valor = 1;
const mensagem = valor === 1 ? 'É um!' : 'Não é';

console.log(mensagem); // 'É um!'
```

---

6) Sempre que eu vir em um código algo no estilo que vimos na aula (soma % 11) < 2 ? 0 : 11 - (soma % 11) com essa interrogação e dois pontos significa como se fosse um "if true" e deve executar a ação seguinte?

R: Exatamente! Essa interrogação é justamente parte da nossa estrutura do ternário.

---

7) Porque não é recomendado usar o break?

R: O `break` é uma declaração que faz com que algum código seja interrompido. Não é que não devemos utilizar, mas devemos saber quando utilizar da forma correta. No cenário onde estamos com laços de repetição, utilizar o `break` faz com que o laço seja interrompido, ou seja, se não queremos rodar um laço até o fim, talvez pudéssemos ter executado outro método, certo? Mas em casos em que utilizamos `switch/case` utilizar `break` (ou `return`) é necessário para que possamos interromper a execução do nosso `switch` ao encontrar o valor desejado.

Se quiser, teste a função abaixo:

```js
function switchSemBreak(valor) {
    switch(valor) {
        case 1:
            console.log('é um');
        case 2:
            console.log('é dois');
        default:
            console.log('default');
    }
}

switchSemBreak(1);

function switchComBreak(valor) {
    switch(valor) {
        case 1:
            console.log('é um');
            break;
        case 2:
            console.log('é dois');
            break;
        default:
            console.log('default');
            break;
    }
}

switchComBreak(1);
```

Você verá que a função `switchSemBreak` irá executar todos os `case` do `switch`, o que já não ocorre na função `switchComBreak`, que executa só o trecho de código que desejamos.

---

8) Quando se deve utilizar o return?

R: Sempre que queremos interromper a execução de uma função (no caso acima, podemos substituir o `break` por `return`) ou retornar algum valor de uma função para ser tratado em outro ponto do nosso código.

Se quiser, acompanhe o exemplo abaixo e teste no seu navegador:

```js
// retorna o dia da semana diretamente
const pegaDiaDaSemana = data => data.toLocaleString('pt-BR', { weekday: 'long' });

const formataData = data => {
    const mensagemInicial = 'Olá! Hoje é';

    // retorna mensagem customizada
    return `${mensagemInicial}: ${pegaDiaDaSemana(data)}`
};

// mostra mensagem no console
console.log(formataData(new Date()))
```

---

9) O que eu posso fazer tanto com JavaScript? quais são meus limites?

R: Não tem bem um limite para o que podemos fazer. Podemos utilizar JS para implementar o que quisermos no navegador ou no servidor.
