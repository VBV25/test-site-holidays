/*открываем фильтр*/
$(document).ready(function() {
    $('#open_filter_button').click(function() {
        $('.filters').toggleClass('filters_active');
    });
    $('#btn_filter').click(function() {
        $('.filters').toggleClass('filters_active');
    });
});
$(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
        $('.filters').removeClass('filters_active');
    }
});

/*открытие и закрытие подробных карточек мест*/
$(document).ready(function() {
    $('.location_mark').click(function() {
        $(this).next().addClass('card_active');
    });
});
$(document).ready(function() {
    $('.btn-close').click(function() {
        $('.card_wrapper').removeClass('card_active');
    });
});

$(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
        $('.card_wrapper').removeClass('card_active');
    }
});

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

/**/

/**/

/**/

/*фильтр карточек*/

/*если на страницу перешли через поиск на главной активируем чекбоксы исходя от значения в инпуте*/
$(document).ready(function() {
    if (location.toString().indexOf('anchor_10') !== -1) {
        $('#group_1_check').prop('checked', true);
        $('#group_all_check').prop('checked', false);
    } else if (location.toString().indexOf('anchor_20') !== -1) {
        $('#group_2_check').prop('checked', true);
        $('#group_all_check').prop('checked', false);
    } else if (location.toString().indexOf('anchor_30') !== -1) {
        $('#group_3_check').prop('checked', true);
        $('#group_all_check').prop('checked', false);
    } else if (location.toString().indexOf('anchor_50') !== -1) {
        $('#group_4_check').prop('checked', true);
        $('#group_all_check').prop('checked', false);
    } else {
        $('#group_all_check').prop('checked', true);
    }
});
/*меняем отображение и активность кнопки показать все при выборе других пунктов фильтрации*/
$(document).ready(function() {
    $('.filter-close').click(function() {
        /*убераем активность с кнопки показать все при выборе другого фильтра и скрываем кнопку показать все*/
        if ($('.filter-close').is(':checked')) {
            $('#group_all_check').prop('checked', false);
        } else {
            /*при НЕ активности кнопок фильтра по количеству отображаем  кнопку показать все*/
            $('#group_all_check').prop('checked', true);
        }
    });
});

$(document).ready(function() {
    $('#group_all_check').click(function() {
        $('.filter-close').prop('checked', false);
    });
});

/**/

/**/

/*при начальном открытии страницы показываем карточки начально активного фильтра*/

$(document).ready(function() {
    if ($('#group_2_check').is(':checked')) {
        $('.group_2').css({ display: 'flex' });
        $('.zone_2').css({
            color: 'rgb(22, 124, 19)',
        });
        return false;
    }
});

$(document).ready(function() {
    if ($('#group_1_check').is(':checked')) {
        $('.group_1').css({ display: 'flex' });
        $('.zone_1').css({
            color: 'rgb(0, 183, 255)',
        });

        return false;
    }
});

$(document).ready(function() {
    if ($('#group_3_check').is(':checked')) {
        $('.group_3').css({ display: 'flex' });
        $('.zone_3').css({
            color: 'rgb(247, 0, 255)',
        });
        return false;
    }
});

$(document).ready(function() {
    if ($('#group_4_check').is(':checked')) {
        $('.group_4').css({ display: 'flex' });
        $('.zone_4').css({
            color: 'rgb(233, 74, 0)',
        });
        return false;
    }
});

$(document).ready(function() {
    if ($('#group_all_check').is(':checked')) {
        $('.location_card_in_list').css({ display: 'flex' });
        return false;
    }
});

/**/

/**/

/*ОТОБРАЖАЕМ НУЖНЫЕ КАРТОЧКИ ПРИ КЛИКЕ НА КНОПКУ ПОКАЗАТЬ*/
$(document).ready(function() {
    $('#btn_filter').click(function() {
        $('.location_card_in_list').css({ display: 'none' });
        $('.zone').css({
            color: 'white',
        });
        $(document).ready(function() {
            if ($('#group_2_check').is(':checked')) {
                $('.group_2').css({ display: 'flex' });
                $('.zone_2').css({
                    color: 'rgb(22, 124, 19)',
                });
                return false;
            }
        });

        $(document).ready(function() {
            if ($('#group_1_check').is(':checked')) {
                $('.group_1').css({ display: 'flex' });
                $('.zone_1').css({
                    color: 'rgb(0, 183, 255)',
                });
                return false;
            }
        });

        $(document).ready(function() {
            if ($('#group_3_check').is(':checked')) {
                $('.group_3').css({ display: 'flex' });
                $('.zone_3').css({
                    color: 'rgb(247, 0, 255)',
                });
                return false;
            }
        });

        $(document).ready(function() {
            if ($('#group_4_check').is(':checked')) {
                $('.group_4').css({ display: 'flex' });
                $('.zone_4').css({
                    color: 'rgb(233, 74, 0)',
                });
                return false;
            }
        });

        $(document).ready(function() {
            if ($('#group_all_check').is(':checked')) {
                $('.group_all').css({ display: 'flex' });
                return false;
            }
        });
        /*скролим*/
        $('body,html').animate({ scrollTop: 750 }, 1200);
    });
});

/*при выделении места на карте появляется мини картинка*/

$(document).ready(function() {
    $('.location_mark').mouseover(function() {
            $(this).children('.mini_logo_location').css({ display: 'block' });
        }),
        $('.location_mark').mouseout(function() {
            $(this).children('.mini_logo_location').css({ display: 'none' });
        });
});

/** */

/** */
/*открытие карточек при клике на подробнее*/
$(document).ready(function() {
    $('.btn_card_info_1').click(function() {
        $('.card_wrapper_1').addClass('card_active');
    });
    $('.btn_card_info_2').click(function() {
        $('.card_wrapper_2').addClass('card_active');
    });
    $('.btn_card_info_3').click(function() {
        $('.card_wrapper_3').addClass('card_active');
    });
    $('.btn_card_info_4').click(function() {
        $('.card_wrapper_4').addClass('card_active');
    });
    $('.btn_card_info_5').click(function() {
        $('.card_wrapper_5').addClass('card_active');
    });
    $('.btn_card_info_6').click(function() {
        $('.card_wrapper_6').addClass('card_active');
    });
    $('.btn_card_info_7').click(function() {
        $('.card_wrapper_7').addClass('card_active');
    });
    $('.btn_card_info_8').click(function() {
        $('.card_wrapper_8').addClass('card_active');
    });
});
/** */
/** */
/** */