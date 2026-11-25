<?php
/*
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/26
    @since 2026/11/26
*/

$pathDataModel = __DIR__."/../../data-model/data-model.pl";
$pathPython = __DIR__."/../python/proccess-routes-data.py";

$fix = fn($text) => str_replace("'","\"",$text);

$getRoutes = fn() => $fix(shell_exec("swipl -s \"$pathDataModel\" -g \"forall(ruta(R,G,_,D,T,L,S),format('~w,~w,~w,~w,~w,~w~n',[R,G,D,T,L,S]))\" -t halt | python3 \"$pathPython\" "));



return [
    "getRoutes" => $getRoutes
];