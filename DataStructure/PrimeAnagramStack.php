<?php


include "Utility.php";
// include "LinkedList.php";
// include "Stack.php";
// $number=Utility::PrimeNumberr();
// Utility::primeanaqueue($number);
$primeNumber=Utility::primeNumber();
$array[][]=Utility::PrimeNumber2D($primeNumber);
    $s=new Stackclass();
    $l=new LinkList();
    
    echo "Prime anagram using stack\n";
    
    for ($i = 0; $i < 10; $i++) 
    {
        for ($j = 0; $j < 30; $j++) 
        {
             if($array[$i][$j]>0 && $array[$i][$j]<1000)
             {
                $l->insert($array[$i][$j]."\t");
                 
             }
            
        }
         $s->push("\n");
    }
    $l->show();
?>
