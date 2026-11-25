<?php
/*
    @author jose.inestroza@unah.edu.hn
    @version 0.1.0
    @date 2026/11/26
    @since 2026/11/26
*/

$env = fn($path = __DIR__."/../../.env") => array_reduce(
    file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES), 
    function($carry, $line){
        $parts = explode("=", $line,2);
        if(count($parts) === 2 && $line[0] != "#"){
            $carry[trim($parts[0])] = trim($parts[1]);  
        }
        return $carry;
    }, []
);

return [
    "env" => $env
];