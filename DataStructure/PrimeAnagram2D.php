<?php
include "Utility.php";

$primeAna=Utility::primeAnagram();
//print_r($primeAna);
$prime=Utility::primeNumber();
Utility::PrimeAnagram2D($prime,$primeAna);


?>