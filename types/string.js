//tamanho de uma string
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);
//retorna um array quebrando a string por um delimitador
const splitedText = 'texto'.split('x');
console.log(`\narray com as posições separadas pelo delimitador, ${splitedText}`);
//busca um valor e substitui por outro
const replacedText = 'texto'.replace('text', 'txet');
console.log('\nsubstituição de valor, ', replacedText);
//retorna a fatia de um valor
const lastChar = 'text'.slice(-1);
console.log('\nultima letra de uma string, ', lastChar);

const allWithoutLastChar = 'text'.slice(0,-1);
console.log('\nvalor da string da primeira letra menos a ultima, ', allWithoutLastChar);

const secondToEnd = 'text'.slice(1);
console.log('\nvalor da string da segunda letra até a ultima, ', secondToEnd);

//retorna n caracteres a partir de uma posição 
const twoCharsBeforeFirstPos = 'texto'.substring(0,2);
console.log('\nas duas letras primeiras letras são: ', twoCharsBeforeFirstPos);