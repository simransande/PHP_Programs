<?php
include "Utility.php";

echo "Trails:\n";
$trails=Utility::inputInteger();

echo "Stake:\n";
$stake=Utility::inputInteger();

echo "Goal:\n";
$goal=Utility::inputInteger();

$result=Utility::Gambler($trails,$stake,$goal);

?>