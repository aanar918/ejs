// load the things we need
const express = require('express');
const app = express();
const port = 3003;
let json = require('./data/data.json');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    const mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    const tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// calling json test

// let json = require('/Users/mstarsacademy/Desktop/node/ejs-demo/data/data.json');
// console.log(json);

app.get('/quotes', function(req, res) {
    const data = json.quotes;
    // console.log(json.quotes);
    res.render('pages/quotes', {
        data
    });
});

app.get('/*', (res, req) => {
    res.render('pages/not-found');
});

app.listen(port);
console.log(`${port} is the magic port`);
