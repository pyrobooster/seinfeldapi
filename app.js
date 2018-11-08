const express = require('express');
const mongoose = require('mongoose');
const app = express();
// PORT is a method from Heroku if it not available
// then it will just use port 3000
const PORT = process.env.PORT || 3000;

// one end point that now works
app.get('/', function(request,response) {
    response.json({meme: 'value'});
});

app.get('/characters', function(request,response) {
    response.json([{meme: 'value'}, {meme: 'value'}, {meme: 'value'}]);
});

// ":" allows parameters to be passed in a database to do queries and get results
// try adding random things in the URL and it will add to the object in the function
app.get('/characters/:name', function(request,response) {
    const name = request.params.name;
    response.json({meme:name});
});

app.get('/characters/:name', function(request,response) {
    const name = request.params.name;
    response.json({meme:name});
});

app.get('/coolness-chart', function(request,response) {
    response.json( [{coolnesChart: 3}, {coolnesChart: 2}, {coolnesChart: 1} ]);
});

app.get('/attitude-chart/:att', function(request,response) {
    const attitude = request.params.att;
    response.json( [{attitudeChart: attitude}, {attitudeChart: attitude} ]);
});

app.listen(PORT, function () {
    console.log(`Example app lisitning on ${PORT}!`);
});

