<?php
include "Utility.php";

echo "Enter the choice:\n";
echo "1.Integer:\n";
echo "2.String:\n";
echo "3.Float:\n";
$choice=Utility::inputInteger();

echo "Enter the number of rows:\n";
$row=Utility::inputInteger();
echo "Enter the number of column:\n";
$column=Utility::inputInteger();

Utility::array2D($row,$column,$choice);

?>