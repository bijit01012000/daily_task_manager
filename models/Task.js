const mongoose = require('mongoose');//include mongoose


//defining the schema
const Task_schema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String
    }
});

const Task = mongoose.model('Task',Task_schema);
module.exports = Task;