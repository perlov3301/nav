<?php
namespace Com\LifeMichael\Samples;
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$application = new \Slim\Slim();
$application->get(
    '/accounts/:id',
    function ($id)
    {
        $vec = [123=>'{"id":123,"balance":1000,"credit":200,"interest":3}',
                124=>'{"id":124,"balance":2000,"credit":400,"interest":2.2}',
                125=>'{"id":125,"balance":400,"credit":800,"interest":1.6}'
        ];
        echo $vec[$id];
    });
$application->run();
?>



