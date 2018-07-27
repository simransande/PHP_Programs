<?php

include "Utility.php";

$startTime = 0;
$stopTime = 0;

echo "Enter start time:\n";
$start=Utility::inputInteger();
if($start == 1)
{
$startTime = Utility :: start();
echo "start time",$startTime;
}

echo "\nEnter stop time:\n";
$stop=Utility::inputInteger();
if($stop == 1){
    $stopTime = Utility :: stop();
    echo "start time",$stopTime;
}


//$time_end = microtime(true);
//echo $time_end."\n";
//$time = $time_end - $time_start;
Utility::stopwatch($startTime,$stopTime);
//echo "Did nothing in $time seconds\n";
?>