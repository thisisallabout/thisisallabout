const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const app = express();
const path = require('path');
const url = require('url');
const UAParser = require('ua-parser-js');

process.env.NODE_ENV = 'dev';

hostn = 'https://thisisallabout.com/';
if (process.env.NODE_ENV == 'dev') {
    hostn = 'http://localhost:3000/';
}

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('thisisallabout app listening on port 3000!\n');
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    var parser = new UAParser();
    var ua = req.headers['user-agent'];
    var browserName = parser.setUA(ua).getBrowser().name;
    var fullBrowserVersion = parser.setUA(ua).getBrowser().version;
    if (fullBrowserVersion) {
        var browserVersion = fullBrowserVersion.split(".",1).toString();
        var browserVersionNumber = Number(browserVersion);

        if (browserName == 'IE' && browserVersion <= 10) {
            res.sendFile(path.join(__dirname, '/notice/index.html'));
        } else if (browserName == 'Mobile Safari' && browserVersion <= 9) {
            res.sendFile(path.join(__dirname, '/notice/index.html'));
        } else if (browserName == 'Safari' && browserVersion <= 9) {
            res.sendFile(path.join(__dirname, '/notice/index.html'));
        } else {
            next();
        }
    } else {
        next();
    }
});


app.use("/", expressStaticGzip(path.join(__dirname, '/dist/'), { indexFromEmptyFile: false }));

app.get('/data_publish_ready/:id/:type', function (request, response) {
    if (request.params.type) {
        response.sendFile(path.join(__dirname, '/data_publish_ready/' + request.params.id + '/' + request.params.type));
    } else {
        response.sendFile(path.join(__dirname, '/data_publish_ready/' + request.params.id));
    }
});

app.get('/remote/:type', function (request, response) {
    response.sendFile(path.join(__dirname, '/remote/' + request.params.type));
});

app.get('/res/:type', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/res/' + request.params.type));
});

app.get('/styles/:type', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/styles/' + request.params.type));
});

app.get('/*', function (request, response) {
    if (request.url.endsWith('.png') || request.url.endsWith('.ico') || request.url.endsWith('.jpg') || request.url.endsWith('.svg')) {
        response.sendFile(path.join(__dirname, '/dist/res/' + request.url.split('/')[1]));
    } else {
        if (request.url.split('/').length <= 2) {
            if (request.url.endsWith('/')) {
                response.redirect(301, request.url.slice(0, -1))
            } else {
                response.sendFile(path.join(__dirname, '/dist/index.html'));
            }
        } else {
            if (request.url.split('/')[1] == 'dataset') {
                response.sendFile(path.join(__dirname, '/dataset/' + request.url.split('/')[2]));
                return;
            }

            var param = '';
            if (request.url.split('/')[1] != '' && 
                request.url.split('/')[2] != null) param = '?type=' + request.url.split('/')[2]
            
            response.redirect(301, hostn + request.url.split('/')[1] + param)
        }
    }
});