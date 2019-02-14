var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var dburl = process.env.DB_URL;

var mongoPool = {
    start: function(callback) {
        MongoClient.connect(dburl, function(err, db) {
            assert.equal(null, err);

            var self = this;
            self.db = db;
            callback();
        });
    }
}

module.exports = mongoPool;
