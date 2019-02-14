(function() {
    document.getElementById('home').addEventListener('click', function() {
        document.getElementById('iframe').src = '/home';
        document.getElementById('header').style.marginTop = "20vh";
        document.getElementById('iframe').style.height = "65vh";
    });
    document.getElementById('projects').addEventListener('click', function() {
        document.getElementById('iframe').src = '/projects';
        document.getElementById('header').style.marginTop = "10px";
        document.getElementById('iframe').style.height = "85vh";
    });
    document.getElementById('gallery').addEventListener('click', function() {
        document.getElementById('iframe').src = '/gallery';
        document.getElementById('header').style.marginTop = "10px";
        document.getElementById('iframe').style.height = "85vh";
    });
}).call(this);
