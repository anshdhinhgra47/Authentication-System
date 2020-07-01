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


module.exports = passport;

