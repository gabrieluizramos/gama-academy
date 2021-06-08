enum Permissoes {
    admin,
    editor,
    comum
}

enum Cores {
    red = '#ff0000',
    black = '#000'
}

var usuario_teste  =true;
var usuarioDoiTeste =false;

const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.admin,
};

console.log(usuario)