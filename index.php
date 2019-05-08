<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';


$app = new \Slim\App;
$handler = function (Request $request, Response $response) {
    $client = new Nexmo\Client(new Nexmo\Client\Credentials\Basic('8dc33401', 'Dmo3cqYq52BRhhy1'));
    $message = $client->message()->send([
        'to' => '33670181541',
        'from' => '33670181541',
        'text' => $request->getParsedBody()
    ]);
};

$app->get('/webhooks/delivery-receipt', $handler);
$app->post('/webhooks/delivery-receipt', $handler);

$app->run();