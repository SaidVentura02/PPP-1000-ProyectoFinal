<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/22
    @since 2026/11/22
*/

    [
        "getTourist" => $getTourist
    ] = include __DIR__."/../../../service/php/tourist.php";

    header("Content-Type:application/json");

    $response = [
        'status' => 'success',
        'message' => 'Enviando respuesta desde el servidor',
        'data' => $getTourist()
    ];

    echo json_encode($response);
?>