const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios.js');
const { expect } = require('chai');

describe('Testar as funções de gestão de usuários', function () {

    it('Validar que posso adicionar um novo nome de usuário na lista', function () {

        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
            nome: 'Felipe',
            email: 'felipe.mail@gmail.com'
        });

        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Felipe');
        //expect(listaDeUsuarios.at(-1).email).to.equal('felipe.mail@gmail.com');
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Felipe',
            email: 'felipe.mail@gmail.com'
        });
    });
});


