const user = {
    name: 'guilherme',
    lastName: 'Cabrini da Silva'
}
//recupera as chaves do objeto
console.log('propriedade do objeto user', Object.keys(user));
//recupera os valores do objeto
console.log('\nvalores das propriedade do objeto user:', Object.values(user))
//retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nlista de propriedades e valores', Object.entries(user))
//mergear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Cabrini da Silva'});

console.log('\nadiciona a propriedade fullnameno objeto user')
console.log('\nretorna um novo objeto mergeando dois ou mais obejtos', Object.assign(user, {age: 47}));

//previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nvariável newObj após as alterações', newObj)

//permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Guilherme'}
Object.seal(person)

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nvariavel person após alterações', person)