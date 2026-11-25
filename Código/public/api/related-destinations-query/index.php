<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/26
    @since 2026/11/26
*/

    [
        "getRelatedDestinations" => $getRelatedDestinations
    ] = include __DIR__."/../../../service/php/related-destinations-tourist.php";

    header("Content-Type:application/json");

    $response = [
        'status' => 'success',
        'message' => 'Enviando respuesta desde el servidor',
        'data' => $getRelatedDestinations()
    ];

    echo json_encode($response);
?>