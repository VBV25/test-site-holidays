/*форма отпраки*/
$(document).ready(function() {
    var validName = 1;
    var validSurame = 1;
    var validEmail = 1;
    var validPhone = 1;
    var validPeople = 1;
    var validDate = 1;
    var validDay = 1;
    var validLocation = 1;
    //
    var locationPost = '';
    var validNutritionDayBooking = 0;
    var validAnimatorDayBooking = 0;

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/

    /*имя*/
    $('.form_group_booking').mouseover(function() {
        var nameBooking = $('#nameBooking').val();
        var rv_name = /^[а-яА-ЯЁё]+$/; //для имени и фамилии
        var nameValid = rv_name.test(nameBooking);

        if (nameBooking.length < 2) {
            validName = 1;
            $('.message_fail_name')
                .text('Не менее 2х символов')
                .css({ color: 'red' });
        } else if (nameBooking == '') {
            validName = 1;
            $('.message_fail_name').text('Поле не заполнено').css({ color: 'red' });
        } else if (!nameValid) {
            validName = 1;
            $('.message_fail_name')
                .text('Только русские буквы')
                .css({ color: 'red' });
        }

        // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации
        else {
            $('.message_fail_name').html('Принято').css({ color: 'green' });
            return (validName = 0);
        }
    });
    /*----------фамилия----------*/

    $('.form_group_booking').mouseover(function() {
        var surnameBooking = $('#surnameBooking').val();
        var rv_surname = /^[а-яА-ЯЁё]+$/; //для имени и фамилии
        var surnameValid = rv_surname.test(surnameBooking);

        /**/
        if (surnameBooking.length < 2) {
            validSurame = 1;
            $('.message_fail_surname')
                .text('Не менее 2х символов')
                .css({ color: 'red' });
        } else if (surnameBooking == '') {
            validSurame = 1;
            $('.message_fail_surname')
                .text('Поле не заполнено')
                .css({ color: 'red' });
        } else if (!surnameValid) {
            validSurame = 1;
            $('.message_fail_surname')
                .text('Только русские буквы')
                .css({ color: 'red' });
        } else {
            $('.message_fail_surname').html('Принято').css({ color: 'green' });
            validSurame = 0;
        }
    });
    /*----------почта----------*/
    $('.form_group_booking').mouseover(function() {
        var emailBooking = $('#emailBooking').val();
        var rv_email =
            /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; //для имени и фамилии
        var emailValid = rv_email.test(emailBooking);

        /**/

        if (emailBooking == '') {
            $('.message_fail_email').text('Поле не заполнено').css({ color: 'red' });
            validEmail = 1;
        } else if (!emailValid) {
            $('.message_fail_email').text('Некорректный Email').css({ color: 'red' });
            validEmail = 1;
        } else {
            $('.message_fail_email').html('Принято').css({ color: 'green' });
            validEmail = 0;
        }
    });

    /*----------телефон----------*/
    $('.form_group_booking').mouseover(function() {
        var phoneBooking = $('#phoneBooking').val();
        var rv_phone = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/; //для имени и фамилии
        var phoneValid = rv_phone.test(phoneBooking);
        /**/

        if (phoneBooking == '') {
            validPhone = 1;
            $('.message_fail_phone').text('Поле не заполнено').css({ color: 'red' });
        } else if (!phoneValid) {
            validPhone = 1;
            $('.message_fail_phone')
                .text('Некорректный Телефон')
                .css({ color: 'red' });
        } else {
            $('.message_fail_phone').html('Принято').css({ color: 'green' });
            validPhone = 0;
        }
    });

    /*----------количество людей----------*/

    // $('.form_group_booking').change(function()
    $('#peopleBooking').mouseout(function() {
        var peopleBooking = +$('#peopleBooking').val();
        var locationBooking = $('#locationBooking').val();
        var rv_people = /^[0-9]+$/; //для имени и фамилии
        var peopleValid = rv_people.test(peopleBooking);
        /**/
        if (!peopleValid) {
            validPeople = 1;
            $('.message_fail_people')
                .text('Не корректно заполнено')
                .css({ color: 'red' });
        } else if (peopleBooking == '') {
            validPeople = 1;
            $('.message_fail_people').text('Поле не заполнено').css({ color: 'red' });
        } else if (peopleBooking >= 51) {
            validPeople = 1;
            $('.message_fail_people')
                .text('Слишком много людей')
                .css({ color: 'red' });
        } else if (peopleBooking == 0) {
            validPeople = 1;

            $('.message_fail_people').text('Не может быть 0').css({ color: 'red' });
        } else if ((locationBooking == 's2') & (peopleBooking > 10)) {
            /*-----при выборе определенного места мы не можем чтобы было больше людей---*/
            validPeople = 1;
            $('.message_fail_people')
                .text('Не верное количество')
                .css({ color: 'red' });
        } else if ((locationBooking == 's4') & (peopleBooking > 10)) {
            validPeople = 1;

            $('.message_fail_people')
                .text('Не верное количество')
                .css({ color: 'red' });
        } else if ((locationBooking == 's3') & (peopleBooking > 20)) {
            validPeople = 1;

            $('.message_fail_people')
                .text('Не верное количество')
                .css({ color: 'red' });
        } else if ((locationBooking == 's5') & (peopleBooking > 20)) {
            validPeople = 1;

            $('.message_fail_people')
                .text('Не верное количество')
                .css({ color: 'red' });
        } else if ((locationBooking == 's6') & (peopleBooking > 30)) {
            validPeople = 1;

            $('.message_fail_people')
                .text('Не верное количество')
                .css({ color: 'red' });
        } else if ((locationBooking == 's8') & (peopleBooking > 30)) {
            validPeople = 1;

            $('.message_fail_people')
                .text('Не верное количество')
                .css({ color: 'red' });
        } else {
            /*-------------------------------------------*/
            validPeople = 0;

            $('.message_fail_people').html('Принято').css({ color: 'green' });
        }
    });

    /*----------дата----------*/
    $('.form_group_booking').mouseover(function() {
        var dateBooking = $('#dateBooking').val();
        var rv_date =
            /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](202[2-9])/; //для имени и фамилии
        var dateValid = rv_date.test(dateBooking);
        /**/

        if (dateBooking == '') {
            validDate = 1;
            $('.message_fail_date').text('Поле не заполнено').css({ color: 'red' });
        } else if (!dateValid) {
            validDate = 1;
            $('.message_fail_date').text('Дата не корректна').css({ color: 'red' });
        } else {
            $('.message_fail_date').html('Принято').css({ color: 'green' });
            validDate = 0;
        }
    });
    /*----------количество дней----------*/

    $('.form_group_booking').mouseover(function() {
        var dayBooking = +$('#dayBooking').val();
        var rv_day = /^[0-9]+$/; //для имени и фамилии
        var dayValid = rv_day.test(dayBooking);
        /**/
        if (!dayValid) {
            validDay = 1;
            $('.message_fail_day')
                .text('Не корректно заполнено')
                .css({ color: 'red' });
        } else if (dayBooking == '') {
            validDay = 1;
            $('.message_fail_day').text('Поле не заполнено').css({ color: 'red' });
        } else {
            $('.message_fail_day').html('Принято').css({ color: 'green' });
            validDay = 0;
        }
    });

    /*----------Выбрать место----------*/

    $('.form_group_booking').mouseover(function() {
        var locationBooking = $('#locationBooking').val();
        /**/
        if (locationBooking == 's0') {
            validLocation = 1;
            $('.message_fail_location')
                .text('Место не выбрано')
                .css({ color: 'red' });
        } else {
            $('.message_fail_location').html('Принято').css({ color: 'green' });
            validLocation = 0;
        }
    });

    /*-------при выборе места прописываем в писмо название места-----*/
    $('.form_group_booking').mouseover(function() {
        var locationBooking = $('#locationBooking').val();
        if (locationBooking == 's1') {
            locationPost = 'Место 1 Шатер';
        } else if (locationBooking == 's2') {
            locationPost = 'Место 2 Жемчужина';
        } else if (locationBooking == 's3') {
            locationPost = 'Место 3 Ротонда';
        } else if (locationBooking == 's4') {
            locationPost = 'Место 4 У Лукоморья';
        } else if (locationBooking == 's5') {
            locationPost = 'Место 5 На балу';
        } else if (locationBooking == 's6') {
            locationPost = 'Место 6 Нора';
        } else if (locationBooking == 's7') {
            locationPost = 'Место 7 Поляна';
        } else if (locationBooking == 's8') {
            locationPost = 'Место 8 "Лесная"';
        } else {
            locationPost = 'Место не выбрано';
        }
    });
    /*-------при активации чекбоксов питание и аниматор зависят дни от дней бронирования------*/
    $('#nutrition_day_booking').mouseout(function() {
        var nutrition_day_booking = +$('#nutrition_day_booking').val();
        var dayBooking = +$('#dayBooking').val();
        if (nutrition_day_booking > dayBooking) {
            validNutritionDayBooking = 1;
            $('#err_checked_input_nutrition p')
                .text('Проверьте количество дней услуги и дней  брони')
                .css({ color: 'red' });
        } else {
            validNutritionDayBooking = 0;
            $('#err_checked_input_nutrition p')
                .html('Принято')
                .css({ color: 'green' });
        }
    });
    /*-------при активации чекбоксов питание и аниматор зависят дни от дней бронирования------*/
    $('#animator_day_booking').mouseout(function() {
        var nutrition_day_booking = +$('#animator_day_booking').val();
        var dayBooking = +$('#dayBooking').val();
        if (nutrition_day_booking > dayBooking) {
            validAnimatorDayBooking = 1;
            $('#err_checked_input_animator p')
                .text('Проверьте количество дней услуги и дней брони')
                .css({ color: 'red' });
        } else {
            validAnimatorDayBooking = 0;
            $('#err_checked_input_animator p')
                .html('Принято')
                .css({ color: 'green' });
        }
    });
    //
    //

    $('#btnFormOrderTotal').on('click', function() {
        var nameBooking = $('#nameBooking').val();
        var surnameBooking = $('#surnameBooking').val();
        var emailBooking = $('#emailBooking').val();
        var phoneBooking = $('#phoneBooking').val();
        //
        var peopleBooking = $('#peopleBooking').val();
        var dateBooking = $('#dateBooking').val();
        var dayBooking = $('#dayBooking').val();
        //
        //
        //   var locationBooking = $('#locationBooking').val();
        //
        //
        var nutrition_peoples_booking = $('#nutrition_peoples_booking').val();
        var nutrition_day_booking = $('#nutrition_day_booking').val();
        var nutrition_price_booking = $('#nutrition_price_booking').val();
        //
        var animator_day_booking = $('#animator_day_booking').val();
        var animator_price_booking = $('#animator_price_booking').val();
        //
        var leader_hour_booking = $('#leader_hour_booking').val();
        var leader_price_booking = $('#leader_price_booking').val();
        //
        var taxi_km_booking = $('#taxi_km_booking').val();
        var taxi_price_booking = $('#taxi_price_booking').val();
        //
        var comment_booking = $('#comment_booking').val();
        //
        var totalPriceBooking = $('#totalPriceBooking').val();

        console.log(validName);
        console.log(validSurame);
        console.log(validEmail);
        console.log(validPhone);
        console.log(validPeople);
        console.log(validDate);
        console.log(validDay);
        console.log(validLocation);
        console.log(validNutritionDayBooking);
        console.log(validAnimatorDayBooking);

        if (
            validName == 0 &&
            validSurame == 0 &&
            validPhone == 0 &&
            validEmail == 0 &&
            validPhone == 0 &&
            validPeople == 0 &&
            validDate == 0 &&
            validDay == 0 &&
            validLocation == 0 &&
            validNutritionDayBooking == 0 &&
            validAnimatorDayBooking == 0
        ) {
            console.log('отправлено');

            $.ajax({
                url: 'php/ajaxBooking.php',
                type: 'POST',
                cache: false,
                data: {
                    nameBooking: nameBooking,
                    surnameBooking: surnameBooking,
                    emailBooking: emailBooking,
                    phoneBooking: phoneBooking,
                    peopleBooking: peopleBooking,
                    dateBooking: dateBooking,
                    dayBooking: dayBooking,
                    locationPost: locationPost,
                    nutrition_peoples_booking: nutrition_peoples_booking,
                    nutrition_day_booking: nutrition_day_booking,
                    nutrition_price_booking: nutrition_price_booking,
                    animator_day_booking: animator_day_booking,
                    animator_price_booking: animator_price_booking,
                    leader_hour_booking: leader_hour_booking,
                    leader_price_booking: leader_price_booking,
                    taxi_km_booking: taxi_km_booking,
                    taxi_price_booking: taxi_price_booking,
                    comment_booking: comment_booking,
                    totalPriceBooking: totalPriceBooking,
                },
                dataType: 'html',
                success: function(data) {
                    $('.message_fail_total')
                        .html(
                            'Заявка ОТПРАВЛЕНА, дождитесь звонка администратора для подтверждения'
                        )
                        .css({ color: 'green' });
                },
            });
            return false;
        } else {
            $('.message_fail_total').html(' НЕ отправлено').css({ color: 'red' });
            console.log('Не отправлено');
            return false;
        }
    });
});

//
//
//