<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.2
    @date 2026/11/24
    @since 2026/11/23
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-destination-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getDestination = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(destino(N,tipo_destino(T)),format('~w,~w~n',[N,T]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getDestination" => $getDestination
];