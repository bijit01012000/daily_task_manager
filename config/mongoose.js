const mongoose = require('mongoose');

//connect with the database
mongoose.connect('mongodb://localhost:27017/task_files');

//acquire the connection
const db = mongoose.connection;

//errror handling
db.on('error',console.error.bind(console,'error connecting to the database'));

//success message

db.once('open',function(){
    console.log('successfully connected to the database');
    });
