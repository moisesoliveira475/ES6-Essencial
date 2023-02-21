const name = 'guilherme'
// não podemos alterar o valor
name = 'guilherme';

const user = {
    name: 'guilherme'
};
//mas se for um objeto, podemos trocar suas propriedades
user.name = "outro nome"

//não podemos fazer o objeto  "apontar" para outro lugar
user = {
    name: 'Guilherme'
}
const persons = ['joao', 'moises', 'mateus']
//podemos add novos itens
persons.push('joao')
//podemos remover 
persons.shift();
//podemos alterar diretamente
persons[1] = "james"
console.log('\nArray após as alterações', persons)