/**
 * Created by Administrator on 2018/12/23.
 */
const ejs = require('ejs');
ejs.renderFile('./views/1.ejs',{name:"刘菁"},(err, data)=>{
    if(err){
        console.log('shibai')
    }else{
        console.log(data)
    }
})