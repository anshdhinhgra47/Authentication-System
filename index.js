const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayout);


//Setting up View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    //  TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
        
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },

        function(err){
            console.log(err || 'Connect MongoDB set up ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//Using the router
app.use('/', require('./routes'));

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