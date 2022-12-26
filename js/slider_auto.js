$('#fader img:gt(0)').hide();
setInterval(function() {
    $('#fader :first-child')
        .fadeTo(500, 0)

    .next('.img')
        /**/

    .fadeTo(800, 1)

    .appendTo('#fader')
        .end();
}, 5000);