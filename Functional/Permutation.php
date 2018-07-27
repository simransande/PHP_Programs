<?php
include "Utility.php";


echo "Enter a string to permute:\n";
$str = Utility::inputString();
$n = strlen($str);
Utility::permute($str, 0, $n-1);
?>
