<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/26
    @since 2026/11/26
*/

    [
        "getTouristsDestinations" => $getTouristsDestinations
    ] = include __DIR__."/../../../service/php/tourists-destinations-guide.php";

    header("Content-Type:application/json");

    $response = [
        'status' => 'success',
        'message' => 'Enviando respuesta desde el servidor',
        'data' => $getTouristsDestinations()
    ];

    echo json_encode($response);
?>