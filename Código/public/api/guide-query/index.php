<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/23
    @since 2026/11/22
*/

    [
        "getGuide" => $getGuide
    ] = include __DIR__."/../../../service/php/guide.php";

    header("Content-Type:application/json");

    $response = [
        'status' => 'success',
        'message' => 'Enviando respuesta desde el servidor',
        'data' => $getGuide()
    ];

    echo json_encode($response);
?>