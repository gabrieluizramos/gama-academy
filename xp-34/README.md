# XP 34
## Hackers

Oi, pessoal! Como estão?

Espero que tenham curtido nossas manhãs e espero ter ajudado um pouquinho vocês nesse processo todo. Foi muito bacana poder participar e trocar ideias com vocês!

Essa página contém as perguntas feitas pelo OneAsk nos dois dias que batemos um papo.

Se precisarem entrar em contato comigo:

- Meu usuário em todas as redes sociais é `@gabrieluizramos` e no [meu site](http://gabrieluizramos.com.br/) estão todos os meus links
- Podem me adicionar no [LinkedIn](https://www.linkedin.com/in/gabrieluizramos/) também

Bons estudos! Se precisarem é só chamar!! 🚀


### Dia 1

Essa página contém as respostas das perguntas que vocês fizeram pelo [OneAsk](https://oneask.app/e/xp34x-treinamento1-hacker/5eeccfa3d46eb9b2dac8e590).

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

---

### Dia 2
Perguntas feitas através do [OneAsk da turma X](https://oneask.app/e/xp34x-treinamento1-hacker/5eeccfa3d46eb9b2dac8e590) e do [OneAsk da turma P](https://oneask.app/e/xp34p-treinamento1-hacker/5eecd52bd46eb99382c8e599).

#### Turma X

---

1) quando eu devo utilizar react para construir um site ao inves de html e css?

R: Pra responder a essa pergunta, precisamos levar em consideração alguns pontos. Geralmente essas ferramentas, bibliotecas e frameworks (React, Vue, Angular) abstraem e facilitam algumas coisas pra gente, como gerenciamento de estado, manipulação do DOM, trazem uma padronização aos nossos componentes e pra nossa interface em geral.

No fim, tudo é HTML, CSS e JS, a diferença é que esses frameworks trabalham justamente com abstrações diferentes e caem como uma luva em cenários onde você tem diversas pessoas trabalhando em uma mesma aplicação (ou em diversas aplicações diferentes). Fica muito mais fácil de manter uma consistência entre sua equipe e seu código em geral, principalmente conforme sua aplicação cresce.

Para um projeto ou algo simples, utilizar alguma dessas ferramentas pode ser um trabalho e uma complexidade extra mas, dependendo da necessidade do seu projeto, essa complexidade acaba trazendo diversos outros ganhos.

---

2) pode explicar melhor sobre o metodo append child?

R: Ele basicamente serve para inserir um novo elemento filho (por isso "append child"), em um elemento já existente no DOM.

O trecho de código abaixo cria dois elementos (`p` e `span`) e insere eles em um body em uma página. Se quiser, pode testar:

```js
const p = document.createElement('p');
p.textContent = 'Parágrafo criado via JS';

const span = document.createElement('span');
span.textContent = 'Span criado via JS';

document.body.appendChild(p);
document.body.appendChild(span);
```

---

3) quando tentei importar o Link do react-router-dom não consegui, mesmo seguindo os direcionamentos da aula, obtive o erro que dizia "'Link' is not exported from './styled' (imported as 'S')." O que isso quer dizer?

R: Me parece que é algum erro no seu import em si. Pelo que está escrito, acho que algum import/export não está correto como deveria.

---

4) qual a diferença entre usar == e === ?

R: Costumamos dizer que `==` verifica apenas os valores em uma comparação (por isso `'1' == 1` é `true`, já que os valores são iguais) e `===` verifica também o tipo desse valor (por isso `'1' === 1` é `false`, pois um é `number` e outro é `string`).

O fundamento por trás disso é um pouco mais complexo, chamado `coerção de tipos` (processo que ocorre com o `==` e com o `===` não). Acho que pode ser uma boa leitura extra!

Vale lembrar que para objetos e arrays, os valores nunca serão iguais, pois as referências de memórias são diferentes, ou seja, `{} === {}` e `[] === []` nunca serão true pq são arrays e objetos com referências de memória diferentes.

---

5) Se react é voltado para area frontend e backend , tem outras coisas que o react pode fazer? porque estudar html css se o React é voltado para front? Se aprofundarmos no react qual seria a profissão correta , desenvolvedor fullstack?

R: Como a [própria página oficial do React](https://reactjs.org/) fala, é uma biblioteca para criar interfaces de usuário. Você pode até utilizar React do lado do servidor (com *server-side rendering*), mas é diferente de um desenvolvimento de uma API por exemplo, de uma consulta em um banco de dados ou algo do tipo. Em muitos lugares, ser fullstack significa ter um conhecimento sobre o front e também sobre o back, coisa que somente o React não traz.

---

6) spa, significa uma unica pagina?

R: Sim e não... A sigla SPA significa `single page application` ou `aplicação de página única` e, embora a tradução queira dizer isso, não quer dizer que sua aplicação terá somente uma página, mas sim que aquela requisição tradicional onde toda a tela é recarregada para que uma nova página seja exibida ocorrerá somente uma vez (por isso `single page`). A ideia com aplicações `SPA` é que as demais requisições sejam feitas sem a necessidade desse recarregamento (através de requisições assíncronas utilizando `AJAX`/`fetch`).

Se tiver interesse em entender um pouco mais sobre as diferentes renderizações em React (e de aplicações em geral), escrevi [um post sobre isso](https://gabrieluizramos.com.br/renderizacao-de-aplicacoes-modernas) há um tempo.

---

7) o que significa lib, de um exemplo

R: `lib` quer dizer `library`, que quer dizer `biblioteca`. Uma `biblioteca` é um dos muitos termos utilizado para explicar um trecho de código que pode ser reutilizado em diversas necessidades.
O próprio React é uma lib, assim como diversas outras no mercado.

Outros termos utilizados podem ser `módulos`, `pacotes`, `dependências`...

---

#### Turma P

---

8) Quando é indicado usar React? Como é a integração com outras frameworks como bootstrap e etc? E por fim, é viável criar somente com react um site ou ele é uma ferramenta especifica para uma funcionalidade?

R: Não tem uma única resposta para essa perguntar. Optar por utilizar alguma biblioteca ou framework é uma decisão que envolve analisar o contexto do projeto, contexto do time, familiaridade da equipe com a ferramenta e diversas outras coisas.

Geralmente essas ferramentas mais utilizadas (React, Vue, Angular) possuem implementações de outras ferramenta prontas para utilizar (como o Bootstrap), caso não consiga utilizá-la de forma tão simples.

É viável criar um site só com React sim! [Meu site](http://gabrieluizramos.com.br/), inclusive, foi feito com React, você pode até olhar o [código fonte](https://github.com/gabrieluizramos/gabrieluizramos.github.io) se quiser!

---

9) Opa, boa tarde. Quando criei a aplicação React, na aula mostrou a exclusão de alguns arquivos desnecessários. Baseando na lista que apareceu, exclui os mesmos arquivos e aqui deu erro. Quais os locais deve remover as referências para parar o erro? Removi onde encontrei, mas o erro persistiu!

R: Acho que esse problema foi bem voltado à aula em específico. Não tenho muito como ajudar, mas uma dica que sempre é válida quando algum erro persiste é tentar limpar os dados da sua aplicação no navegador (no Chrome é na aba `Application`) e reiniciar sua aplicação também.

---

10) Opa, boa tarde. Sobre o React, na promisse, ao fazer o desestruct passa somente o valor "repository.name". Eu até tentei passar o array completo e para apresentar na tela de repositórios e não consegui! Pode explicar como pode ser feito o desestruct de todos os itens do array?

R: Destructuring de array (diferente de objetos, que possuem chaves) é algo sequencial, já que um array tem seus valores ordenados por posições. O exemplo abaixo mostra a destruturação de um array e de um objeto para relembrar a diferença:

```js
// Exemplo com array
const gatos = ['Lora', 'Logan', 'LeBeau'];

const [primeiro, segundo, terceiro] = gatos;
console.log(primeiro); // 'Lora'
console.log(segundo); // 'Logan'
console.log(terceiro); // 'LeBeau'

// Exemplo com objeto
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Ramos'
};
const { nome, sobrenome } = pessoa;
console.log(nome) // 'Gabriel'
console.log(sobrenome) // 'Ramos'
```

---

11) Pode falar mais sobre State? não peguei bem o assunto.

R: `state` é uma das formas de gerenciar um valor interno à um componente e também manter esse valor atualizado em tela (já que, alterações de estado disparam uma re-renderização no React). Hoje em dia (com os Hooks do React) utilizamos mais componentes de estado através do hook `useState`, mas não é difícil encontrar trechos na internet utilizando componentes com classes para manter um estado interno.

Vale lembrar que com os Hooks conseguimos criar trechos de códigos customizáveis com hooks onde nós definimos estados e efeitos colaterais.

Abaixo deixei aqueles exemplos que comentamos hoje: uma ação de abrir/fechar um menu e um hook customizado para consultar repositórios de usuários.

---

12) Exemplo de estado com menu aberto/fechado, com animação em CSS

- O componente `menu` possui o estado `open` que verifica se está aberto (`true`) ou fechado (`false`);
- Com o valor desse estado a classe `active` é concatenada e inserida no menu, apenas para fazer a animação via CSS.


```jsx
import React, { useState } from 'react';

import './menu.css';

const Menu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    const menuClasses = `menu ${open ? 'active' : ''}`;

    return (
        <nav>
            <button onClick={toggleMenu} className="button">click</button>
            <ul className={menuClasses}>
                <li>Home</li>
                <li>Sobre</li>
                <li>Produtos</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
};


export default Menu;
```

```css
.menu {
    list-style: none;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: 1s ease-in-out;
}

.menu.active {
    max-height: 1000px;
}

.button {
    border: 0;
    background: tomato;
    color: white;
}

.menu li {
    background: tomato;
    color: white;
    border-bottom: 1px solid white;
    padding: 10px 0;
}
```

---

13) Exemplo do hook customizado que desenvolvemos na nossa conversa.
- A função `handlePesquisa` apenas formata e retorna os dados de repositórios do usuário;
- O hook customizado é o `useRepositories`
- O componente `Tela` chama o hook customizado `useRepositories` informando o nome de usuário.

```jsx
function handlePesquisa(usuario)
  return axios.get(`https://api.github.com/users/${usuario}/repos`)
  .then(response => {

    const repositories = response.data.map((repository) => {
      return {
          name: repository.name,
          date: repository.date
      };
    });

    return repositories;

    // localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    // setErro(false);
    // history.push('/repositories');
  })
  .catch(err => {
    // setErro(true);
  });
}

const useRepositories = (username) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    handlePesquisa(username)
    .then((repos) => {
      setRepos(repos)
    })
  }, []);

  return [repos];
}


const Tela = () => {
  const [repos] = useRepositories('gabrieluizramos');

  if (!repos.length) return // ...

  return (
    // ...
  );
}
```

---


14) Pode falar sobre algumas extensões que você usa no VS Code, que considera útil no dia a dia ?

R: Vou listar as que estão instaladas por aqui hoje em dia:

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) + [Brazilian Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian): para validar meus arquivos markdown quando escrevo posts;
- [City Lights Icon](https://marketplace.visualstudio.com/items?itemName=Yummygum.city-lights-icon-vsc): pacote de ícones do editor;
- [Nord](https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code): tema do meu editor;
- Debugger for Chrome (padrão da Microsoft): auxilia a debuggar aplicações no Chrome (mas nunca utilizei rs);
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): permite a visualização das guias e alguns leves ajustes de código ao utilizar um arquivo [.editorconfig](https://editorconfig.org/) no projeto.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): integração do ESLint (validação estática de código) no editor;
- [filesize](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize): indica o tamanho do arquivo atual;
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): indica o tamanho de um arquivo sendo importado;
- [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles): preview de arquivos markdown;
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx): extensão para arquivos markdown (MD) que utilizam React;
- [npm Dependency Links](https://marketplace.visualstudio.com/items?itemName=herrmannplatz.npm-dependency-links): facilita o acesso ao site do NPM das dependências listadas no `package.json`;
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): autocomplete de arquivos/pastas;
- [PHP INtelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense): autocomplete de arquivos/pastas para PHP;
- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode): para captura de telas de código para inserir em apresentações;
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): formatador de código;
- Python (padrão da Microsoft): para auxiliar em diversas tarefas para Python;
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode): aquele "playground" de JS para facilitar explicações ao vivo;
- [Search node_modules](https://marketplace.visualstudio.com/items?itemName=jasonnutter.search-node-modules): para facilitar a pesquisa em arquivos na pasta `node_modules`;
- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync): para sincronizar todas as minhas preferências do vscode com um gist, no Github, deixando tudo BEM mais fácil na hora de manter meus plugins entre máquinas diferentes ou de formatar e baixar tudo do zero;
- [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer): para visualizar SVG direto no editor;
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): para deixar as palavras "TODO:" com um highlight para facilitar a leitura ao escrever algo que deve ser feito no futuro em um arquivo.

---

15) Talk sobre processo seletivo e carreira do Guilherme Pendezza: [https://www.youtube.com/watch?v=kdj5UBAEzHE](https://www.youtube.com/watch?v=kdj5UBAEzHE)
