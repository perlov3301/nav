<?php
require 'Slim/Slim.php';

$vec1=[
  123=>'{ "id": 123 ,"balance": 1000 ,"credit":200,"interest":3}',
  124=>'{ "id": 124 ,"balance": 2000 ,"credit":400,"interest":2.2}',
  125=>'{ "id": 125 ,"balance": 4000 ,"credit":800,"interest":1.6}'
];

Slim\Slim::registerAutoloader();
$application=new Slim1();
$application->get(
  '/accounts/:id',
  function ($id)
  {
    $vec2=[
      123=>'{ "id": 123 ,"balance": 1000 ,"credit":200,"interest":3}',
      124=>'{ "id": 124 ,"balance": 2000 ,"credit":400,"interest":2.2}',
      125=>'{ "id": 125 ,"balance": 4000 ,"credit":800,"interest":1.6}'
    ];
    echo $vec2[$id];
  }
);
$application->run();
?>