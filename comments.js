//Create web server
var express = require('express');
var app = express();
//Use middleware to parse JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//Create a list of comments
var comments = [
    { id: 1, author: 'John Doe', text: 'This is my first comment' },
    { id: 2, author: 'Jane Doe', text: 'This is my second comment' }
];
//Create a route to get all comments
app.get('/comments', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(comments);
});
//Create a route to post a comment
app.post('/comments', function(req, res) {
    var newComment = req.body;
    newComment.id = comments.length + 1;
    comments.push(newComment);
    res.setHeader('Content-Type', 'application/json');
    res.send(newComment);
});
//Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});
//End of comments.js