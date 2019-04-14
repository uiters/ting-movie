<?php
    // https://domain/server/sessions.php?cinemaID=_&filmID=_&startDate=_&endDate=_
    header("Access-Control-Allow-Origin: *");
    require_once 'Request.php';
    $cinemaID = $_GET['cinemaID'];
    $filmID= $_GET['filmID'];
    $startDate = $_GET['startDate'];
    $endDate = $_GET['endDate'];

    $post =  '{"param":{"url":"/session/film?cinema_id=' . $cinemaID;
    $post .= '&film_id=' . $filmID;
    $post .= '&start_date=' . $startDate;
    $post .= '&end_date=' . $endDate;
    $post .= '&location_id=1';
    $post .= '","keyCache":"no-cache"},"method":"GET"}';
    $request = new Request($post);
    echo $request->post();
?>