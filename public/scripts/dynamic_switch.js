(function() {
    document.getElementById('home').addEventListener('click', function() {
        document.getElementById('iframe').src = 'home.html';
    });
    document.getElementById('projects').addEventListener('click', function() {
        document.getElementById('iframe').src = 'projects.html';
    });
    document.getElementById('gallery').addEventListener('click', function() {
        document.getElementById('iframe').src = 'gallery.html';
    });
}).call(this);
