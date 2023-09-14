/**
 * Module dependencies.
 * @author lukasz.sudol <lukasz@devjs.eu>
 */

require('dotenv').config();
var express = require('express');
var router = require('./application/router');
var http = require('http');
var path = require('path');
var dbPath = 'mongodb://localhost/db';

// import the data layer
var mongoose = require('mongoose');
// import the models
var models = {
    User: require('./application/model/user')(mongoose),
    Action: require('./application/model/action')(mongoose),
    Visitor: require('./application/model/visitor')(mongoose),
    Launchpad: require('./application/model/launchpad')(mongoose),
    Notification: require('./application/model/notification')(mongoose),
};

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//db connection
mongoose
    .connect(dbPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

//router
router.init(app, models);
app.listen(process.env.PORT);
console.log('Listening on port ', process.env.PORT);