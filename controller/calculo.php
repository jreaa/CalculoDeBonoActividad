<?php

//API

function index()
{
    $post1 = empty($_POST['periodo1']) ? 0 : (int) $_POST['periodototal'];

    $post5 = empty($_POST['periodo5']) ? 0 : (int) $_POST['periodo5'];

    $calculo = round($post1 - $post5 / $post1);

    if($calculo >= 0 && $calculo <= 399){
        $bono = 0;
    }elseif($calculo >= 400 && $calculo <= 1500){
        $bono = 500;
    }elseif($calculo >= 1501 && $calculo <= 1600){
        $bono = 400;
    }elseif($calculo >= 1601 && $calculo <= 1700){
        $bono = 300;
    }elseif($calculo >= 1701 && $calculo <= 1800){
        $bono = 200;
    }elseif($calculo >= 1801 && $calculo <= 200){
        $bono = 100;
    }elseif($calculo >= 2001){
        $bono = 0;
    }

    return json_encode($bono);
}

echo index();
