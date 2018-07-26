<?php

include "Utility.php";

echo "Enter the value:\n";
$value=Utility::inputInteger();

$result=Utility::primeFactors($value);


?>