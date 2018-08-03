<?php 

include "Utility.php";

echo "Enter the month:\n";
$month=Utility::inputInteger();

echo "Enter the year:\n";
$year=Utility::inputInteger();

$months = array("January", "February", "March",
	           "April", "May", "June",
	           "July", "August", "September",
               "October", "November", "December");

$days= array( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);


if ($month == 2 && Utility::leapYear($year)) 
$days[$month] = 29;

echo "   " . $months[$month-1]. " " .$year;
echo "\n";
echo " S\tM\tT\tW\tT\tF\tS\n";
$d = Utility::dayofweak($month, 1, $year);
for ($i = 0; $i < $d; $i++){
echo "\t";}
for ($i = 1; $i <= $days[$month]; $i++) 
{
   
    echo $i."\t";
    if ((($i + $d) % 7 == 0) || ($i == $days[$month])) 
    echo " \n";
}


?>