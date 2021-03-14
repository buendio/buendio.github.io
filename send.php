<?php 
	$passw = $_POST['passw'];
    $email = $_POST['email'];
    $name = $_POST['name'];
    
   // $mailto = "mail@deil.in";

   if( isset($_POST['sendForm'])){
    mail($mailto, 'Заявка с сайта', "E-mail: ".$email.". \r\nВаше имя: ".$name.". \r\nПароль: ".$passw);
  }

?>