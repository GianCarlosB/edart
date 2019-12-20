<?php
	require("PHPMailer.php");
	require("SMTP.php");
	require("Exception.php");
	
	try {
		$mail = new PHPMailer\PHPMailer\PHPMailer();

		$mail->IsSMTP();
		$mail->CharSet = 'UTF-8';

		$mail->Host = "mail.edart.ltda";
		$mail->SMTPDebug = 0;  
		$mail->SMTPAuth = true;
		$mail->Port = 25;
		$mail->Username = "edart@edart.ltda";
		$mail->Password = "3d@RT96!";
		
		$mail->setFrom('edart@edart.ltda', 'Edart');
		$mail->addAddress('edart@edart.ltda', 'Edart');
		$mail->addReplyTo('edart@edart.ltda', 'Edart');

		$mail->isHTML(true);
		$mail->Subject = 'Formulário de cliente enviado pelo site';
		$mail->Body = 'This is the HTML message body <b>in bold!</b>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
		
		$mail->send();
		echo "OK";
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}
?>