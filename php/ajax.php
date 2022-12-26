<?php

$email = htmlspecialchars($_POST['email']);


if ($email == "") {
    echo 'Заполните поле'/*Заполните все поля*/;
    exit;
}


//ОТПРАВКА 

$headers = "From: закрытые акции запрос $email\r\n";
if (mail("ychoba.boec92.92@yandex.ru", $email, $headers))
    echo "<text style='color: rgb(0, 255, 30);'>Сообщение отправлено</text>"/*Сообщение отправлено*/;
else
    echo "Сообщение не отправлено!"/*Сообщение не отправлено*/;
