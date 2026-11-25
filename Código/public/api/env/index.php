<?php
/*
    @author jose.inestroza@unah.edu.hn
    @version 0.1.0
    @date 2026/11/26
    @since 2026/11/26
*/

header("Content-Type:application/json");

[ "env" => $env ] = include __DIR__."/../../../service/php/env.php";

$json = [
    "status" => true,
    "env" => $env()
];

echo json_encode($json);
