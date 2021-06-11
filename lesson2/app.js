const express = require('express');

const app = express();

// app.get('/hello', (req, res) => {
//     res.send('World')
// })
// app.get('/hello2', (req, res) => {
//     res.write('World2');
//     res.end();
// })
//
// app.get('/user', (req, res) => {
//     res.json([
//         {name: 'alex'},
//         {name: 'anna'},
//         {name: 'ander'}
//     ])
// })

const expressHbs = require('express-handlebars')
const path = require('path')




app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', '.hbs')

app.engine('.hbs', expressHbs({defaultLayout: false}));

app.set('views', path.join((__dirname, 'static')))


app.get('/login', (req, res) => {
    res.render('login', {xxx: true, name: 'Alex'})
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))



// app.get('/users', (req, res) => {
//     res.render('users', {users})
// })

const users = [
    {name: 'Alex', age: 11, gender: 'male'},
    {name: 'Anna', age: 22, gender: 'female'},
    {name: 'Ander', age: 33, gender: 'male'}
];

app.post('/login', (req, res) => {
    users.push(req.body)
    // res.json('User registered')
res.redirect('/users')
})

app.get('/users', (req, res) => {
    const {gender} = req.query;
    const filterUsers = users.filter(value => value.gender === gender)
    res.render('users', {users: filterUsers})
    console.log(req.query)
});

// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//     res.json(users[userId])
// })





app.listen(5000, ()=> {
    console.log('App listen 5000')
})




