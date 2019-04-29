// server.js

//Import all necessary files
require('./models/db');

const express = require('express');
const exphbs = require('express-handlebars');

const bodyparser = require('body-parser');

const path = require('path');

const user = require('./routes/user');
const admin = require('./routes/admin')

var app = express();

//Use bodyparser
app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

//Set views directory to /views
app.set('views', path.join(__dirname, '/views/'));

//Set default layout to /layouts/mainLayout
app.engine('hbs',exphbs({extname:'hbs', defaultLayout:'mainLayout', layoutsDir:__dirname+'/views/layouts/'}));

//Set templating engine to hbs
app.set('view engine', 'hbs');

//Set static location to /static
app.use('/static', express.static(path.join(__dirname,'static')));

//Set running port at PORT 3000
var port = process.env.PORT || 3000;

//Start a listener at PORT 3000
app.listen(port, ()=>{
    console.log('Express server started at port : 3000');
});

//Route all requests at '/' to user.js
app.use('/', user);

//Route all requests at '/admin' to admin.js
app.use('/admin', admin);
