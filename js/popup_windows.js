$(document).ready(function() {
    /*открытие меню навигации мобилки*/
    $('.btn_burger_header_wrapper').click(function() {
        $('.activation_mobile_nav_header').slideToggle();
    });
    /*burger*/
    $('#btn_burger_1').click(function() {
        $('#btn_burger_1').toggleClass('btn_burger_active');
    });
    /*-------------------------*/

    /*открытие и закрытие вкладки контакты*/
    $('.contacts_href').click(function() {
        $('.contacts_wrapper').css({ display: 'flex' });
    });
    $('#btn_close_contacts').click(function() {
        $('.contacts_wrapper').css({ display: 'none' });
    });
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('.contacts_wrapper').css({ display: 'none' });
        }
    });
    /*-----------------*/

    //
    //
    $('#feedback_phone').mask('+7(999)999-99-99');
    //
    //

    /*открытие изакрытие вкладки обратной связи*/
    $('.feedback_href').click(function() {
        $('.feedback_wrapper').css({ display: 'flex' });
    });
    $('#btn_close_Feedback').click(function() {
        $('.feedback_wrapper').css({ display: 'none' });
    });
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('.feedback_wrapper').css({ display: 'none' });
        }
    });
    /*-----------------*/

    //
    //

    /*валидация формы*/

    var validNameFeedback = 1;
    var validEmailFeedback = 1;
    var validPhoneFeedback = 1;
    //
    //

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/
    /*имя*/
    //'#feedback_name'
    $(document).mouseover(function() {
        var nameFeedback = $('#feedback_name').val();
        var rv_nameFeedback = /^[а-яА-ЯЁё]+$/; //для имени и фамилии
        var nameValid = rv_nameFeedback.test(nameFeedback);
        if (nameFeedback.length < 2) {
            validNameFeedback = 1;
            $('.message_fail_name_feedback').text('не менее 2х символов').css({
                color: 'red',
            });
        } else if (nameFeedback == '') {
            validNameFeedback = 1;
            $('.message_fail_name_feedback').text('заполните поле').css({
                color: 'red',
            });
        } else if (!nameValid) {
            validNameFeedback = 1;
            $('.message_fail_name_feedback').text('только русские буквы').css({
                color: 'red',
            });
        }

        // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации
        else {
            $('.message_fail_name_feedback').text('Принято').css({
                color: 'green',
            });
            return (validNameFeedback = 0);
        }
    });

    /*----------телефон----------*/
    // $('#feedback_phone').mouseout(function() {
    $(document).mouseover(function() {
        var phoneFeedback = $('#feedback_phone').val();
        var rv_phoneFeedback = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/; //для имени и фамилии
        var phoneValidFeedback = rv_phoneFeedback.test(phoneFeedback);
        /**/

        if (phoneFeedback == '') {
            validPhoneFeedback = 1;
            $('.message_fail_phone_feedback').text('заполните поле').css({
                color: 'red',
            });
        } else if (!phoneValidFeedback) {
            validPhoneFeedback = 1;
            $('.message_fail_phone_feedback')
                .text('некорректный Телефон')
                .css({ color: 'red' });
        } else {
            $('.message_fail_phone_feedback').html('Принято').css({ color: 'green' });
            validPhoneFeedback = 0;
        }
    });

    /*----------почта----------*/
    // $('#feedback_email').mouseout(function() {
    $(document).mouseover(function() {
        var emailFeedback = $('#feedback_email').val();
        var rv_emailFeedback =
            /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; //для имени и фамилии
        var emailValidFeedback = rv_emailFeedback.test(emailFeedback);
        $('.message_fail_email_feedback').removeClass('.not_error');
        /**/

        if (emailFeedback == '') {
            $('.message_fail_email_feedback').text('заполните поле').css({
                color: 'red',
            });
            validEmailFeedback = 1;
        } else if (!emailValidFeedback) {
            $('.message_fail_email_feedback')
                .text('некорректный Email')
                .css({ color: 'red' });
            validEmailFeedback = 1;
        } else {
            $('.message_fail_email_feedback').text('Принято').css({
                color: 'green',
            });
            validEmailFeedback = 0;
        }
    });
    //
    //
    /*------------ОТПРАВКА ФОРМЫ--------*/
    $('#btn_feedback_order').on('click', function() {
        //
        var nameFeedback = $('#feedback_name').val();
        var phoneFeedback = $('#feedback_phone').val();
        var emailFeedback = $('#feedback_email').val();
        var commentsFeedback = $('#feedback_comments').val();
        //

        console.log(validNameFeedback);
        console.log(validEmailFeedback);
        console.log(validPhoneFeedback);
        //
        if (
            validNameFeedback == 0 &&
            validEmailFeedback == 0 &&
            validPhoneFeedback == 0
        ) {
            console.log('отправлено');

            $.ajax({
                url: 'php/ajaxFeedback.php',
                type: 'POST',
                cache: false,
                data: {
                    nameFeedback: nameFeedback,
                    phoneFeedback: phoneFeedback,
                    emailFeedback: emailFeedback,
                    commentsFeedback: commentsFeedback,
                },
                dataType: 'html',
                success: function(data) {
                    $('.message_form_feedback')
                        .html('Заявка ОТПРАВЛЕНА, ожидайте звонка')
                        .css({ color: 'green' });
                },
            });
            return false;
        } else {
            $('.message_form_feedback').html(' НЕ отправлено').css({ color: 'red' });
            console.log('Не отправлено');
            return false;
        }
        //
        //
    });
});