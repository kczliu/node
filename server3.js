/**
 * Created by Administrator on 2018/12/23.
 */
const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const ejs=require('ejs');
const jade=require('jade');
const fs = require('fs')
const path = require('path')
const consolidate = require('consolidate')
var server=express();

server.listen(3333);


//1.解析cookie
server.use(cookieParser('sdfasl43kjoifguokn4lkhoifo4k3'));

//2.使用session
var arr=[];
for(var i=0;i<100000;i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20*3600*1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

/*//用户请求
server.use('/', function (req, res, next){
    console.log(req.query, req.body, req.files, req.cookies, req.session);
    var newname = req.files[0].path + path.parse(req.files[0].originalname).ext
    fs.rename(req.files[0].path,newname,function(err){
        if(err){
            res.send('error')
        }else{
            res.send('success')
        }

    })
    next()
});*/


server.set('view engine','html')
server.set('views','./views')
server.engine('html',consolidate.ejs)

server.get('/index',(req,res)=>{
    res.render('1.ejs',{name:'liujing'})
})
//4.static数据
server.use(static('./www'));
