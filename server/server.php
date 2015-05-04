<?php

//Get uri
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = urldecode($uri);

//Define public dir and get path requested
$public = __DIR__.'/../public';
$requested = $public.$uri;

//Existing file?
if ($uri !== '/' and file_exists($requested)) {
	return false;
}

//Requests for the API?
if (strpos($uri, '/api') !== false) {
	sleep(1);
	require_once $public.'/api.php';
	return;
}

//Send everything else to the client
require_once $public.'/index.html';
