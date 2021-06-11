const express = require('express');
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')))


const apiRouter = require('./router/api.router')



app.use('/', apiRouter);


app.listen(5000, ()=> {
    console.log('App listen 5000')
})
