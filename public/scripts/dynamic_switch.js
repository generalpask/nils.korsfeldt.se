/* OLD CODE
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
*/
$.get('/home', function(Data) {
    document.getElementById('content').innerHTML = Data;
});
$('#home').click(function() {
    $('#content').load('/home');
    $("#header").css("margin-top", "20vh");
});
$('#projects').click(function() {
    $('#content').load('/projects');
    $("#header").css("margin-top", "10px");
});
$('#gallery').click(function() {
    $('#content').load('/gallery');
    $("#header").css("top", "10px");
});