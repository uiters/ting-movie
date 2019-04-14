<?php
    //https://domain/server/movies.php?movieID=
    header("Access-Control-Allow-Origin: *");
    require_once 'Request.php';
    $movieID = $_GET['movieID'];
    $post =  '{"param":{"url":"/film/detail?film_id='.$movieID;
    $post .= '","keyCache":"movie-detail' .$movieID . '"},"method":"GET"}';
    $request = new Request($post);
    echo $request->post();
?>