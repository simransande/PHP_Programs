<?php

include "Utility.php";

echo "Enter the size of array:\n";
$n=Utility::inputInteger();

$arr=[];
echo "enter the array:\n";
for($i=0;$i<$n;$i++)
{
    $arr[$i]=Utility::input();
  
}

 echo "Enter the  number you want to find:\n";
 $x= Utility::input();

 $result=Utility::binarySearch($arr,$x);



if($result) {
    echo  $x." is exists..\n";
}
else {
    echo  $x." is not exist..\n";
}


?>