<?php

include "Utility.php";

echo "Enter the value:\n";
$value=Utility::inputInteger();

Utility::primeFactors($value);


?>