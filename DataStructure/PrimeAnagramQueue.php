<?php
include "Utility.php";
// include "Queue1.php";
include "LinkedList.php";
// $number=Utility::PrimeNumberr();
// Utility::primeanaqueue($number);
// try{
    $array=Utility::primeNumber();
$n1=0;
$n2=0;
$k=0;

$status=false;
$newarray=[];
for ($i=0; $i < count($array)-1; $i++) { 
    for ($j=$i+1; $j <count($array) ; $j++) { 
        $n1=$array[$i];
        $n2=$array[$j];
         $status=Utility::anagram($n1, $n2);
        if($status==true)       
        {
            $newarray[$k++]=$n1;
            $newarray[$k++]=$n2;
            
        }
    }
}
$v=0;
$a=array_fill(0,10,array_fill(0,30,0));
for($i=0;$i<10;$i++)
{
    $max=100;
    
    for($j=0;$j<30;$j++)
    {
        
        try{
        if(($array[$v]<($i+1)*$max) )//&& $array[$v]>0)
        {
            $a[$i][$j]=$newarray[$v];
            $v++;
        }
    }catch(Exception $e)
    {
        echo "error";
    }
    
    }
}

echo "Prime Numbers that are Anagram\n";

for($i=0;$i<10;$i++)
{    
        for($j=0;$j<30;$j++)
        {   
            if($a[$i][$j]>0 && $a[$i][$j]<1000)
            {
               
                echo $a[$i][$j]."\t";   
            }
        }
        echo "";
}
return $a;

// $primeNumber=Utility::primeNumber();
//     $array[][]=Utility::PrimeNumber2D($primeNumber);
    
//     $q=new Queue();
//     $l=new LinkList();
   
//     echo "Prime Anagram using Queue\n";

//     $a=[[]];
//     $arr = array( 1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 );
//     $r = 10;
//      $c = 27;

//     // $myvalue=range($primeVal[$arr[0]],$primeVal[$arr[1]]);
   
//     // print_r($a);
//      //  $k, $b;
//     echo "PRIME NUMBERS 1-1000\n";

//     // $a = array_fill(0,0);
//     for ($i = 0; $i < count($arr) - 1; $i++)
//     {
//         $k = -1;
//         $m = $arr[$i];
//          $m1 = $arr[$i + 1];
//         for ($j = 0; $j < count($primeNumber) ;$j++)
//         {
//             if ($primeNumber[$j] > $m && $primeNumber[$j] < $m1)
//             {
//                 $k++;
//                 $a[$i][$k] = $primeNumber[$j];
                
//             }
//         }
//     }

   
//     // for ($i = 0; $i < 10; $i++) 
//     // {
//     //     for ($j = 0; $j < 30; $j++) 
//     //     {
//     //          if($array[$i][$j]>0 && $array[$i][$j]<1000)
//     //          {
//     //               throw new Exception("Value must be 1 or below");
//     //             $l->insert($array[$i][$j]."\t");
                 
//     //          }
            
//     //     }


//     //      $q->enqueue("\n");
//     // }
//     $l->show();

// }catch(Exception $e)
// {
//     echo " ";
// }
// ?>