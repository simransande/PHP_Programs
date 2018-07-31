<?php
include "Utility.php";

echo "Enter the choice:\n";
echo "1.Anagram prime:\n";
echo "2.Palindrome anagram:\n";
$choice=Utility::inputInteger();
Utility::primeAnagramAndPalindrome($choice);
// echo "palindrome=";
// Utility::primeAnagramAndPalindrome();


?>