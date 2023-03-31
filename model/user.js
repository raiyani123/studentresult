const mongoose = require('mongoose');


var student = new mongoose.Schema({

    name:{
        type:String
    },
    sub1:{
        type:String 
    },
    sub2:{
        type:String
    },
    sub3:{
        type:String
    },
    sub4:{
        type:String
    },
    sub5:{
        type:String
    },
    total:{
        type:String
    },
    avg:{
        type:String
    }

});
var studentmodel = mongoose.model('studentmodel',student);
module.exports = studentmodel;













// {
//     "name":"yash",
//     "sub1":"80",
//     "sub2":"89",
//     "sub3":"90",
//     "sub4":"77",
//     "sub5":80,
//     "total":"416",
//     "avg":"69"
// }

