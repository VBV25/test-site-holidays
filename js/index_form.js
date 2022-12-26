/*форма отпраки*/
$(document).ready(function() {
    $('#btn_form_order_index').on('click', function() {
        $('#messageShowIndex').hide();
        var email = $('#email').val();
        var rv_email =
            /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; //для имени и фамилии
        var emailValidIndex = rv_email.test(email);
        var fail = '';
        if (!emailValidIndex)
            fail = 'Вы ввели некорректный email' /*Вы ввели некорректный email*/ ;

        if (fail != '') {
            $('#messageShowIndex').html(fail);
            $('#messageShowIndex').show();

            return false;
        }
        $.ajax({
            url: 'php/ajax.php',
            type: 'POST',
            cache: false,
            data: { email: email },
            dataType: 'html',
            success: function(data) {
                /* $('#messageShow').html(data);*/
                $('#messageShowIndex').html('отправлено').css({
                    color: 'rgb(0, 253, 76)',
                });
                $('#messageShowIndex').show();
            },
        });
    });
});

/*Reply-to:$email\r\nContent-type: text/html; cgarset=utf-8\r\n*/