// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', function (req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] != 'https') {
            return res.redirect('https://www.google.com');
        } else {
            return next();
        }
    } else {
        return next();
    }
})
var server = app.listen(process.env.PORT || 8080);