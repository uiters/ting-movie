<?php
    //https://domain/server/locations.php

    require_once 'Request.php';
    header("Access-Control-Allow-Origin: *");
    $request = new Request('{"param":{"url":"/cinema/location","keyCache":"main-location"},"method":"GET"}');
    echo $request->post();
?>