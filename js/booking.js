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

$(document).ready(function() {
    $('#phoneBooking').mask('+7(999)999-99-99');
    $('#dateBooking').mask('99.99.9999');
});

/**/
/**/
/*если на страницу перешли через карточку, на странице поиска, активируем место исходя от карточки*/
$(document).ready(function() {
    if (location.toString().indexOf('booking_s1') !== -1) {
        $('#locationBooking').val('s1');
        $('#priceBooking').val('7000');
        $('.img_location_preview').addClass('preview_1');
    } else if (location.toString().indexOf('booking_s2') !== -1) {
        $('#locationBooking').val('s2');
        $('#priceBooking').val('20000');
        $('.img_location_preview').addClass('preview_2');
    } else if (location.toString().indexOf('booking_s3') !== -1) {
        $('#locationBooking').val('s3');
        $('#priceBooking').val('1500');
        $('.img_location_preview').addClass('preview_3');
    } else if (location.toString().indexOf('booking_s4') !== -1) {
        $('#locationBooking').val('s4');
        $('#priceBooking').val('1500');
        $('.img_location_preview').addClass('preview_4');
    } else if (location.toString().indexOf('booking_s5') !== -1) {
        $('#locationBooking').val('s5');
        $('#priceBooking').val('10000');
        $('.img_location_preview').addClass('preview_5');
    } else if (location.toString().indexOf('booking_s6') !== -1) {
        $('#locationBooking').val('s6');
        $('#priceBooking').val('15000');
        $('.img_location_preview').addClass('preview_6');
    } else if (location.toString().indexOf('booking_s7') !== -1) {
        $('#locationBooking').val('s7');
        $('#priceBooking').val('15000');
        $('.img_location_preview').addClass('preview_7');
    } else if (location.toString().indexOf('booking_s8') !== -1) {
        $('#locationBooking').val('s8');
        $('#priceBooking').val('10000');
        $('.img_location_preview').addClass('preview_8');
    }
});

/*---При указании количества человек на мероприятии мы скрываем из выбора зоны не подходящие места по количеству человек----*/
$(document).ready(function() {
    $('#peopleBooking').change(function() {
        var peopleBooking = $('#peopleBooking').val();
        var peopleBookingNamber = +peopleBooking;
        if (peopleBookingNamber >= 0) {
            $('#location_optgroup_10').css({
                display: 'contents',
            });
            $('#location_optgroup_20').css({
                display: 'contents',
            });
            $('#location_optgroup_30').css({
                display: 'contents',
            });
        }
        if (peopleBookingNamber >= 11) {
            $('#location_optgroup_10').css({
                display: 'none',
            });
        }
        if (peopleBookingNamber >= 21) {
            $('#location_optgroup_20').css({
                display: 'none',
            });
        }
        if (peopleBookingNamber >= 31) {
            $('#location_optgroup_30').css({
                display: 'none',
            });
        }
    });
});
/*-----*/
/*заполняем стоимость места на выбранные дни*/
$(document).ready(function() {
    $('#locationBooking').change(function() {
        var selectval = $(this).val(); // Получим значение из select со значением #participation

        if (selectval == 's1') {
            $('#priceBooking').val('7000');

            $('.img_location_preview').addClass('preview_1');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's2') {
            $('#priceBooking').val('20000');
            $('.img_location_preview').addClass('preview_2');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_1');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's3') {
            $('#priceBooking').val('2000');
            $('.img_location_preview').addClass('preview_3');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_1');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's4') {
            $('#priceBooking').val('1500');
            $('.img_location_preview').addClass('preview_4');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_1');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's5') {
            $('#priceBooking').val('10000');
            $('.img_location_preview').addClass('preview_5');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_1');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's6') {
            $('#priceBooking').val('15000');
            $('.img_location_preview').addClass('preview_6');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_1');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's7') {
            $('#priceBooking').val('15000');
            $('.img_location_preview').addClass('preview_7');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_1');
            $('.img_location_preview').removeClass('preview_8');
            /**/
        } else if (selectval == 's8') {
            $('#priceBooking').val('10000');
            $('.img_location_preview').addClass('preview_8');
            /* скрываем остальные клвссы*/
            $('.img_location_preview').removeClass('preview_2');
            $('.img_location_preview').removeClass('preview_3');
            $('.img_location_preview').removeClass('preview_4');
            $('.img_location_preview').removeClass('preview_5');
            $('.img_location_preview').removeClass('preview_6');
            $('.img_location_preview').removeClass('preview_7');
            $('.img_location_preview').removeClass('preview_1');
            /**/
        } else {
            $('#priceBooking').val('0');
        }
    });
});

/*считаем стоимость выбранной зоны отдыха в зависимости от количества дней бронирования*/

$(document).ready(function() {
    $(document).mouseover(function() {
        //создаем переменные со значениями из импутов
        var priceLocation = $('#priceBooking').val();
        var dayBooking = $('#dayBooking').val();
        //переводим значения в числа
        var priceLocationNamber = +priceLocation;
        var dayBookingNamber = +dayBooking;
        //выполняем математическое действие
        var priceTotalLocation = priceLocationNamber * dayBookingNamber;
        $('#priceTotalLocationBooking').val(priceTotalLocation);
    });
});

/*считаем стоимость услуг*/
/*питание*/
$(document).ready(function() {
    $('#nutrition_price_booking').val(0);

    $('#form_nutrition_group_booking').change(function() {
        if ($('#nutrition_booking').is(':checked')) {
            $('#nutrition_peoples_booking').prop('disabled', false);
            $('#nutrition_day_booking').prop('disabled', false);
            var nutritionPeoplesBooking = +$('#nutrition_peoples_booking').val();
            var nutritionDayBooking = +$('#nutrition_day_booking').val();

            var nutritionPeoplesBookingResult =
                nutritionPeoplesBooking * nutritionDayBooking * 500;
            $('#nutrition_price_booking').val(nutritionPeoplesBookingResult);
        } else {
            $('#nutrition_price_booking').val(0);
            $('#nutrition_peoples_booking').prop('disabled', true);
            $('#nutrition_day_booking').prop('disabled', true);
        }
    });
});
/*АНИМАТОР*/
$(document).ready(function() {
    $('#animator_price_booking').val(0);

    $('#form_animator_group_booking').change(function() {
        if ($('#animator_booking').is(':checked')) {
            $('#animator_day_booking').prop('disabled', false);
            var animatorDayBooking = $('#animator_day_booking').val();
            var animatorDayBookingNamber = +animatorDayBooking;
            var animatorDayBookingResult = animatorDayBookingNamber * 5000;
            $('#animator_price_booking').val(animatorDayBookingResult);
        } else {
            $('#animator_price_booking').val(0);
            $('#animator_day_booking').prop('disabled', true);
        }
    });
});
/*Ведущий*/
$(document).ready(function() {
    $('#leader_price_booking').val(0);
    $('#form_leader_group_booking').change(function() {
        if ($('#leader_booking').is(':checked')) {
            $('#leader_hour_booking').prop('disabled', false);
            var leaderHourBooking = $('#leader_hour_booking').val();
            var leaderHourBookingNamber = +leaderHourBooking;
            var leaderHourBookingResult = leaderHourBookingNamber * 500;
            $('#leader_price_booking').val(leaderHourBookingResult);
        } else {
            $('#leader_price_booking').val(0);
            $('#leader_hour_booking').prop('disabled', true);
        }
    });
});
/*такси*/
$(document).ready(function() {
    $('#taxi_price_booking').val(0);
    $('#form_taxi_group_booking').change(function() {
        if ($('#taxi_booking').is(':checked')) {
            $('#taxi_km_booking').prop('disabled', false);
            var taxiKmBooking = $('#taxi_km_booking').val();
            var taxiKmBookingNamber = +taxiKmBooking;
            var taxiKmBookingResult = taxiKmBookingNamber * 10 + 50;
            $('#taxi_price_booking').val(taxiKmBookingResult);
            return true;
        } else {
            $('#taxi_price_booking').val(0);
            $('#taxi_km_booking').prop('disabled', true);
        }
    });
});

/**/
/**/

$(document).ready(function() {
    $('#totalPriceBooking').val(0);
    $('#section_form_booking').change(function() {
        //сразу делаем из значения в инпуте число
        var leaderResult = +$('#leader_price_booking').val();
        var taxiResult = +$('#taxi_price_booking').val();
        var animatorResult = +$('#animator_price_booking').val();
        var nutritionResult = +$('#nutrition_price_booking').val();
        var priceTotalResult = +$('#priceTotalLocationBooking').val();
        //складываем
        var totalPriceBooking =
            priceTotalResult +
            taxiResult +
            leaderResult +
            animatorResult +
            nutritionResult;
        $('#totalPriceBooking').val(totalPriceBooking);
    });
});