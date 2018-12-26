/**
 * Created by Administrator on 2018/12/25.
 */

module.exports = {
    timedate(time){
       var odate = new Date();
        odate.setTime(time*1000)
        return odate.getFullYear() + '-' + toDou(odate.getMonth()+1)+ '-' + toDou(odate.getDay())+ '-' + toDou(odate.getHours())+ ':' + toDou(odate.getMinutes())+ ':' + toDou(odate.getSeconds())
    }
}

function toDou(n){
    return n<10?'0'+n:" "+n
}