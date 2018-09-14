<?php
include "Utility.php";

$str="Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01-01-2016. ";
echo "Enter the first name:\n";
$firstName=Utility::inputString();

echo "Enter the last name:\n";
$lastName=Utility::inputString();

echo "Enter your mobile number:\n";
$mbNumber=Utility::inputInteger();
$date=date("d-m-Y");
//echo $date;
$str=preg_replace("/<<name>>/",$firstName,$str);
$str=preg_replace("/<<full name>>/",$lastName,$str);
$str=preg_replace("/xxxxxxxxxx/",$mbNumber,$str);
$str=preg_replace("/01-01-2016/",$date,$str);

echo $str;


?>