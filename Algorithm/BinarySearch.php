<?php

include "Utility.php";

echo "Enter the size of array:\n";
$n=Utility::inputInteger();

$arr1=[];
echo "enter the array:\n";
for($i=0;$i<$n;$i++)
{
    $arr1[$i]=Utility::input();
  
}
    //print_r($arr1[$i]);
  // asort($arr1[$i]);
 echo "Enter the  number you want to find:\n";
 $x= Utility::input();

 $result=Utility::binarySearch($arr1,$x);



if($result) {
    echo  $x." is exists..\n";
}
else {
    echo  $x." is not exist..\n";
}


?>