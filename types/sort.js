const alunos = [
    {
        nome: 'moises',
        nota: 7
    },
    {
        nome: 'joão',
        nota: 5
    },
    {
        nome: 'maria',
        nota: 6
    }
]
const lista = alunos.sort((current, next) => current.nota - next.nota);
console.log(lista);

const lista2 = alunos.sort((current, next) => next.nota- current.nota);
console.log(lista);


