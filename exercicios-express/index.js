const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')

//Api Usuário
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

//Api Produto
const apiProduto = require('./api/produto')
apiProduto(app, 'com param!')


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Guilherme'))

//O use traz todos métodos
app.use( (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano =  ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    
    res.send(req.body)
})


app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente: ${req.params.id} selecionado`)
})

app.get('/opa', (req, res, next) => {
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3} 
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    console.log('Durante...')

    next()

    // res.json([
    //     {id: 7, name: 'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3},
    // ])
    
    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    //res.send('<h1>Estou bem!</h1>')
})

app.use('/opa', (req, res) => {
    console.log('Depois..')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})











