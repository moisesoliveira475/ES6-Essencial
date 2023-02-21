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
const totalNotas = alunos.reduce((totalNotas, alunos)=> totalNotas += alunos.nota, 0);
console.log(totalNotas);

const média = alunos.reduce((totalNotas, alunos) => totalNotas += alunos.nota, 0)/alunos.length;
console.log(média);

const nomesAlunos = alunos.reduce((nomes, alunos)=> nomes += alunos.nome + ', ', '')
console.log(nomesAlunos);