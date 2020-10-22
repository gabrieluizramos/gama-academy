# Dia 5

## Single Page Applications

1) O que é uma SPA?

Uma forma diferente da tradicional de se trabalhar com aplicações. Ao invés de ficar recarregando a página a cada requisição (ou seja, a cada resposta de um servidor), agora temos uma página que carrega uma única vez e trafega dados utilizando AJAX. Isso não quer dizer que a aplicação só terá única tela/página. Podemos ter várias telas ou páginas diferentes e trabalhar com rotas na nossa aplicação, mesmo utilizando SPA.

2) Qual a principal diferença de uma SPA para uma aplicação mais "tradicional"? Como elas trafegam dados entre o cliente e o servidor?

Ler resposta 1. 

## Web Components

1) Essencialmente, o que são Web Components?

É uma série de especificações que visa tornar componentes na web reutilizáveis independente de frameworks.

2) Você precisa de algum framework/biblioteca para aplicar componentização em uma interface? Por quê?

Não. Componentizar é basicamente o esforço de definir limites claros para componentes de interface, isso quer dizer, separar as responsabilidades de cada bloco dentro de uma aplicação front-end.

## Node e NPM

1) Conceitualmente, o que é o `Node`, o `NPM` e o `NPX`?

`Node` é a plataforma que executa JavaScript (utilizando V8, motor do Google Chrome) no lado do back-end. `NPM` é o gerenciador de pacotes do `Node`, responsável por fazer instalação de pacotes através de comandos, já o `NPX` é o executor de pacotes do `NPM`, responsável por facilitar a utilização de alguns pacotes que antes precisavam ser instalados globalmente.

2) Como iniciar um projeto utilizando `NPM`?
```sh
npm init
# ou
npm init -y # já preenche algumas informações
```

3) Qual a diferença entre dependências que estão listadas como `dependencies` e `devDependencies` em um arquivo `package.json`?

Ambas estão relacionadas ao ambiente do projeto: `devDependencies` são dependências que estão ligadas ao ambiente de desenvolvimento (como ferramentas de teste, análise de código e qualidade) e já as `dependencies` são ferramentas necessárias para o projeto ser executado em um ambiente final (como produção).

4) Como criar uma rotina customizada usando `npm`?

Criando uma chave dentro do objeto de `scripts` e executando com `npm` (para scripts padrões como `start`, `test`, `install`) ou `npm run` (para scripts customizados).

## Yarn

1) Qual a diferença entre o `Yarn` e o `NPM`?

Ambos são gerenciadores de pacotes, no entanto, o `Yarn` historicamente apresentou algumas funcionalidades antes do `NPM`, como lidar com cache de dependências e os workspaces.

2) Como funcionam os `workspaces`?

É uma forma de trabalhar com várias aplicações dentro de um mesmo repositório. A funcionalidade de `workspaces` do `Yarn` e `NPM` nos auxilia a lidar com as dependências desses diversos projetos vivendo juntos em um único lugar.

3) Devo utilizar `NPM` e `Yarn` em um mesmo projeto? Por quê?

Não existem muitos motivos para isso, por causa da integridade dos pacotes instalados e também pela consistência de utilizar um único gerenciador de pacotes no projeto.

## Babel

1) O que é o `Babel`? Qual a diferença entre um transpilador e um compilador?

É um transpilador de JavaScript. Um transpilador converte um código de uma linguagem X para a mesma linguagem, mas aplicando funcionalidades de versões diferentes. Já um compilador tem como tarefa converter um código de uma linguagem X para uma linguagem Y.

2) Como você instala o `Babel` em um projeto? De que maneiras podemos utilizá-lo?

Instalando via `NPM` e configurando um `script` no nosso projeto. Podemos utilizar, por exemplo, via linha de comando ou diretamente na nossa página, embora essa última forma não seja indicada por motivos claros (de rede, performance e impactos negativos na aplicação).

## Webpack

1) O que é o `Webpack`? Qual sua funcionalidade?

Ele é um empacotador de módulos, isso é, sua funcionalidade é realizar o `bundle` (ou empacotar os módulos) do projeto.

2) Como indicar ao `Webpack` como lidar com arquivos em formatos que não são JS (por exemplo SCSS ou imagens)?

Instalando e utilizando `loaders`