<?php
namespace Com\LifeMichael\Samples;
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$vec1 = [123=>'{"id":123,"balance":1000,"credit":200,"interest":3}',
  124=>'{"id":124,"balance":2000,"credit":400,"interest":2.2}',
  125=>'{"id":125,"balance":400,"credit":800,"interest":1.6}'
];

$application1 = new \Slim\Slim();
$application1->get(
    '/accounts/:id',
    function ($id)
    {
        global $vec1;
        $vec=$vec1;
//        $vec = [123=>'{"id":123,"balance":1000,"credit":200,"interest":3}',
//                124=>'{"id":124,"balance":2000,"credit":400,"interest":2.2}',
//                125=>'{"id":125,"balance":400,"credit":800,"interest":1.6}'
//        ];
        echo $vec[$id];
    }
);

$application1->post('/accounts', function() use ($application1)
{
    // Code to create new donut
    // Returns a full donut resource with ID
});
$application1->put( '/accounts/:id', 
  function($id) use ($application1)
{
    global $avec1;
    
    // Code to update donut with id, $id
    $arequest=(array)json_decode($application1->request()->getBody());

    $response = $application1->response();
    //$app->response()->header('Content-Type', 'application/json');

    $response->status(200);  // OK!
    // But you can send back other status like 400 which can trigger an error callback.
});

//$application->put('/books/:id', function ($id) {
//    //Update book identified by $id
//});

$application1->delete( '/accounts/:id', function($id) use ($application1)
{
    // Code to delete donut with id, $id
    // Bye bye resource
});

$application1->run();
?>



