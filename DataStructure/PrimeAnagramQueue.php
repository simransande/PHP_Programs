<?php
include "Utility.php";
// include "Queue1.php";
// include "LinkedList.php";
// $number=Utility::PrimeNumberr();
// Utility::primeanaqueue($number);
try{
$primeNumber=Utility::primeNumber();
    $array[][]=Utility::PrimeNumber2D($primeNumber);
    
    $q=new Queue();
    $l=new LinkList();
   
    echo "Prime Anagram using Queue\n";
   
    for ($i = 0; $i < 10; $i++) 
    {
        for ($j = 0; $j < 30; $j++) 
        {
             if($array[$i][$j]>0 && $array[$i][$j]<1000)
             {
                  throw new Exception("Value must be 1 or below");
                $l->insert($array[$i][$j]."\t");
                 
             }
            
        }


         $q->enqueue("\n");
    }
    $l->show();

}catch(Exception $e)
{
    echo " ";
}
?>