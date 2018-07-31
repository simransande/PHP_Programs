<?php
include "Utility.php";

echo "Enter the first string:";
$str1=Utility::inputLine();
//str_replace(' ', '_', $str1);
$str3=preg_replace('/\s+/', '', $str1);
$arr1=strtolower($str3);
//echo $arr1;
echo "Enter the second string:";
$str2=Utility::inputLine();
//str_replace(' ', '_', $str1);
$str4=preg_replace('/\s+/', '', $str2);
$arr2=strtolower($str4);
//echo $arr2;
$result=Utility::anagram($arr1,$arr2);

if($result==true)
{
    echo "strings are anagram\n";
}else
{
    echo "strings are not anagram\n";
}
?>