const User = require('../models/user');


module.exports.user = (req, res) => {

    return res.render('user', {
        title: "User page"
    });
};

module.exports.profile = (req, res) =>{

    // return res.render('user_profile',{
    //     title: "User Profile Page"
    // });

    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){

            if(user){
                return res.render('user_profile', {
                    title: "User Profile",
                    user: user
                })

            }else{
                return res.redirect('/user/sign-in');
            }

            
        });

    } else{

    return res.redirect('/user/sign-in');
    
    }
}

module.exports.signUp = (req, res) => {

    return res.render('user_sign_up', {
        title: "Sign Up"
    });
};

module.exports.signIn = (req, res) => {

    return res.render('user_sign_in', {
        title: "Sign In"
    });
};


//Get the Sign Up Data

module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in finding user in signing up');
            return;
        }

        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                console.log('Error in creating user while signing up');
                return;
                }
                
                return res.redirect('/user/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });
}

//Get the Sign In Data and create a session for the user
module.exports.createSession = (req, res) => {
    //Find the user

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in finding the user'); return;}

    

    //Handle user found

        if(user){

            //Handle passwords which don't match

            if(user.password != req.body.password){

                return res.redirect('back');
            }

            //Handle session creation

            res.cookie('user_id', user.id);

            return res.redirect('/user/profile');


        }else{

            //Handle user not found


            return res.redirect('back');
        }

    });

}