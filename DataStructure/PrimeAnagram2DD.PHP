<?php
include "Utility.php";
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


?>