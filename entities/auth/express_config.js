var cookieParser = require('cookie-parser')
  , session = require('express-session')
  , passport = require('passport')
  //, AnonStrategy = require('passport-anonymous').Strategy
  , GoogleStrategy = require('passport-google-oauth20').Strategy
  , GithubStrategy = require('passport-github').Strategy
  , LocalStrategy = require('passport-local').Strategy
  , TwitterStrategy = require('passport-twitter').Strategy
  , UserModel = require('../user/UserModel')
;

module.exports = {

  /*

    init - initialize passport-related configurations

    called within the main express service configuration

  */

  init: function (attr) {
  
    /* attrs:
        app - express app
        config - application config data
    */

    var app = attr.app
      , config = attr.config
    ;


    // express session configuration
    // ----------------------------------------------------
    
    app.use(cookieParser(config.COOKIE_SECRET));
    
    // redis-based session
    if (config.SESSION_STORE == 'RedisStore') {

      console.log('Auth.express_config: using RedisStore for sessions.'); 
      var RedisStore = require('connect-redis')(session);

      app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: config.SESSION_SECRET,
        name: config.SESSION_NAME,
        cookie: { maxAge: 86400 * 365 * 10 * 1000, path: '/' },
        store: new RedisStore({
          port: config.REDIS_SESSION_PORT,
          host: config.REDIS_SESSION_HOST,
          auth_pass: config.REDIS_SESSION_AUTH
        }),
      }));

    // mongodb-based session
    } else if (config.SESSION_STORE == 'MongoStore'){

      console.log('Auth.express_config: using connect-mongo for sessions.'); 
      var MongoStore = require('connect-mongo')(session);

      app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: config.SESSION_SECRET,
        name: config.SESSION_NAME,
        cookie: { maxAge: 86400 * 365 * 10 * 1000, path: '/' },
        store: new MongoStore({
          url: config.MONGODB_SESSION_URL,
          autoReconnect: true
        })
      }));

    }

    // passport authorization configuration
    // ----------------------------------------------------
    
    app.use(passport.initialize());

    app.use(passport.session());

    // anon strategy
    //passport.use(new AnonStrategy());
    
    // google strategy
    passport.use(new GoogleStrategy({
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.GOOGLE_REDIRECT_URL
      },
      function(accessToken, refreshToken, profile, cb) {
        console.log('Auth.express_config: google login with id=' + profile.id);
        //return cb(null, { googleId: profile.id });
        
        // find or create
        UserModel.findOne({ 'googleId': profile.id }, 'googleId', function (err, user) {
          
          // current user
          if (user) {
            return cb(err, user);
          
          // new user
          } else {

            // create a user
            var newUser = new UserModel({ 
              googleId: profile.id,
              name: profile.displayName,
              image_url: (profile.photos && profile.photos[0] ? profile.photos[0].value : undefined)
            });
            newUser.save(function (err, user) {
              if (err) { console.error(err); }
              return cb(err, user);
            });

          }

        }); // END find User
      }
    )); // END google strategy
 
 
    // local strategy 
    passport.use(new LocalStrategy(
      function(username, password, cb) {

        console.log('Auth.express_config: local login with username ' + username);
        
        // find or create
        UserModel.findOne({ 'localId': username }, 'localId', function (err, user) {
          
          // current user
          if (user) {
            return cb(err, user);
          
          // new user
          } else {

            // create a user
            var newUser = new UserModel({ 
              localId: username,
              name: username,
              password: Math.floor(100000000 + Math.random() * 900000000) // 9 digit random number
            });
            newUser.save(function (err, user) {
              if (err) { console.error(err); }
              return cb(err, user);
            });

          }

        }); // END find User


        User.findOne({ username: username }, function (err, user) {
          if (err) { return cb(err); }
          if (!user) { return cb(null, false); }
          if (!user.verifyPassword(password)) { return cb(null, false); }
          return cb(null, user);
        });
      }
    ));

    passport.serializeUser(function(user, done) { 
      done(null, user); 
    });
    passport.deserializeUser(function(user, done) { 
      done(null, user); 
    });

  }

};
