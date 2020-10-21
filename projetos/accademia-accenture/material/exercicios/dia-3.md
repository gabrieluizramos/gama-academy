# Dia 3

## Formulários

1) Na tag form abaixo, complete o código para conter:
- 1 input do tipo texto;
- 1 input do tipo email;
- 1 input do tipo senha.

Todos os inputs devem possuir seus devidos placeholders.
```html
<form name="cadastro">
    <input type="text" name="usuario" placeholder="Digite seu nome de usuário">
    <input type="email" name="email" placeholder="seu@email.com">
    <input type="password" name="senha" placeholder="Sua senha super secreta">
</form>
```

## Eventos

1) Quando se é preferível atribuir eventos através de `addEventListener` e quando se deve utilizar os atributos como `onclick`?
O `addEventListener` é mais customizável e também permite atribuição da múltiplas funções para um mesmo evento, o que não ocorre com o `onclick`. Entretanto, o `onclick` é um pouco mais simples e exige menos caracteres a serem digitados, podendo servir bem para uma rápida prototipação, mesmo o `addEventListener` nos permitindo mais customizações.

2) Na estrutura HTML que foi criada acima. Atribua um evento para que, ao disparar o formulário, a página não seja recarregada e exiba todos os dados informados no console.
```html
<form name="cadastro">
    <input type="text" name="usuario" placeholder="Digite seu nome de usuário">
    <input type="email" name="email" placeholder="seu@email.com">
    <input type="password" name="senha" placeholder="Sua senha super secreta">
    <button>
        enviar
    </button>
</form>

<script>
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Usuario', cadastro.usuario.value);
        console.log('Email', cadastro.email.value);
        console.log('Senha', cadastro.senha.value);
    });
</script>
```

3) Vamos criar uma validação para esse formulário! Crie um objeto chamado `validacoes` que deverá conter como `chave` os tipos dos campos que criamos anteriormente (`text`, `email` e `password`). Para cada uma dessas chaves, conterá como `valor` um array onde conterá algumas funções de validação já pre-estabelecidas, criadas abaixo. Após isso crie uma função `validaFormulario` que receberá um parâmetro `campos`. Esse parâmetro deverá ser um array contendo cada um dos campos do formulário criado.

```js
const validaQuantidade = (input, minimo = 6) => {
    const ehValido = input.value.trim().length >= minimo;

    if (!ehValido) {
        return `O campo ${input.name} deve conter no mínimo ${minimo} caracteres`;
    }
}

const validaEmail = (input) => {
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const ehValido = regexp.test(input.value);

    if (!ehValido) {
        return `O campo ${input.name} não é válido`;
    }
}


// Todos os campos devem aplicar a função validaQuantidade como validação
// O campo email, deve aplicar também a função validaEmail
const validacoes = {
    // preencha o objeto com as validações
    text: [validaQuantidade],
    email: [validaQuantidade, validaEmail],
    password: [validaQuantidade]
};

const validaFormulario = (inputs) => {
    // crie a função de validação
    // ela deverá, para cada campo do objeto inputs
    // executar suas devidas validações e mostre no console as validações após sua execução
    const aposValidacao = inputs.map(input => {
       const funcoesDeValidacao = validacoes[input.type];
       const validados = funcoesDeValidacao
        .map(funcao => funcao(input))
        .filter(value => value);

       return validados;
    });

    console.log(aposValidacao);
};

// não deverá exibir erro
validaFormulario([
    {
        type: 'text',
        name: 'usuario',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '123456'
    },
    {
        type: 'email',
        name: 'email',
        value: 'abc@1234.com.br'
    }
]);

// deverá exibir erro em password e email
validaFormulario([
    {
        type: 'text',
        name: 'usuario',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '1234'
    },
    {
        type: 'email',
        name: 'email',
        value: 'abc@1234'
    }
]);
```

4) Após finalizar essa função, vamos atribuí-la ao formulário criado.

```html
<form name="cadastro">
    <input type="text" name="usuario" placeholder="Digite seu nome de usuário">
    <input type="email" name="email" placeholder="seu@email.com">
    <input type="password" name="senha" placeholder="Sua senha super secreta">
    <button>
        enviar
    </button>
</form>

<script>
    const validaQuantidade = (input, minimo = 6) => {
        const ehValido = input.value.trim().length >= minimo;

        if (!ehValido) {
            return `O campo ${input.name} deve conter no mínimo ${minimo} caracteres`;
        }
    }

    const validaEmail = (input) => {
        const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        const ehValido = regexp.test(input.value);

        if (!ehValido) {
            return `O campo ${input.name} não é válido`;
        }
    }

    const validacoes = {
        text: [validaQuantidade],
        email: [validaQuantidade, validaEmail],
        password: [validaQuantidade]
    };

    const validaFormulario = (inputs) => {
        const aposValidacao = inputs.map(input => {
        const funcoesDeValidacao = validacoes[input.type];
        const validados = funcoesDeValidacao
            .map(funcao => funcao(input))
            .filter(value => value);

        return validados;
        });

        return aposValidacao;
    };


    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const campos = [
            cadastro.usuario,
            cadastro.email,
            cadastro.senha
        ];
        
        const validados = validaFormulario(campos);
        console.log(validados);
    });
</script>
```

## Desestruturação

1) Atualize as funções de validação abaixo para utilizar desestruturação nos seus parâmetros de `input`:
```js
// const validaQuantidade = (input, minimo = 6) => {
//     const ehValido = input.value.trim().length >= minimo;

//     if (!ehValido) {
//         return 'O campo '+ input.name + ' deve conter no mínimo ' + minimo  + ' caracteres';
//     }
// }

// const validaEmail = (input) => {
//     const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
//     const ehValido = regexp.test(input.value);

//     if (!ehValido) {
//         return 'O campo ' + input.name + ' não é válido';
//     }
// }

const validaQuantidade = ({ value, name }, minimo = 6) => {
    const ehValido = value.trim().length >= minimo;

    if (!ehValido) {
        return `O campo ${name} deve conter no mínimo ${minimo} caracteres`;
    }
}

const validaEmail = ({ value, name }) => {
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const ehValido = regexp.test(value);

    if (!ehValido) {
        return `O campo ${name} não é válido`;
    }
}
```

2) Extra: antigamente, alguns exercícios de lógica pediam para trocar os valores da variável `a` e da variável `b`. Da seguinte forma:
```js
let a = 1;
let b = 2;
let auxiliar;

aux = b;
b = a;
a = aux;

console.log(`a = ${a}, b = ${b}`);
```

Como podemos fazer isso sem criar a variável `aux`, somente utilizando desestruturação?

```js
let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(`a = ${a}, b = ${b}`);
```

## Spread/Rest

1) Spread/Rest são muito parecidos, já que utilizam os mesmo caracteres. Cite uma diferença entre eles.

`spread` é pra distribuir valores em um novo objeto/array e o `rest` é para pegar o restante dos valores de um objeto/array.

2) Como aplicar Rest para receber qualquer quantidade de parâmetro na função abaixo?
```js
// const funcao = (a, b) => {
//     console.log(a);
//     console.log(b);
// };

const funcao = (...args) => {
    args.forEach(arg => {
        console.log(arg);
    })
};

funcao(1, 2, 3, 4, 5, 6)
```

3) Como unir os dois objetos abaixo em um novo objeto, usando Spread?
```js
const usuario = {
    email: 'um@email.com.br',
    senha: 'senha-super-secreta'
};

const detalhes = {
    nome: 'Um nome',
    sobrenome: 'Qualquer',
    bio: 'Uma pessoa qualquer',
};

const pessoa = {
    ...usuario,
    ...detalhes
};
```