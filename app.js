const express = require('express');
const mongoose = require('mongoose');
const app = express();
// PORT is a method from Heroku if it not available
// then it will just use port 3000
const PORT = process.env.PORT || 3000

// one end point that now works
app.get('/', function(request,response) {
    response.json({meme: 'value'})
})

app.listen(PORT, function () {
    console.log(`Example app lisitning on ${PORT}!`);
})

