const var22 = 22;

function createUser(name, age) {
    logger( `Hello! My name is ${name} and ${age} years old`)
}

function logger(string) {
    console.log(string)
}
createUser('Ander', 99)
createUser('anna', 11)

console.log(12345)
module.exports = {
    var22,
    createUser,
    ff: (()=> {
        console.log('alexander')})
}

