$.get('/home', function() {
    $('#content').load('/home');
});

$('.menu-nav').on('click', '*', function() {
    var pageid = $(this).attr('id');
    $('#content').load('/'+pageid);
});