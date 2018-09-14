<?php

include "Utility.php";

echo "enter the number:\n";
$c=Utility::input();

$result=Utility::squareroot($c);
echo "square root of $c is:".$result."\n";

?>