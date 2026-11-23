<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/22
    @since 2026/11/22
*/

    header("Content-Type:application/json");

    $response = [
        'status' => 'success',
        'message' => 'se envia respuesta del servidor',
        'nombre' => 'nombre1',
        'edad' => '20',
        'dni' => '0801XXXXXXXXX',
        'nacionalidad' => 'hondureño'
    ];

    echo json_encode($response);
?>