const students = [
    {
        name: 'grace',
        grade: 7
    },
    {
        name: 'janifer',
        grade: 4
    },
    {
        name: 'paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
};
console.log('alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nlista de alunos:');
console.log(students);