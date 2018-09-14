<?php

$s=file_get_contents("Stock.json");
$json=json_decode($s,true);

//echo $json;

    $a=array("Apple","Reliance","TCS");
    $n=sizeof($json);
    $sum=0;

    for($i=0;$i<$n;$i++)
    {
        $k=$a[$i];
        $sum1=0;
        $n1=sizeof($k);

        echo "Stock report of ".$k."\n";

        for($j=0;$j<$n1;$j++)
        {
           
            $numOfShare=$json[$k][$j]["numOfShare"];
            $price=$json[$k][$j]["price"];

           
            echo "numOfShare-".$numOfShare."\n";
            echo "price-".$price."\n";

            $ammount=$numOfShare*$price;
            echo "value of ".$k." stock = ". $ammount."\n";
            echo "\n";

            $sum=$sum+$ammount;
            
            //echo $sum."\n";
        }   
        }
        echo "total value : ".$sum."\n";
?>