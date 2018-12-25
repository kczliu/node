/**
 * Created by Administrator on 2018/12/24.
 */
const express = require('express');
var server = express();

var routeUser = express.Router()

routeUser.get('/1.html',(req,res)=>{
    res.send('1')
})
routeUser.get('/2.html',(req,res)=>{
    res.send('2')
})

server.use('/user',routeUser)

server.listen(3333)