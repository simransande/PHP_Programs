<?php

//$r=readfile("Rise,Pulse,Wheat.json");
$s=file_get_contents("RisePulseWheat.json");  //to get file
//echo $s;
$json=json_decode($s,true);   //for geting file from json into php
//echo $json;

    $a=array("rice","pulse","wheat");
    $n=sizeof($json);
    $sum=0;

    for($i=0;$i<$n;$i++)
    {
        $k=$a[$i];
        $sum1=0;
        $n1=sizeof($json[$k]);
        // for($k=0;$k<$n1;$n1++)

        echo "----detail of ".$k."----\n";

        for($j=0;$j<$n1;$j++)
        {
            $name=$json[$k][$j]["name"];
            $price=$json[$k][$j]["price"];
            $weight=$json[$k][$j]["weight"];
           
            echo "name-".$name."\n";
            echo "price-".$price."Rs\n";
            echo "weight-".$weight."\n";
        }
        echo "-------------------------\n";
    }
?>