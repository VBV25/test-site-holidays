<?php
$nameBooking = htmlspecialchars($_POST['nameBooking']);
$surnameBooking = htmlspecialchars($_POST['surnameBooking']);
//
$emailBooking = htmlspecialchars($_POST['emailBooking']);
$phoneBooking = htmlspecialchars($_POST['phoneBooking']);
//
$peopleBooking = htmlspecialchars($_POST['peopleBooking']);
$dateBooking = htmlspecialchars($_POST['dateBooking']);
//
$dayBooking = htmlspecialchars($_POST['dayBooking']);
$locationBooking = htmlspecialchars($_POST['locationPost']);

//
$nutrition_peoples_booking = htmlspecialchars($_POST['nutrition_peoples_booking']);
$nutrition_day_booking = htmlspecialchars($_POST['nutrition_day_booking']);
$nutrition_price_booking = htmlspecialchars($_POST['nutrition_price_booking']);
//
$animator_day_booking = htmlspecialchars($_POST['animator_day_booking']);
$animator_price_booking = htmlspecialchars($_POST['animator_price_booking']);
//
$leader_hour_booking = htmlspecialchars($_POST['leader_hour_booking']);
$leader_price_booking = htmlspecialchars($_POST['leader_price_booking']);
//
$taxi_km_booking = htmlspecialchars($_POST['taxi_km_booking']);
$taxi_price_booking = htmlspecialchars($_POST['taxi_price_booking']);
//
$comment_booking = htmlspecialchars($_POST['comment_booking']);

//


$totalPriceBooking = htmlspecialchars($_POST['totalPriceBooking']);



//ОТПРАВКА 

$subject = "Запрос на бронирование";
$spase = ".";
$headers = "From:\r\n \r\n $spase\r\n $spase\r\n $spase\r\n ЗАЯВКА НА БРОНЬ\r\n \r\n 
От посетителя сайта: праздники \r\n \r\n
 Дата, на которую хотят забронировать: $dateBooking\r\n 
 Имя: $nameBooking \r\n 
 Фамилия: $surnameBooking\r\n 
 Почта: $emailBooking\r\n 
 Телефон: $phoneBooking\r\n 
 Количество людей: $peopleBooking\r\n 
 Количество дней бронирования: $dayBooking\r\n 
 Выбранная локация: $locationBooking\r\n \r\n 
 
 Дополнительные услуги\r\n 
 
 Питание\r\n \r\n 
 Количество персон: $nutrition_peoples_booking\r\n 
 Количество дней питания: $nutrition_day_booking\r\n  
 Сумма: $nutrition_price_booking руб.\r\n \r\n \r\n 
 
 Аниматор\r\n \r\n 
 Количество дней : $animator_day_booking\r\n 
 Сумма: $animator_price_booking руб.\r\n \r\n \r\n \r\n

 Ведущий\r\n \r\n 
 Количество часов : $leader_hour_booking\r\n 
 Сумма: $leader_price_booking руб.\r\n \r\n \r\n \r\n

 Детское такси\r\n \r\n 
 Километры : $taxi_km_booking\r\n 
 Сумма: $taxi_price_booking руб.\r\n \r\n \r\n \r\n

 ДОПОЛНИТЕЛЬНЫЕ КОММЕНТАРИИ\r\n \r\n 
  $comment_booking\r\n \r\n \r\n

ОБЩАЯ СТОИМОСТЬ \r\n \r\n 
 $totalPriceBooking руб.\r\n \r\n \r\n

 $spase\r\n $spase\r\n $spase\r\n $spase\r\n";


if (mail(
    "ychoba.boec92.92@yandex.ru",
    $subject,
    $headers

))
    echo "<text style='color: rgb(0, 255, 30);'>Сообщение отправлено</text>"/*Сообщение отправлено*/;
else
    echo "Сообщение не отправлено!"/*Сообщение не отправлено*/;
