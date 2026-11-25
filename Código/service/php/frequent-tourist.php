<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/26
    @since 2026/11/26
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-frequent-tourist-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getFrequentTourist = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(grupo(_,T,_,destino(D,_),_),format('~w,~w~n',[T,D]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getFrequentTourist" => $getFrequentTourist
];