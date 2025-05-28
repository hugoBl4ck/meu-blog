console.log("custom.js carregado e pronto para a ação!");

$(document).ready(function() {
    var btn = $('#back-to-top-btn');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});