const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');

app.use('/', require('./routes'));
app.use(express.static('./assets'));
app.use(expressLayout);

//Setting up View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error encountered: ${err}`);
        return;
    }

    console.log(`Successfully connected to port: ${port}`);
});