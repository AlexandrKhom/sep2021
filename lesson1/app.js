// const x = require(`./test2/test2`);
//
// x.createUser(`Alex`, 22)
//
// console.log(`*****************`)
// console.log(__dirname)
// console.log(__filename)
// console.log(`*****************`)

const fs = require(`fs`);

const filePath = __dirname + `/test2/file.txt`

// fs.writeFile(filePath, `hello sep-2021`, err => {
//     if (err){
//         console.log(err)
//     }
// })

// fs.appendFile(filePath, `\n Ander \n`, err => {
//     if (err){
//         console.log(err)
//     }
// })

// fs.mkdir(`${__dirname}/netflix/films/cino`, {recursive: true}, err => {
//     if (err){
//         console.log(err)
//     }
// })

// fs.rmdir(`${__dirname}/netflix/films/cino`, {recursive: true}, err => {
//     if (err){
//         console.log(err)
//     }
// })

// fs.rename(filePath, `${__dirname}/netflix/films/cino.txt`, err => {
//     if (err){
//         console.log(err)}
// })

// fs.copyFile(`${__dirname}/netflix/films/cino.txt`, `${__dirname}/test2/cino.txt`, err => {
//     if (err){
//         console.log(err)}
// })

// const y = require(`path`)
// const s = y.join(__dirname, `netflix`, `//////////films`, `////////////cino.txt`)
// console.log(s)

const readStream = fs.createReadStream(filePath)
readStream.on('data', chunk => {
    console.log(chunk)
})
readStream.on('end', ()=> {
    console.log(`3 topora`)
})






