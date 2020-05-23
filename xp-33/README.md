# XP 33
## Hackers

Oi, pessoal! Tudo bem?

Espero que tenham curtido nosso bate papo! Hoje de manhã, pra mim, foi sensacional! ❤️

Tô enviando as respostas das dúvidas que respondemos pelo [OneAsk](https://oneask.app/e/duvidas-st2-xp33-hacker/5ebf25c02a5c6882d5620cb5).


Caso queiram entrar em contato comigo, seguem meus contatos:

- Meu usuário em todas as redes sociais é `@gabrieluizramos`
- Linkedin: [https://www.linkedin.com/in/gabrieluizramos/](https://www.linkedin.com/in/gabrieluizramos/)
- Email: gabriel.luiz.ramos@gmail.com

Eu escrevo algumas coisas no meu blog, caso queiram estudar sobre alguns dos tópicos que comentamos (como desenhos em CSS e outras diversas coisas), é só acessar lá [gabrieluizramos.com.br](https://gabrieluizramos.com.br/). Quem quiser assinar a newsletter, ela está disponível no fim de qualquer página dos posts.

Bons estudos e, qualquer coisa é só chamar!! 🚀


---


### Perguntas

1 - Existe alguma forma de "hackear" a forma como eu desenvolvo a minha lógica? Por mais que eu estude, sinto que nunca vou conseguir elaborar algo mais complexo, quando vejo algumas funções desenvolvidas.

R: Acredito que não, mas é algo que vc vai aprimorando com o tempo. É natural se sentir um pouco desconfortável em criar funções e saber como organizar seus parâmetros, variáveis e a lógica em geral.

O que você pode fazer é procuar alguns sites com dinâmicas e exercícios com problemas de lógica para resolver. Alguns deles que eu conheço e gosto em particular são esses aqui:

- [HackerRank](https://www.hackerrank.com/)
- [CodeCademy](https://www.codecademy.com/)


---


2 - porque aprender Typescript?

R: TypeScript tem toda a vantagem de analise e tipagem estática do seu código. Isso evita que você atribua variáveis e parâmetros não esperados, já que JavaScript possui tipagem dinâmica. A questão é que com isso, você traz alguns trabalhos extras também, já que TypeScript não é executado nos navegadores você terá um trabalho de configurar uma rotina de "build" para converter seu código TS em JS. Sem contar que, em alguns cenários, os erros de Typescript não são muito claros.

Um amigo meu recentemente começou uma série sobre introdução ao TypeScript no youtube, de forma totalmente gratuita. Quem tiver interesse de ver, é só acessar através [deste link](https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_).


---


3 - Pode explicar um pouco sobre Promises?

R: Claro! Vimos um exemplo ao longo do dia. Vale lembrar que Promises são sempre baseadas em uma "promessa" de algum valor futuro e esse valor pode ser recebido com sucesso (resolvido) ou com falha (rejeitado).

Se quiserem relembrar, o exemplo que fizemos foi esse:

```js
new Promise((resolve, reject) => {
    // ...
    resolve('Promise resolvida com sucesso')
})
.then((mensagem) => {
    console.log("Sucesso!")
    console.log("Primeiro then")

    return true;
})
.then(value => {
    console.log("Segundo then")
    
    return true;
})
.then(value => {
    console.log("Terceiro then");

    throw new Error("Ops, erro!");
})
.then(value => {
    // esse código não será executado pois disparamos um erro no .then anterior
    console.log("Quarto then");
})
.catch((error) => {
    console.error("Erro ao executar Promise")
    console.log(error);
})
.finally(() => {
    // esse código sempre será executado ao final da Promise
    console.log('promise finalizada')
});

// Promise padrão :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const converteResposta = resposta => resposta.json();
const exibeDados = dados => {
    console.log(`Titulo ${dados.title}`)
    console.log(`Está completo ${dados.completed}`)
}
const logaFinalizado = () => console.log("Fetch finalizado");

// Promise padrão
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(converteResposta)
.then(exibeDados)
.catch(error => {
    console.error(error);
})
.finally(logaFinalizado)

// Async/Await ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const buscaDados = async () => {}

// const resposta1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const resposta2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
// // const [resposta1, resposta2] = await Promise.all([
// //     fetch('https://jsonplaceholder.typicode.com/todos/1'),
// //     fetch('https://jsonplaceholder.typicode.com/todos/2')
// // ]);

// console.log(resposta1);
// console.log(resposta2);

function vaiDispararErro() {
    throw new Error('Ops, errow!');
}

async function buscaDados() {
    try {
        const resposta = await vaiDispararErro();
        console.log(resposta);
    } catch (err) {
        console.error('Aconteceu um erro ao executar a promise');
        console.error(err);
    }
}

buscaDados();

```


---

4 - Sinto dificuldade em saber em que focar meus estudos javascript para dominar o que o mercado pede de um junior. comecei React há pouco e sinto o mesmo para assimilar conceitos de high order functions, metodo reduce, closures para conseguir desenvolver com performance... fora documentação oficial, existe alguma dica de site, conteudo online de qualquer tipo que possa ajudar nesse processo?

R: Realmente, eu tb acho que o mercado cobra demais sem necessidade. Acaba cobrando coisas absurdas. Mas eu, particularmente, gosto de segui o conteúdo de algumas pessoas que vou mandar aqui embaixo. O que eu acho válido é ter em mente que cada pessoa aprende de um jeito (seja por video, curso, livro, projetos) e o ideal é entender a forma como vc aprende pra facilitar seu aprendizado.

Alguns links e pessoas que eu acho bacana de seguir: 

- [Willian Justen](https://willianjusten.com.br/)
- [Flavio Copes](https://flaviocopes.com/)
- [Kent C. Dodds](https://kentcdodds.com/blog/)
- [Eric Elliott](https://medium.com/@_ericelliott)
- [Front-end Mentor](https://www.frontendmentor.io/)


Alguns livos:
- [Little Javascript Book](https://leanpub.com/little-javascript/)
- [JavaScript Eloquente](https://github.com/braziljs/eloquente-javascript)

Eu mantenho meus estudos e conteúdos que gosto de consultar num repositório do github:
- [Compile-me](https://github.com/gabrieluizramos/compile-me)

E também tenho meu blog, caso queiram ler, é só clicar [aqui](https://gabrieluizramos.com.br/).


---

5 - Com a sua experiência tanto de mercado quanto de capacitação técnica de pessoas, você consegue estimar um tempo médio para uma pessoa sair do zero até conseguir chance de empregabilidade como dev Jr (back ou front end)

R: Eu acho que depende muito. Na Laboratória, por exemplo, ao fim do processo de Bootcamp (que dura 6 meses), muitas meninas saem contratadas. Mas acontece de algumas delas serem contratadas depois ou demorarem um pouco mais. Tudo depende muito da forma como vc aprende um conteúdo, desenvolve seus projetos e até se apresenta pro mercado.


---


6 - Quando uma pessoa passa de junior para pleno?

R: Depende muito também. Eu, particularmente, não sou muito a favor dessas nomenclaturas pq elas acabam criando situações no nosso dia-a-dia dentro dos times e das empresa que faz com que a gente se cobre ou se sinta diminuido. Entretanto, acho que existem experiências e maturidades diferentes.

Já trabalhei com desenvolvedores brilhantes que eram seniores com poucos tempo carreira, mas que não tinham uma capacidade emocional para lidar com decepções em uma discussão e também não tinham uma vivência que pudesse ajudá-los a realizar uma análise técnica mais profunda. Assim como já trabalhei com pessoas com diverso anos de carreira que não se importavam com a qualidade do código e do produto que estavam entregando.

Acredito que a "dica" é tentar analisar se você está confortável no ambiente em que está, se você acha que seu trabalho está sendo valorizado, tanto no quesito de desafio quanto no aspecto financeiro e, caso não esteja, tentar melhorar essa situação através do diálogo ou da busca por um novo desafio. :)


---


7 - Quais conteúdos você recomenda para aprender Javascript ?

R: Depende um pouco da forma como vc gosta de estudar. Coloquei uma lista com alguns links na resposta da pergunta 4 que acho que pode ajudar um pouco nessa questão.


---


8 - como resolver estes problemas de CORS que sempre aparecem na chamada de API's?

R: Depende de onde o problema se encontra. Às vezes as questões de CORS estão em alguma configuração no servidor (que receberá sua requisição) e outras pode ser alguma configuração no cliente (que está disparando a requisição). Geralmente é alguma configuração de header que precisa ser realizada.


---


9 - Já li em alguns lugares sobre o Javascript ser uma linguagem com muitas brechas de segurança. Em que sentido isso é verdade e como evitar esse tipo de falha?

R: A linguagem ter brechas de segurança, acredito que não. Mas acho que a forma como desenvolvemos as aplicações e lidamos com nossos dados, pode estar suscetível à algum problema sim. Comentamos do problema de SQL Injection (que é o fato de não tratarmos nossos inputs de dados e inserir diretamente algo em uma consulta no banco) e também fizemos um exemplo de um formulário que pegava o texto e inseria na tela com innerHTML (que interpretava todo o conteúdo e renderizava até as tags caso fossem escritas no input) e innerText (que, de fato, tratava o texto e não renderizava qualquer tag escrita).


---


10 - Sobre a parte de hardware, você acha que um computador com processador core i3(8ª Geração), dá pra programar React(ou Gatsby), Node e afins para web ? E mobile também(React Native ou Flutter) ?

R: Para desenvolvimento web acho que não terá problemas (embora eu não seja nada especialista em hardware). Já para mobile, pelas questões de emulação de dispositivo e de algumas tecnologias (como o React Native, o Flutter já não sei) utilizarem Android Studio, acaba que você pode precisar de um espaço em disco um pouco maior, pela grande quantidade de utilitários que vai precisar instalar.

Como li uma vez: desenvolver web e rodar VSCode você consegue até em uma batata, uahauhauhauuha


---


11 - o que voce acha do Deno? se voce já sabe node vale a pena ver sobre ele?

R: Acho que vale a pena estudar, talvez tentar entender como funciona e fazer alguns testes. Acho que ele está bem próximo do que já sabemos do Node, mas tem a questão de consumir códigos em TypeScript diretamente.

É bacana estar antenado nas novidades do mercado mas sem se cobrar por isso. Já que, aprender e querer aplicar algo em um projeto grande pode te trazer algumas frustrações, principalmente pelo fato de ser algo novo, às vezes você pode precisar de ajuda em uma tecnologia que ainda não está muito madura e isso pode acabar sendo um problema ao optar por ser um *early-adopter*.


---


12 - Após dominarmos JavaScript, há alguma outra linguagem que seja recomendada para programadores iniciantes aprenderem? Algo tão prático ou tão procurado quanto JS

R: Dominar uma tecnologia eu acho que é algo bem complicado. Acho que podemos ficar confortáveis e, como eu brinquei, aprender a pesquisar no Google da melhor forma. Acho que vale a pena começar a pensar em outras linguagens apenas quando estiver confortável com o JS. Algumas linguagens (como o Python e o PHP) são bem didáticas e prazerosas de estudar.

Acho que vale a pena tentar ver as empresas e a região que você está, para entender qual linguagem pode se especializar futuramente.

Não esqueçam de se dedicar ao HTML e ao CSS também! É uma base muito importante. É muito comum acabarmos entrando no cenario de `tentativa e erro` com CSS.


---


13 - No fim do dia estavamos conversando sobre as configurações que utilizamos para desenvolver em React (como Babel e Webpack) mas o horário não foi o suficiente para terminarmos o exemplo.

Basicamente, o [Babel](https://babeljs.io/) faz o papel de `transpilar` nosso código React, ou seja, ele pega nossos componentes e nossas configuração de JS em uma escrita mais moderna e transforma em uma versão de JS que será interpretada corretamente pelo navegador. Temos também o [Webpack](https://webpack.js.org/) envolvido nessas ferramentas, que serve para unir e orquestrar nossos arquivos de separados componentes.

Vale uma pena dar uma olhada neles dois. 

Caso esteja utilizando [create-react-app](https://github.com/facebook/create-react-app) e queira ver todas essas configurações que já vem prontas e abstraídas pra você, é possível executar o comando `npm run eject` no terminal, na pasta do seu projeto. Isso vai fazer com que algumas configurações sejam "ejetadas" e fiquem mais fácil de editar, modificar e/ou entender toda essa mágica que já vem configurada.

Se for realizar esse comando, sugiro que façam em um projetinho de teste a parte, para não arriscar mudar a configuração do que você já tem pronto, ok?