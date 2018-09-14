<?php
include "Utility.php";

echo "Enter the a:\n";
$a=Utility::inputInteger();

echo "Enter the b:\n";
$b=Utility::inputInteger();

echo "Enter the c:\n";
$c=Utility::inputInteger();

Utility::quadratic($a,$b,$c);
//echo "=$result\n";
?>