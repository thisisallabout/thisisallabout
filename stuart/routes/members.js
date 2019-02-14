var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var authUser = rootquire('routes/authentication').authUser;

router.route('/')
	.post(function(req, res, next){
		var password = req.body.password,
			usrname = req.body.username,
			user;

		var response = {};

		if (!usrname)
			return res.clientErr("NO_USERNAME");
		if (!password)
			return res.clientErr("NO_PASSWORD");
		if (password.length < 6)
			return res.clientErr("TOOSHORT_PASSWORD");
		if (usrname.length > 15) 
			return res.clientErr("TOOLONG_USERNAME");
		
		usrname = usrname.replace(/[.,#!\^\*;:{}="'_`()%@,$&~+\\|\]\[><\/]/gm, '').replace(/\s{2,}/g, ' ');

		var collection = db.collection('editorial_members');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({username: usrname}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (result.length) {
							return res.clientErr("USERNAME_TOKEN");
						} else {
							encryptHash(password, finalSubscrbInsertHandler);
						}
					});
				} else {
					encryptHash(password, finalSubscrbInsertHandler);
				}
			}
		});

		function encryptHash (credential, callback) {
			var saltlen = 16;
			var iterations = 10000;
			var keylen = 64;
			var salt = crypto.randomBytes(saltlen);

			crypto.pbkdf2(credential, salt, iterations, keylen,
				function (err, hash) {
					if (err) throw cb(err);
					var encryption = salt.toString('base64')+':'+iterations+':'+Buffer(hash,'binary').toString('base64');
					return callback(null, encryption);
				}
			);
		}

		function finalSubscrbInsertHandler(err, hash) {
			if (err) return res.sysErr("ENCRYPT_ERR", err);
			var S4 = function() {
				return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
			};
			
			var referralCodeId = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

			var passwordHash = hash;
			var userObj = {username: usrname, password: passwordHash};
			var collection = db.collection('editorial_members');
			collection.insertOne(userObj, function (err, result) {
				if (err) {
					return res.sysErr("DB_ERR", err);
				} else {
					var userId = result.insertedId;
					response.userId = userId;
					response.username = usrname;

					response.token = rootquire('routes/authentication').createToken({
						id: userId,
						username: usrname
					});

					res.json(response);
				}
			});
		}
	})
	.get(authUser, function(req, res, next){
		var subscriberId = req.jwt.user.id;

		var collection = db.collection('editorial_members');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(subscriberId)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
						} else {
							var response = {};
							response.username = result[0].username;
							response.userId = result[0]._id;

							res.json(response);
						}
					});
				} else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
			}
		});
	});

router.route('/:id').get(authUser, function(req, res, next){
		var userid = req.params.id;

		var collection = db.collection('editorial_members');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(userid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
						} else {
							var response = {};
							response.username = result[0].username;
							response.userId = result[0]._id;

							res.json(response);
						}
					});
				} else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
			}
		});
	});

router.route('/edit')
	.post(authUser, function(req, res, next){
		var usrname = req.body.username,
			userId = req.jwt.user.id,
			user,
			password = req.body.password;

		var response = {};

		if (!usrname)
			return res.clientErr("INVALID_USERNAME");
		if (password != null && password.length < 6)
			return res.clientErr("TOOSHORT_PASSWORD");
		if (usrname.length > 15) 
			return res.clientErr("TOOLONG_USERNAME");
			
		usrname = usrname.replace(/[.,#!\^\*;:{}="'_`()%@,$&~+\\|\]\[><\/]/gm, '').replace(/\s{2,}/g, ' ');
			
		var collection = db.collection('editorial_members');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					if (password != null) {
						encryptHash(password, finalSubscrbInsertHandler);
					} else {
						/*
						collection.update({_id: ObjectID(userId)}, {$set : {
							"username": usrname
						}}, function (err, numUpdated) {
							if (err) {
								return res.sysErr("DB_ERR", err);
							}

							if (numUpdated) {
								response.username = usrname;
								res.json(response);
							} else {
								return res.sysErr("DB_UPDATE_ERR", err);
							}
						});*/
					}
				} else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
			}
		});

		function encryptHash (credential, callback) {
			var saltlen = 16;
			var iterations = 10000;
			var keylen = 64;
			var salt = crypto.randomBytes(saltlen);

			crypto.pbkdf2(credential, salt, iterations, keylen,
				function (err, hash) {
					if (err) throw cb(err);
					var encryption = salt.toString('base64')+':'+iterations+':'+Buffer(hash,'binary').toString('base64');
					return callback(null, encryption);
				}
			);
		}

		function finalSubscrbInsertHandler(err, hash) {
			if (err) return res.sysErr("ENCRYPT_ERR", err);

			var passwordHash = hash;
			var collection = db.collection('editorial_members');

			collection.update({_id: ObjectID(userId)}, {$set : {
				"password": passwordHash,
				"username": usrname
			}}, function (err, numUpdated) {
				if (err) {
					return res.sysErr("DB_ERR", err);
				}

				if (numUpdated) {
					response.username = username;
					response.password = "updated";
					res.json(response);
				} else {
					return res.sysErr("DB_UPDATE_ERR", err);
				}
			});
		}
	});

module.exports.router = router;
