const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayout);

//Using the router
app.use('/', require('./routes'));



//Setting up View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Setting up styles and scripts for layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.listen(port, function(err){
    if(err){
        console.log(`Error encountered: ${err}`);
        return;
    }

    console.log(`Successfully connected to port: ${port}`);
});