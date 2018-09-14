<?php
include "Utility.php";

echo "Enter the size of array:\n";
$n=Utility::inputInteger();
$array=[];
echo "enter the array:\n";
for($i=0;$i<$n;$i++)
{
    $array[$i]=Utility::inputInteger();
}
Utility::triplet($array);

?>