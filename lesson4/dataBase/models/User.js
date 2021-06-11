const {Schema, model} = require('mongoose')

const carSubSheme = {
    model: {type: String},
    price: {type: Number}
}

const userSheme = new Schema({
    name: {type: String, required: true},
    age: {type: Number, default: 15},
    cars: [carSubSheme]
})

module.exports = model('User', userSheme)









