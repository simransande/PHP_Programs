<?php
include "Utility.php";
$timeArray=[];

//1) binary search
echo "Binary search:\n";
echo "***************\n";
$startTime=microtime();
echo "start time is: $startTime \n";
echo "Enter nth value:\n";
$n = Utility :: inputInteger();
echo "Values are:\n";
$arr = [];
for ($i=0; $i < $n; $i++) { 
    $arr[$i] = Utility::input();
}
echo "Enter element to search:";
$key = Utility :: input();
$result=Utility::binarySearch($arr,$key);
if($result)
{
    echo "search value is found.\n";
 }
  else
  {
      echo "value found.\n";
  }
  $stopTime=microtime();
  echo "stoptime is: $stopTime\n";
  echo "---------------------------------\n";
  echo "---------------------------------\n";
  $timeElapsed=Utility::stopwatch($startTime,$stopTime);
   array_push($timeArray,$timeElapsed . "--binary search");
  

  //2) Insertion sort
    echo "Insertion sort:\n";
    echo  "***************\n";
    $startTime=microtime();
    echo "start time is: $startTime \n";

    $result=Utility::insertionSort();
    print_r($result);

  $stopTime=microtime();
  echo "stoptime is: $stopTime\n";
  echo "---------------------------------\n";
  echo "---------------------------------\n";
  $timeElapsed=Utility::stopwatch($startTime,$stopTime);
   array_push($timeArray,$timeElapsed . "--insertion sort");

  //3)bubble sort
    echo "Bubble sort:\n";
    echo  "***************\n";
    $startTime=microtime();

    echo "start time is: $startTime \n";
    $result=Utility::bubbleSort();
    print_r($result);

  $stopTime=microtime();
  echo "stoptime is: $stopTime\n";
  echo "---------------------------------\n";
  echo "---------------------------------\n";
  $timeElapsed=Utility::stopwatch($startTime,$stopTime );
   array_push($timeArray,$timeElapsed. "--bubble sort");

   echo "Elapsed time:\n";
   sort($timeArray);
   print_r($timeArray);
?>