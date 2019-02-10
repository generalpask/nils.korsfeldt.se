(function() {
    document.getElementById('home').addEventListener('click', function() {
        document.getElementById('iframe').src = 'home.html';
        document.getElementById('header').style.marginTop = "20vh";
        document.getElementById('iframe').style.height = "65vh";
    });
    document.getElementById('projects').addEventListener('click', function() {
        document.getElementById('iframe').src = 'projects.html';
        document.getElementById('header').style.marginTop = "10px";
        document.getElementById('iframe').style.height = "85vh";
    });
    document.getElementById('gallery').addEventListener('click', function() {
        document.getElementById('iframe').src = 'gallery.html';
        document.getElementById('header').style.marginTop = "10px";
        document.getElementById('iframe').style.height = "85vh";
    });
}).call(this);
