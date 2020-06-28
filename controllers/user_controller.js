module.exports.user = (req, res) => {

    return res.render('user', {
        title: "User page"
    });
};


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
    //TODO later
}

//Get the Sign In Data and create a session for the user
module.exports.createSession = (req, res) => {
    //TODO later
}