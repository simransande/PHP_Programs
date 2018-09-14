<?php
include "Utility.php";

echo "enter loan\n";
$P=Utility::input();

echo "enter year\n";
$Y=Utility::input();

echo "enter interest\n";
$R=Utility::input();

$result=Utility::monthlysalary($P,$Y,$R);
echo " your monthly sallary is:$result \n";
?>