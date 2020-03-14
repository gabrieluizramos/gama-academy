# Gama XP 31
## Hackers

Oi, pessoal! Tudo bem?

Espero que tenham curtido nosso bate papo!

Tô enviando as respostas das dúvidas que respondemos hoje pelo [OneAsk](https://join.oneask.ml/e/duvidas-st1-xp31-hacker/5e5ffb12b08cfb561728b3b5).

No fim do arquivo deixei os links que comentei com alguns vídeos e conteúdo para consulta também, ok?

Bons estudos!! 🚀

---

### Perguntas

1 - Qual a diferença entre usar, por exemplo, .onreadystatechange = callback e .addeventlistener(readystatechange, callback) ? Tem alguma diferença de atribuição ?
R: Com os dois você consgue atingir o mesmo resultado.
Porém, atribuir um callback ao atributo .onreadystatechange faz com que você só possa atribuir uma única função, ou seja, caso queira inserir ou remover várias outras funções a serem executadas, você precisará fazer dentro dessa única função (englobando todas as outras), enquanto que, ao utilizar o .addEventListener, você pode atribuir diversas funções separadamentes e removê-las também.

```js
// para atribuir
button.onclick = () => {
  funcao1();
  funcao2();
  funcao3()
};

// caso eu quisesse remover somente a funcao 2, eu teria que reatribuir toda a funcao novamente
button.onclick = () => {
  funcao1();
  funcao3();
};


// com addEventListener fica mais facil tratá-las de forma independente
button.addEventListener('click', funcao1)
button.addEventListener('click', funcao2)
button.addEventListener('click', funcao3)

// e para remover, apenas faira da seguinte maneira
button.removeEventListener('click', funcao2);
```

2 - Por que o this se comporta diferente em arrow functions e em funções "normais" ?
    O que acontece under the hood ?
    Juntando com outra pergunta relacionada ... Por que a arrow function herda o escopo de execução do pai ? Li algo sobre no parseamento do JS, as arrow functions serem jogadas automaticamente no "construtor" da classe e as funções normais não, algo do tipo ...
R: O "this" se comporta diferente por causa da forma como as funções são executadas. As arrow functions vão possuir o "escopo lexico", ou seja, diferente das funções "comuns", não terão o valor de "this" alterado mediante seu contexto de execução (escopo).

3 - Gostaria de entender um pouco melhor o peso dos itens ao usar o Flex: 1 1 100px, o significado e como funciona cada utilização.
R: Isso é uma forma mais "enxuta" ("shorthand") de atribuir outras três regras CSS: flex-grow, flex-shrink e flex-basis.
```css
// isso
flex: 1 1 100px;

// é igual a:
flex-grow: 1;
flex-shrink: 1;
flex-basis: 100px;
```

Mas lembrem-se que vocês podem configurar a largura dos elementos normalmente utilizando `width` mesmo quando estão dentro de um elemento "pai" que possui "display: flex".

4 - No exemplo abaixo o primeiro console.log(this) retorna o objeto example.
    O segundo console.log(this), que está atrelado ao let f2, retorna o objeto window.
    Por que ?
```js

let example = {
    f1: function() {
      console.log(this);
      
      let f2 = function () {
        console.log(this);
      }

      f2();
    } 
}

example.f1();
```

R: Isso ocorre porquê a variável f2 não está atrelada à nenhum objeto no momento que é executada. É o mesmo efeito que declará-la fora do objeto e somente executá-la dentro da outra função. O que aconteceria, nesse caso, é, caso quiséssemos acessar o "this" da função f1, dentro da função f2, precisariamos utilizar as arrow functions, por elas manterem o this "estático".

5 - Não sei se é uma pergunta muito aleatória mas, pensando em performance da aplicação, como funciona a renderização de um site no browser ? O que acontece em cada step (javascript, style, layout, paint e composite)... Pergunto isso porque vi um vídeo do Colt Steele que diz que, se quisermos focar em performance do CSS, deveríamos só usar opacity e transform pra animar os componentes porque eles só são renderizados no composite.
R: Porque as propriedades transform e opacity possuem melhorias e aceleração de GPU, então o navegador não precisa ficar recalculando todos os elementos na tela quando você às altera, é como se ele, em outras palavras, já "soubesse de tudo" que vai acontecer com suas animações.

---

### Links
Alguns links que acho que podem ser bacanas para estudarem:

- [Tyler McGinnis](https://tylermcginnis.com/) ele tem uma serie muito boa de videos
    - [Ultimate guide to execution contexts, hoisting, scopes and closures](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)
    - [var vs let vs const](https://www.youtube.com/watch?v=6vBYfLCE9-Q)
    - [Arrow functions in JavaScript](https://www.youtube.com/watch?v=dB1KA-yz65s)
    - [WTF is THIS: Understanding the "this" keyword in JavaScript](https://www.youtube.com/watch?v=zE9iro4r918)
    - Prototype:
        - [A Beginner's Guide to JavaScript's Prototype](https://www.youtube.com/watch?v=XskMWBXNbp0)
        - [JavaScript Inheritance and the Prototype Chain](https://www.youtube.com/watch?v=MiKdRJc4ooE)

Eu tenho um repositório bem bacana com vários conteúdos que uso pra estudar/consultar: https://github.com/gabrieluizramos/compile-me/ (inclusive esses links do Tyler McGinnis tão por lá também)

Fora isso, se quiserem alguns contatos meus, seguem os links:

Linkedin: https://www.linkedin.com/in/gabrieluizramos/
Github: https://github.com/gabrieluizramos/
Site: https://gabrieluizramos.com.br/
Caso queiram ler algumas das coisas que escrevo, meu blog: https://gabrieluizramos.com.br/blog
Ou acompanhar um pouco do meu trabalho com fotos: https://www.instagram.com/gabrieluizramos/

Fico super à disposição caso precisem de qualquer coisa. É só me chamar! :)