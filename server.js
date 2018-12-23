/**
 * Created by Administrator on 2018/12/23.
 */
const express = require('express')
const expressStatic = require('express-static')
const bodyParser = require('body-parser')
const queryString = require('querystring')
var server = express()
server.listen(3333)

/*

server.use(bodyParser.urlencoded({
    extend:true,
    limit:2*1024
}))*/

server.use((req,res,next)=>{
    var str =""
    req.on('data',(data)=>{
        str += data
    })
    req.on('end',()=>{
        req.body = str;
        next()
    })
})
server.use('/',function(req,res){
    console.log(queryString.parse(req.body))
})

