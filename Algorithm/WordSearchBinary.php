<?php
include "Utility.php";
$file = fopen("test.txt","r");


// while(($buffer=fgets($file))!==false)
// {
//     $array=explode(" ",strtolower($buffer));
// }
$edcdf=fgets($file);
if(fgets($file)!= "")
{
    $array=explode(" ",strtolower($edcdf));



    print_r($array);
    echo "Enter the word to search..:\n";
    $key=Utility::input();
    $key=strtolower($key);
    $result=Utility::BinarySearch($array,$key);
        }
    if($result)
    {
      echo "word is found..\n";
    }
    else{
    echo "word not found..\n";
}

?>