
var passport = require('passport');
var TwitterStrategy  = require('passport-twitter').Strategy;

// load up the user model
//var User       = require('../app/models/user');

// load the auth variables
var authConfig = require('./auth');

/*module.exports = function(passport) {*/

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {        
        done(null, user);        
    });    
  
    passport.use(new TwitterStrategy({

        consumerKey     : authConfig.twitter.consumerKey,
        consumerSecret  : authConfig.twitter.consumerSecret,
        callbackURL     : authConfig.twitter.callbackURL

    },
    function(token, tokenSecret, profile, done) {         
        process.nextTick(function() {
            //console.log("",profile);
            return done(null, profile); //return found profile            
        });
    }));
//};

module.exports = passport;