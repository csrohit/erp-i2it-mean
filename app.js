"use strict";
const express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),

    config = require('./config/config'),
    index = require('./routes/'),
    logger = require('./config/logger'),

    User = require('./models/user'),
    
    app = express();


process.env.NODE_ENV = 'Development';


const db = null;
// Connect to database
mongoose.connect(config.db_host+'/'+config.db_name, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(()=>{
        logger.info(`Connected to database ${config.db_name}`);
    }).catch(err=>{
        logger.error("Could not connect to database");
        process.kill(process.pid, 'SIGTERM');
    })



// cors middleware
app.use(cors());


// BodyParser
app.use(bodyParser.json()); // only extract json parameters
app.use(bodyParser.urlencoded({ extended: false}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Jwt configuration
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = config.secret;
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById(jwt_payload.data._id).select('-password').exec((err, user) => {
    if(err) {
      return done(err, false);
    }
    if(user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));

// requests logging
app.use('/', (req,res,next)=>{
    logger.info(`${req.method} request was made at ${req.url}`);
    next();
});
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/', index);

const server = app.listen(config.port, ()=> logger.info(`Server started on port ${config.port}`));
process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received!');
    server.close(() => {
        // close mongoose connection
        db.close(false, () => {
            logger.info("Mongoose connection closed");
        })

        logger.info('Process terminated');
        process.exit(1)
    });
  });