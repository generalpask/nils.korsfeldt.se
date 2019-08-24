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

/* OLD CODE
$('#samplegallery').click(function() {
    $('#galleryscroller').load("/samplegallery");
});

$('#skelly').click(function () {
    $('#galleryscroller').load("/skelly");
});

$('#remembering').click(function () {
    $('#galleryscroller').load("/remembering");
});

$('#destination').click(function () {
    $('#galleryscroller').load("/destination");
});
*/

$.get('/gallery', function() {
    $('#galleryscroller').load('/remembering');
});

var galleries = $('a');
for (var i = 0; i < galleries.length; i++) {
    $(galleries[i]).click(function() {
        var id = $(this).attr('id');
        $('#galleryscroller').load('/'+id);
    });
}