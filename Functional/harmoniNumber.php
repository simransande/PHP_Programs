<?php
include "Utility.php";

echo "Enter the value:";
$value=Utility::inputInteger();

$result=Utility::harmonicNumber($value);

echo "=$result\n";

?>