<?php

include "Utility.php";

echo "Enter the year:\n";
$year=Utility::inputInteger();

$result=Utility::leapYear($year);
if($result==1){
    echo "$year is leap year\n";
}else if($result==2)
echo "$year is not leap year\n";


?>