/*скролл страницы вверх*/
$(document).ready(function() {
    //hide #back-top farst (скрыть #назад-верхний фарст)
    $('#back-top').hide();
    //fade in#back-top (исчезает в#back-top)
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        //scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    });
});

/*открываем акцию*/
$(document).ready(function() {
    $('.action_card_in_list').click(function() {
        $('.action_open_bg').css({ display: 'block' });
        $(this).addClass('action_open');
        $(this)
            .children('.action_info')
            .children('.action_info_description')
            .css({ display: 'none' });
        $(this)
            .children('.action_info')
            .children('.action_info_detailed')
            .css({ display: 'block' });
        $(this).children('img').addClass('action_open_img');
        $(this).children('.text_esc').css({ display: 'inline' });
    });
    $('.btn-close').click(function() {
        $('.action_open_bg').css({ display: 'none' });
        $('.action_card_in_list').removeClass('action_open');
        $('.action_info_description').css({ display: 'block' });
        $('.action_info_detailed').css({ display: 'none' });
        $('.action_card_in_list img').removeClass('action_open_img');
        $('.text_esc').css({ display: 'none' });
    });
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('.action_open_bg').css({ display: 'none' });
            $('.action_card_in_list').removeClass('action_open');
            $('.action_info_description').css({ display: 'block' });
            $('.action_info_detailed').css({ display: 'none' });
            $('.action_card_in_list img').removeClass('action_open_img');
            $('.text_esc').css({ display: 'none' });
        }
    });
});