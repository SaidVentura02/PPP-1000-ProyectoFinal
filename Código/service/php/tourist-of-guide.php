<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/26
    @since 2026/11/26
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-tourist-of-guide-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getTouristOfGuide = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(grupo(_,T,G,_,_),format('~w,~w~n',[T,G]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getTouristOfGuide" => $getTouristOfGuide
];