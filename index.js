const express = require('express');//include express
const bodyParser = require('body-parser');//include body-parser
const port = 5000;

//connect with the database
const db = require('./config/mongoose');
const Task = require('./models/Task');


//create the server
const app = express();

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set the view engine
app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.get('/', (req, res) => {
    Task.find({}, function(err, tasks){
        if(err){
            console.log('error in fetching the tasks from db');
            return;
        }
    res.render('home',
    {
        tasks: tasks
    });
});
});

//create a task
app.post('/add-task', function(req,res){
    console.log(req.body);
    Task.create({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTask){
        if(err)
        {
            console.log('error in creating a new task');
            return;
    }
    console.log('**********', newTask);
    return res.redirect('back');
});
});

//delete a task
app.get('/delete-task', function(req, res){
    let id = req.query.id;

    Task.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log('error in deleting the id');
        }
        return res.redirect('back');
    });
});

//listen to the server
app.listen(port,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("server is running on port: "+port);
    }
});