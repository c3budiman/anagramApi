//THE Function :
var anagramsolverbasic = require('./anagramsolverbasic');
//any other function to achieve easy to use :
var express = require('express')
var bodyParser = require('body-parser')
const port = 3000
var app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('To get started please post a json data, example : '+
    `{
        "anagramArray": [
            "kita",
            "atik",
            "tika",
            "aku",
            "kia",
            "makan",
            "kua"
        ]
    }`)
})

app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    try {
        let output_anagram = anagramsolverbasic.isAnagram(req.body.anagramArray)
        res.end(JSON.stringify(output_anagram))
    } catch (error) {
        //handling all the error :
        console.log(error)
        res.end(JSON.stringify(error))
    }
})

app.listen(port, () => {
    console.log(`Anagram Solver App listening at http://localhost:${port}`)
})