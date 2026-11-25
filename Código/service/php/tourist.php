<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.2
    @date 2026/11/24
    @since 2026/11/23
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-tourist-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getTourist = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(turista(N,A,D,C,G),format('~w,~w,~w,~w,~w~n',[N,A,D,C,G]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getTourist" => $getTourist
];