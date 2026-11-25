<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.2
    @date 2026/11/24
    @since 2026/11/23
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-guide-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getGuide = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(guia(N,G),format('~w,~w~n',[N,G]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getGuide" => $getGuide
];