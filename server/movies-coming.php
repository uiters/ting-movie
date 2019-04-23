<?php
    //https://domain/server/movies-coming.php
    require_once 'Request.php';
    header("Access-Control-Allow-Origin: *");
    $request = new Request('{
        "param": {
            "url": "/film/list?status=1",
            "keyCache": "main-films-coming"
        },
        "method": "GET"
    }');
    echo $request->post();
?>