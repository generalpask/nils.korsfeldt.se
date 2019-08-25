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