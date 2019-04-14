<?php
    //https://domain/server/locations.php
    require_once 'Request.php';
    header("Access-Control-Allow-Origin: *");
    $request = new Request('{"param":{"url":"/cinema/list?location_id=1","keyCache":"main-cinemas1"},"method":"GET"}');
    echo $request->post();
?>