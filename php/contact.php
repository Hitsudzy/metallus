<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['subject'])) {$subject = $_POST['subject']; if ($subject == '') {unset($subject);}}
if (isset($_POST['message'])) {$message = $_POST['message']; if ($message == '') {unset($message);}}
if (isset($_POST['attachment'])) {$attachment = $_POST['attachment']; if ($attachment == '') {unset($attachment);}}
if (isset($name) && isset($email) && isset($subject) && isset($message)){
$address = "info@metallus.ru";
$mes = "Имя: $name \nE-mail: $email \nТема: $subject \nТекст: $message\nВложения: $attachment";
$send = mail ($address,$subject,$message,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
    $redirect_url = '/pages/contact.html';
    header('HTTP/1.1 200 OK');
    header('Location: http://'.$_SERVER['HTTP_HOST'].$redirect_url);
}
?>
