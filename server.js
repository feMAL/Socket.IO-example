'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const socketIO = require('socket.io')

const app = express()
let server =  http.createServer(app)
const PORT = process.env.PORT || 2500
const expose_url = path.resolve(__dirname,'./public/')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(expose_url))

let io = socketIO(server)

io.on('connection',(client)=>{
    console.log('usuario conectado')
    console.log(client)
})

server.listen(PORT,(err)=>{
    if(err)throw new Error(err)

    console.log(`[*] ============SOCKET.IO EXAMPLE=============`)
    console.log(`[*] Server is ready listening on port: ${PORT}`)
    console.log(`[*] =========================================`)
})