/* const arr = [1,2,3]
console.log(arr);
const arr2 = new Array(1,2,3);
console.log(arr2);
const arr3 = Array.of(1,2,3)
console.log(arr3);
const arr4 = Array(3);
console.log(arr4);
const arr5 = Array(3,2)
console.log(arr5); */

/* const divs = document.querySelectorAll('div')
const divArray = Array.from(divs)
//divArray vai ser uma lista de todas as divs */

/* const frutas = Array('banana, laranja')
frutas.push('maça') //ou frutas.unshift para adicionar no começo do Array
console.log(frutas)
console.log(frutas.pop())//frutas.shift para remover no início
console.log(frutas) */

/* const frutas = Array('banana, laranja');
const salgados = ['coxinha', 'kibe', 'bolinho de queijo'];
const comidas = frutas.concat(salgados);
console.log(comidas); */
/* 
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0,2)); //no intervalo
console.log(arr.slice(2)); // corta até a posição indicada
console.log(arr.slice(-1)); // último item
console.log(arr.slice(-3)); // "três últimos itens" 
console.log(arr)
 */

/* const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.splice(2)
console.log(arr);
arr.splice(0,0,'first');
console.log(arr);
arr.splice(2,2,6,7)
//primeiro parametro define onde ele vai fazer as alterações,
//segundo quantos itens ele vai deletar, a partir do segundo parametro vc coloca o que quer adicionar 
console.log(arr);
 */
const frutas = Array('banana, laranja', 'maça', 'abacate', 'mamão');
frutas.forEach(fruta => console.log(fruta))