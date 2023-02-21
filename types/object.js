const user = {
    name: 'guilherme',
};
//alterando a propriedade de um objeto 
user.name = 'outro nome 1';
user['outro nome 2'];

const prop = 'name';
user[prop] = 'outro nome 3'

//criando uma  propriedade 
user.lastname = 'Cabrini da Silva';
//deletando uma propriedade
delete user.name;