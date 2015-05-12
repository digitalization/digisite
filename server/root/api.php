<?php

//Entities conversion helper
function reverse_entities($s) {
	$s = html_entity_decode($s, ENT_QUOTES, CHARSET);
	$s = preg_replace('~&#x(0*[0-9a-f]{2,5})~ei', 'chr(hexdec("\\1"))', $s);
	$s = preg_replace('~&#([0-9]{2,4})~e', 'chr(\\1)', $s);
	return $s;
}

//Load PHP mailer
require('lib/phpmailer.php');

//Get uri
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = urldecode($uri);

//JSON posted?
$content_type = isset($_SERVER['HTTP_CONTENT_TYPE']) ? $_SERVER['HTTP_CONTENT_TYPE'] : '';
$content_type = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : $content_type;
if (stripos($content_type, 'application/json') === 0) {
	$_POST = json_decode(file_get_contents('php://input'), true);
}

//Contact requests
if (strpos($uri, '/api/contact') !== false) {

	//Don't send empty mails
	if (empty($_POST['name']) or empty($_POST['email']) or empty($_POST['message'])) {
		http_response_code(400);
		echo json_encode(array(
			'code' => 400,
			'message' => 'Missing fields'
		));
		exit;
	}

	//Collect data
	$name		=	$_POST['name'];
	$email		=	$_POST['email'];
	$message	=	$_POST['message'];

	//Instantiate
	$Mail 				= 	new PHPMailer();
	$Mail->CharSet		= 	'utf-8';
	$Mail->From			=	'no-reply@digitalization.nl';
	$Mail->FromName		=	'Digi Website';
	$Mail->Subject 		= 	'Contact request through website';
	$Mail->Body 		= 	"<p>Name: $name<br/>E-mail: $email</p><p>Message: ".nl2br($message)."</p>";
	$Mail->IsHTML(true);
	$Mail->AddAddress('info@digitalization.nl');
	$Mail->AddAddress('adambuczynski@gmail.com');
	$Mail->Send();

	//Output result
	echo json_encode(array(
		'sent' => true
	));
	exit;
}

//Invalid request
http_response_code(404);
echo json_encode(array(
	'code' => 404,
	'message' => 'Whatever you are looking for, it\'s not here.'
));
