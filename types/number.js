const myNumber = 12.4032;

//transforma número para string
const numberAsString = myNumber.toString();
console.log('\nnumero transformado em string:' ,typeof numberAsString);

//retorna numero com um numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nnumero de casas decimais:' ,fixedTwoDecimals);

//transforma string em float
console.log('\nstring parseada para float' ,parseFloat('13.22'));

//transforma uma string em int
console.log('\nstring parseada para int:' ,parseInt('13.20'));

