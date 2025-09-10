//const usuarios = ['Matheus','Marcos','Lucas', 'João'];

const usuarios = [
    {
        nome: 'Matheus',
        email: 'mateus.mail@gmail.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos.mail@gmail.com'
    },
    {
        nome: 'Lucas',
        email: 'lucas.mail@gmail.com'
    },
    {
        nome: 'João',
        email: 'joao.mail@gmail.com'
    }
];

function retornarUsuarios(){
   
    return usuarios;
}

function adicionarNovoUsuario(usuario){
    usuarios.push(usuario);

}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}

