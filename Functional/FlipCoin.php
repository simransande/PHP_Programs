<?php
include "Utility.php";

echo "Enter the number you want to flip the coin:\n";
$number=Utility::inputInteger();

Utility::flipCoin($number);



?>
