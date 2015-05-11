/*exports.render = function(req, res) {
    res.send('Hello World 4');
};*/


'use strict';

exports.render = function(req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' and a stringified 'user' properties
    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(req.user)
    });
};