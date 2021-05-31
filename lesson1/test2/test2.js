let var22 = 22;

function createUser(name, age) {
    logger(`Hello! My name is ${name} and I am ${age} years old`)
}
function logger(string) {
    console.log(string)
}

console.log(333)
console.log(`_______________________________-`)
console.log(__dirname)
console.log(__filename)
console.log(`_______________________________-`)

module.exports = {
    var22,
    createUser,
}



