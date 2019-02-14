var express = require('express'),
	cors = require('cors'),
	bodyparser = require("body-parser");
global._ = require('lodash');
global.util = require('util');
var crypto = require('crypto');

global.rootquire = function(path){
	return require('./'+path);
}

// Config
process.env.NODE_ENV = 'dev';
require('dotenv').config();

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
	res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

app.get('/', function (req, res) {
	res.send('UNAUTHORIZED ACCESS! ONLY MINIONS WITH AUTH CREDENTIALS CAN ACCESS VIA PORTAL.');
});

// Error handling
app.use(function(req, res, next){
	res.clientErr = function(message){
		var err = new Error(message);
		err.errorType = 'client';
		err.statusCode = 400;
		next(err);
	};

	res.sysErr = function(err){
		err.errorType = 'system';
		err.statusCode = 500;
		next(err);
	};

	next();
});


// API Routes
app.use(rootquire('routes/authentication').router);
app.use('/members', rootquire('routes/members').router);
app.use('/track', rootquire('routes/track').router);

	// 404
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.errorType = "client";
	err.statusCode = 404;
	next(err);
});

	// 500
app.use(function(err, req, res, next) {
	if (typeof err === 'string')
		err = new Error(err);

	if (err.errorType != 'client') {
		console.log(err.stack);
	}

	if (res.headersSent) return false;

	var error = {
		errorType: err.errorType,
		message: err.message
	};

	//if (err.errorType !== 'client')
		//error.message = "Server error.";

	res.status(err.statusCode || 500)
		.json({
			error: error
		});
});

var stuart_v = '0.2';

// Init db pool
var mongoPool = require('./databasepool.js');

new mongoPool.start(function () {
	console.log('Successfully connected to mongoDB');
	app.listen(17502, function () {
		console.log('Initiating minion_stuart - ', stuart_v);
	});
});
