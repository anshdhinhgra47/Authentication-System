const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');
//Authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email, password, done){
        //find email and establish the identity
        User.findOne({email: email}, function(err, user){
            if(err){
                console.log('Error in finding the user --> passport');
                return done(err);
            }

            if(!user || user.password!= password){
                console.log('Invalid Username or Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }
        
         
));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});


//de-serializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding the user');
            return done(err);
        }

        return done(null, user);
    });
});

//Check if the user is authenticated

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){

        //if user is signe-in then pass on the request to next function controller
        return next();
    }

    //if the user is not signed-in
    return res.redirect('/user/sign-in');
}

passport.setAuthenticatedUser = (req, res, next) => {
    if(req.isAuthenticated){

        //req.user contains the current signed-in user from the current session cookie
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;

