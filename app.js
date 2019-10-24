const express = require('express');
const path = require('path');
const hbs = require('hbs');

// set the port
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public'))); // this allows you to link directly to any files in 'public' without adding that to the path name
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index')); // '/' means 'index.html' and is waiting for something to happen in routes

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

