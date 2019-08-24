const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public/'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

app.get('/', function(req,res) {
    res.redirect('/index');
});

app.get('/index', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/sandbox', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/sandbox.html'));
});

app.get('/home', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/home.html'));
});
app.get('/projects', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/projects.html'));
});
app.get('/gallery', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/gallery.html'));
});
app.get('/samplegallery', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/galleries/samplegallery.html'));
});
app.get('/skelly', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/galleries/skelly.html'));
});
app.get('/remembering', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/galleries/remembering.html'));
});
app.get('/destination', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/galleries/destination.html'));
});

console.log('nils.korsfeldt.se is now active');
console.log('Running locally at port 3000');