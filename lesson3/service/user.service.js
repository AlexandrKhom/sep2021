const DB = require('../dataBase/users')

module.exports = {
    findUsers: () => {
        return DB;
    },
    findUsersById: (userId) => {
        return DB[userId]
    },
    createUser: (userObject) => {
        DB.push(userObject)
    }
}
