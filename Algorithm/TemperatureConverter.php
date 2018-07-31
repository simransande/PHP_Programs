<?php

include "Utility.php";

echo "enter the temperature:\n";
$temp=Utility::inputInteger();

$result=Utility::temperature($temp);
echo $result." ";

?>