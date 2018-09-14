<?php
include "Utility.php";

echo "Enter the temperature:\n";
$t=Utility::inputInteger();

echo "Enter the wind speed:\n";
$v=Utility::inputInteger();

Utility::windchill($t,$v);

?>