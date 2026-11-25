<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/26
    @since 2026/11/26
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-related-destinations-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getRelatedDestinations = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(destino(N,tipo_destino(T)),format('~w,~w~n',[N,T]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getRelatedDestinations" => $getRelatedDestinations
];