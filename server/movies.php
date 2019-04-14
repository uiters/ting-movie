<?php
    //https://domain/server/movies.php
    require_once 'Request.php';
    header("Access-Control-Allow-Origin: *");
    $request = new Request('{"param":{"url":"/film/list?status=2","keyCache":"showing-film"},"method":"GET"}');
    echo $request->post();
?>