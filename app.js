const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public/'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

router.get('/',function(req,res){
    res.redirect('/index');
});

router.get('/index',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/views/home.html'));
});
router.get('/projects',function(req,res){
    res.sendFile(path.join(__dirname+'/views/projects.html'));
});
router.get('/gallery',function(req,res){
    res.sendFile(path.join(__dirname+'/views/gallery.html'));
});
router.get('/samplegallery',function(req,res){
    res.sendFile(path.join(__dirname+'/views/galleries/samplegallery.html'));
});
router.get('/skelly',function(req,res){
    res.sendFile(path.join(__dirname+'/views/galleries/skelly.html'));
});
router.get('/remembering',function(req,res){
    res.sendFile(path.join(__dirname+'/views/galleries/remembering.html'));
});
router.get('/destination',function(req,res){
    res.sendFile(path.join(__dirname+'/views/galleries/destination.html'));
});

console.log('nils.korsfeldt.se is now active')
console.log('Running locally at port 3000');