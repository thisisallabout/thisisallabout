var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var authUser = rootquire('routes/authentication').authUser;

router.route('/article/new').post(authUser, function(req, res, next){
    var d_section = req.body.section,
        d_title = req.body.title,
        d_content = req.body.content,
        d_reviewstatus = req.body.reviewstatus,
        d_datatype = req.body.datatype,
        d_origin_user = req.jwt.user.id,
        article;

    var response = {};

    if (!d_section || !d_title || !d_content || !d_reviewstatus)
        return res.clientErr("FILLOUT_ALL_CONTENTS");

    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    
    var revObjectid = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    
    var d_revision_history = [];
    var d_rev_item = {
        "revision_id": revObjectid,
        "revision_item": d_content,
        "revision_user": d_origin_user
    };
    d_revision_history.push(d_rev_item);

    var article = {section: d_section, title: d_title, revision_history: d_revision_history, datatype: d_datatype, reviewstatus: d_reviewstatus};
    var collection = db.collection('editorial_track');
    collection.insertOne(article, function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            var articleId = result.insertedId;
            response.articleid = articleId;

            res.json(response);
        }
    });
});

router.route('/article/edit').post(authUser, function(req, res, next){
    var d_section = req.body.section,
        d_title = req.body.title,
        d_content = req.body.content,
        d_reviewstatus = req.body.reviewstatus,
        d_origin_user = req.jwt.user.id,
        d_articleid = req.body.articleid,
        article;

    var response = {};

    if (!d_section || !d_title || !d_content || !d_reviewstatus)
        return res.clientErr("FILLOUT_ALL_CONTENTS");

    var collection = db.collection('editorial_track');
    collection.find({_id: ObjectID(d_articleid)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var response = {};
            var S4 = function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            
            var revObjectid = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            
            var d_revision_history = result[0].revision_history;
            var d_rev_item = {
                "revision_id": revObjectid,
                "revision_item": d_content,
                "revision_user": d_origin_user
            };
            d_revision_history.push(d_rev_item);

            collection.update({_id: ObjectID(d_articleid)}, {$set : {
                "section": d_section,
                "title": d_title,
                "revision_history": d_revision_history,
                "reviewstatus": d_reviewstatus
            }}, function (err, numUpdated) {
                if (err) {
                    return res.sysErr("DB_ERR", err);
                }
    
                if (numUpdated) {
                    response.reviewstatus = d_reviewstatus;
                    res.json(response);
                } else {
                    return res.sysErr("DB_UPDATE_ERR", err);
                }
            });
        }
    });
});

router.route('/article/:id').get(authUser, function(req, res, next){
    var d_articleid = req.params.id,
        article;

    var collection = db.collection('editorial_track');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({_id: ObjectID(d_articleid)}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("INVALID_ARTICLEID");
                    } else {
                        res.json(result);
                    }
                });
            } else {
                return res.clientErr("NO_ARTICLE_IN_TRACKER");
            }
        }
    });
});

router.route('/article/:id').delete(authUser, function(req, res, next){
    var d_articleid = req.params.id,
        article;

    var collection = db.collection('editorial_track');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({_id: ObjectID(d_articleid)}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.sysErr("NO_ARTICLE_ID_MATCHED", err);
                    } else {
                        try {
                            collection.deleteOne({_id: ObjectID(d_articleid)});
                            return res.json([]);
                        } catch (e) {
                            return res.sysErr("DB_DEL_ERR", err);
                        }
                    }
                });
            } else {
                return res.clientErr("NO_ARTICLE_IN_TRACKER");
            }
        }
    });
});
    
router.route('/article').get(authUser, function(req, res, next){
    var collection = db.collection('editorial_track');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
                    } else {
                        res.json(result);
                    }
                });
            } else {
                var result = [];
                res.json(result);
            }
        }
    });
});

module.exports.router = router;
