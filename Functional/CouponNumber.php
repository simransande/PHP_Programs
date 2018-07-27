<?php

include "Utility.php";

echo "Enter the number:\n";
$number=Utility::inputInteger();

$result=Utility::couponNumber($number);

?>