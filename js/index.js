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

/*смена фонов на паралаксе*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 2850) {
            $('#parolacs_bg').removeClass('bg_1');
            $('#parolacs_bg').removeClass('bg_4');
            $('#parolacs_bg').addClass('bg_2');
        }
        if ($(this).scrollTop() > 5551) {
            $('#parolacs_bg').removeClass('bg_1');
            $('#parolacs_bg').removeClass('bg_2');
            $('#parolacs_bg').addClass('bg_4');
        }
        if ($(this).scrollTop() < 2850) {
            $('#parolacs_bg').removeClass('bg_4');
            $('#parolacs_bg').removeClass('bg_2');
            $('#parolacs_bg').addClass('bg_1');
        }
    });
});

/*открываем коммнтарии*/
$(document).ready(function() {
    $('.reviews').click(function() {
        $('.reviews_open_bg').css({ display: 'block' });
        $(this).addClass('reviews_open');
        $(this).children('.reviews_content').addClass('reviews_open_content');
        $(this)
            .children('.reviews_content')
            .children('p.reviews_text')
            .addClass('reviews_open_text');
    });
    $('.reviews-btn-close').click(function() {
        $('.reviews_open_bg').css({ display: 'none' });
        $('.reviews').removeClass('reviews_open');
        $('.reviews_content').removeClass('reviews_open_content');
        $('p.reviews_text').removeClass('reviews_open_text');
    });

    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('.reviews_open_bg').css({ display: 'none' });
            $('.reviews').removeClass('reviews_open');
            $('.reviews_content').removeClass('reviews_open_content');
            $('p.reviews_text').removeClass('reviews_open_text');
        }
    });
});

/*анимация инструкции бронирования*/
var block_show = false;

function scrollTracking() {
    if (block_show) {
        return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.manual_wrapper').offset().top;
    var eh = $('.manual_wrapper').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        block_show = true;

        // Код анимации
        $('.manual_1').css({ transform: 'rotateY(0deg)' });
        //--
        $('.arrow_right_1').css({
            'transition-delay': '1s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_2').css({
            'transition-delay': '2s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.arrow_right_2').css({
            'transition-delay': '3s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_3').css({
            'transition-delay': '4s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.arrow_right_3').css({
            'transition-delay': '5s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_4').css({
            'transition-delay': '6s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.arrow_right_4').css({
            'transition-delay': '7s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_5').css({
            'transition-delay': '8s',
            transform: 'rotateY(0deg)',
        });
        /*--------*/
    }
}

$(window).scroll(function() {
    scrollTracking();
});

$(document).ready(function() {
    scrollTracking();
});
/*открытие изакрытие вкладки обратной связи*/
$(document).ready(function() {
    $('.booking_cell').click(function() {
        $('.feedback_wrapper').css({ display: 'flex' });
    });
    $('#btn_close_Feedback').click(function() {
        $('.feedback_wrapper').css({ display: 'none' });
    });
});
$(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
        $('.feedback_wrapper').css({ display: 'none' });
    }
});
/*переброс на страницу поиска с нужным якорем*/
$(document).ready(function() {
    $('#btn_form_order_search').click(function() {
        var peopleIndex = +$('#people_index').val();
        if (peopleIndex >= 0 && peopleIndex <= 10) {
            $('#btn_form_order_search').attr('href', 'location.html#anchor_10');
        } else if (peopleIndex >= 11 && peopleIndex <= 20) {
            $('#btn_form_order_search').attr('href', 'location.html#anchor_20');
        } else if (peopleIndex >= 21 && peopleIndex <= 30) {
            $('#btn_form_order_search').attr('href', 'location.html#anchor_30');
        } else if (peopleIndex >= 31 && peopleIndex <= 50) {
            $('#btn_form_order_search').attr('href', 'location.html#anchor_50');
        } else {
            $('#btn_form_order_search').attr('href', 'location.html#anchor_all');
        }
    });
});