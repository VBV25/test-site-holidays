<?php
$nameFeedback = htmlspecialchars($_POST['nameFeedback']);
$phoneFeedback = htmlspecialchars($_POST['phoneFeedback']);
$emailFeedback = htmlspecialchars($_POST['emailFeedback']);
$commentsFeedback = htmlspecialchars($_POST['commentsFeedback']);
//

//ОТПРАВКА 


$subject = "Запрос обратной связи";

$headers = "From: 
ЗАКАЗ ЗВОНКА\r\n \r\n 
От посетителя сайта: праздники \r\n \r\n
 
Имя: $nameFeedback \r\n 
Телефон: $phoneFeedback\r\n 
Почта: $emailFeedback\r\n 
 
ДОПОЛНИТЕЛЬНЫЕ КОММЕНТАРИИ\r\n \r\n 
$commentsFeedback\r\n \r\n \r\n";


if (mail(
  "ychoba.boec92.92@yandex.ru",
  $subject,
  $headers

))
  echo "<text style='color: rgb(0, 255, 30);'>Сообщение отправлено</text>"/*Сообщение отправлено*/;
else
  echo "Сообщение не отправлено!"/*Сообщение не отправлено*/;
