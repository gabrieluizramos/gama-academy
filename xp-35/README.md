# XP-35
## Hackers

Oi, pessoal! Tudo bem?

Nossa turma foi pequena mas foi sensacional poder conhecer vocês e bater esse papo. Espero que tenham curtido tanto quanto eu curti ❤️

Nessa página coloquei os códigos que desenvolvemos e algumas dicas de estudo que falamos no final, caso precisem consultar.

Se precisarem entrar em contato comigo:

- Meu usuário em todas as redes sociais é `@gabrieluizramos` e no [meu site](http://gabrieluizramos.com.br/) estão todos os meus links
- Podem me adicionar no [LinkedIn](https://www.linkedin.com/in/gabrieluizramos/) também

Tamo junto, bons estudos 🙌

---

1) Exercício de componentização com estrutura HTML e CSS:

Lembrando que componentização está mais relacionada às boas práticas e a divisão de um componente de forma isolada e não é realmente algo único dos frameworks.

No exemplo abaixo, componentizamos pensando apenas na estrutura HTML e nos seletores CSS dos nossos componentes. Para aplicar isso em qualquer framework, seria só transportar isso pra tecnologia utilizada:

```html
<header class="header">
  <h1 class="title">Gabriel / Ramos</h1>
  <ul class="menu">
    <li class="menu-item">
      <a href="" class="menu-link">link</a>
    </li>
    <li class="menu-item">
      <a href="" class="menu-link">link</a>
    </li>
   <li class="menu-item">
     <a href="" class="menu-link">link</a>
    </li>
    <li class="menu-item">
      <a href="" class="menu-link">link</a>
    </li>
  </ul>
</header>

<main>
  <article class="post">
    <header class="post-header">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">Blog</li>
        <li class="breadcrumb-item">Titulo</li>
      </ul>
      <h1 class="post-title">Titulo do post</h1>
      <h2 class="post-subtile">subtitulo</h2>
    </header>
    <hr class="divider" />
    <figure class="banner">
       <img class="banner-image" />
    </figure>
  </article>
</main>
```

```css
/* Componente Header */
.header {}

/* Component menu */
.menu {}
.menu-item {}
.menu-link {}

/* Post */
.post {}
.post-header {}
.post-title {}
.post-subtitle {}

.breadcrumb {}
.bredcrumb-item {}

.divider {}
```

2) Aquele exemplo de componentes React com função e com classe e também a Modal utilizando Portals.

Lembrando que antigamente só era possível manipular estado (e ciclos de vida) em componentes com classe. Hoje em dia, graças aos hooks, podemos atingir os mesmos resultados de estado (e efeitos colaterais), escrevendo um código muito menor, mais simples e mais legível.

```jsx
// componente com funcao e classe

import React, { Component, useState, useEffect } from "react";

import { Modal } from "./modal";

// const meuEfeitoColateral = () => {
//   console.log('efeito colateral disparado');
// }

const consultaDadosDoUsuario = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export class ClassContador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      posts: []
    };
  }

  async componentDidUpdate() {
    return;
    const [first, second] = await consultaDadosDoUsuario();
    this.setState({
      posts: [...this.state.posts, first, second]
    });
  }

  onCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <button onClick={this.onCount}>click</button>
        {this.state.posts.length > 0 &&
          this.state.posts.map((post) => <div>{post.title}</div>)}
      </>
    );
  }
}

export const FunctionContador = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  // arr[0]: estado (count)
  // arr[1]: funcao setter (setCount)

  useEffect(() => {
    const loadData = async () => {
      const [first, second] = await consultaDadosDoUsuario();
      setPosts([first, second]);
    };

    loadData();
  }, []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="container">
        <button onClick={onClick}>click</button>
        {posts.length > 0 && (
          <Modal>
            {posts.map((post) => (
              <div>{post.title}</div>
            ))}
          </Modal>
        )}
      </div>
    </>
  );
};

```

```jsx
// código da modal usando portals

import React from "react";
import { createPortal } from "react-dom";

import "./modal.css";

const ModalNode = document.querySelector("#modal-root");

export const Modal = ({ children }) => {
  return createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    ModalNode
  );
};

```

3) Algumas dicas de sites para estudos e pessoas da comunidade qeu eu, particularmente, gosto muito:

- [freecodecamp](https://www.freecodecamp.org/)
- [codecademy](https://www.codecademy.com/)
- [hackerrank](https://www.hackerrank.com/)
- [compile-me (repositorio github)](https://github.com/gabrieluizramos/compile-me)

Fora isso, alguns blogs, livros e pessoas que eu curto e gosto de acompanhar:
- [Willian Justen](https://willianjusten.com.br/)
- [Vedovelli](https://blog.vedovelli.com.br/)
- [Flavio Copes](https://flaviocopes.com/)
- [Kent C. Dodds](https://kentcdodds.com/)
- [Eric Elliot](https://twitter.com/_ericelliott)
- [Valentino Gagliardi](https://twitter.com/gagliardi_vale) e seu livro [The Little JavaScript Book](https://leanpub.com/little-javascript/)
- Comentamos também do livro [Eloquente JavaScript](https://github.com/braziljs/eloquente-javascript), [Cangaceiro JavaScript](http://cangaceirojavascript.com.br/) e dos livros da [Casa do Código](https://www.casadocodigo.com.br/) em geral.