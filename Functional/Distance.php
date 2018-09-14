<?php
include "Utility.php";

echo "Enter the x:\n";
$x=Utility::inputInteger();

echo "Enter the y:\n";
$y=Utility::inputInteger();

$result=Utility::distance($x,$y);
echo "=$result\n";
?>