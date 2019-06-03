/* OLD CODE 
(function() {
    document.getElementById("samplegallery").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/samplegallery"
    })
    document.getElementById("skelly").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/skelly"
    })
    document.getElementById("remembering").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/remembering"
    })
    document.getElementById("destination").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/destination"
    })
}).call(this);
*/

(function loadDefaultGallery() {
    $.get('/samplegallery', function(Data) {
        document.getElementById('galleryscroller').innerHTML = Data
    });
}).call(this);

$('#samplegallery').click(function () {
    $.get('/samplegallery', function(Data) {
        document.getElementById('galleryscroller').innerHTML = Data
    });
});

$('#skelly').click(function () {
    $.get('/skelly', function(Data) {
        document.getElementById('galleryscroller').innerHTML = Data;
    });
});