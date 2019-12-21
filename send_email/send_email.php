<?php
	require('PHPMailer.php');
	require('SMTP.php');
	require('Exception.php');
	
	try {
		if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {
			$body = 'Informações fornecidas pelo cliente: ';
			$currentTime = date('d/m/Y H:i:s');
			
			$mail = new PHPMailer\PHPMailer\PHPMailer();
			$mail->SMTPOptions = array(
				'ssl' => array(
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
				)
			);
			
			$mail->IsSMTP();
			$mail->CharSet = 'UTF-8';

			$mail->Host = 'mail.edart.ltda';
			$mail->SMTPDebug = 0;  
			$mail->SMTPAuth = true;
			$mail->Port = 25;
			$mail->Username = 'edart@edart.ltda';
			$mail->Password = '3d@RT96!';
			
			$mail->setFrom('edart@edart.ltda', 'Edart');
			$mail->addAddress('edart@edart.ltda', 'Edart');
			$mail->addReplyTo('edart@edart.ltda', 'Edart');

			$mail->isHTML(true);
			$mail->Subject = 'Contato realizado via website';
			$mail->Body = $body.'<br/><br/>- Nome completo: '.$_POST['name'].'<br/>- E-mail: '.$_POST['email'].'<br/>- Telefone: '.$_POST['phone'].'<br/>- Mensagem: '.$_POST['message'].'<br/><br/>Edart Consultoria Financeira Ltda '.$currentTime;
			$mail->AltBody = $body.' Nome completo: '.$_POST['name'].', E-mail: '.$_POST['email'].', Telefone: '.$_POST['phone'].', Mensagem: '.$_POST['message'].' - Edart Consultoria Financeira Ltda '.$currentTime;
			
			$mail->send();
			echo 'OK';
		} else {
			echo 'Error 400';
		}
	} catch (Exception $e) {
		echo 'Mailer Error: {$mail->ErrorInfo}';
	}
?>