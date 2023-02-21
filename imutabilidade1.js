const user = {
    name: 'Moisés',
    lastName: 'Santos de Oliveira'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}
const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName)