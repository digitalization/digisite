<?php

//Determine the path (this file either resides in public/ or in server/)
$path = (strpos(__DIR__, '/server') === false) ? __DIR__.'/../server/' : __DIR__.'/';

//Register the auto loader
require $path.'bootstrap/autoload.php';

//Bootstrap the app
$app = require_once $path.'bootstrap/app.php';

//Run the application
$kernel = $app->make('Illuminate\Contracts\Http\Kernel');
$response = $kernel->handle(
	$request = Illuminate\Http\Request::capture()
);

//Send response
$response->send();
$kernel->terminate($request, $response);