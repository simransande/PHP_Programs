<?php
class Utility
{
    public static function input()
    {
        fscanf(STDIN,"%s\n",$value);
        return $value;
    }
public static function inputString()
{
    fscanf(STDIN,"%s",$str);
    if(is_numeric($str))
    {
        echo "Enter the character only...\n";
        return Utility::inputString();
        
    }else
    return $str;
}
  
public static function inputInteger()
{
    fscanf(STDIN,"%s",$num);
    if(filter_var($num, FILTER_VALIDATE_INT))
    {
        return $num;
    }
    else{ 
    
        echo "Error..plz enter only integer value.\n";
        return Utility::inputInteger();
    }
}

public static function inputFloat()
{
    fscanf(STDIN,"%f",$fNum);
    if(filter_var($fNum, FILTER_VALIDATE_FLOAT))
    {
    return $fNum;
    }
    else {
        echo "Error..plz enter only float value.\n";
        return Utility::inputFloat();
    }
}

public static function inputLine()
{
    $line=stream_get_line(STDIN, 1024 ,PHP_EOL);
    return $line;
}

//check two strings are Anagram

public static function anagram($string1,$string2)
{
    $arr1=str_split($string1);
    $arr2=str_split($string2);
    // $l1=strlen($arr1);
    // $l2=strlen($arr2);

    // $arr1=strtolower($arr1);
    // $arr2=strtolower($arr2);
     sort($arr1);
    sort($arr2);

    if($arr1==$arr2)
    {
        return true;
    }else
    {
        return false;
    }


}

//prime numbers 

public static function primeNumber()
{
   $array=[];
   $k=0;
    for ($x = 1; $x <= 1000; $x++)
    {		
      for ($i = 2; $i < $x; $i++) {		
          if ($x % $i == 0) {
  
              break;
          }
      }
      if ($x == $i) {
        $array[$k]= $x;
        $k++;
        
      }
     
  }
  return $array;
}

//prime numbers Anagram And Palindrome

public static function primeAnagramAndPalindrome($choice)
{

    switch($choice)
    {
        case 1:
        $array=Utility::primeNumber();
        print_r($array);
        $test =count($array);


        for ($i = 0; $i < count($array); $i++)
        {
            for($j=$i+1;$j < count($array); $j++)
            {
                $result=Utility::anagram($array[$i],$array[$j]);
                if($result)
                {
                    echo "$array[$i] and $array[$j] are anagram\n";
                }
            }
        }
        break;
        
        case 2:
        for ($x = 1; $x <= 1000; $x++)
        {		
         for ($i = 2; $i < $x; $i++) {		
          if ($x % $i == 0) {
  
              break;
          }
        }
        if ($x == $i) {
         $no=$x;
        // echo $no;
           $s=0;
         while(floor($no))
        {
            $r=$no%10;
             $s=($s*10)+$r;
            $no=$no/10;
        }
       
        if($x==$s)
        {

            echo $x." ";
        }
        
      }
     
  }break;
    }
}

//Binary search

public static function binarySearch( $arr, $x)
{
    $arr1=sort($arr);
    if (count($arr1) === 0) 
    return false;

    $low = 0;
    $high = count($arr1)-1;
     
    while ($low <= $high) 
    {
  
        $mid = floor(($low + $high) / 2);
        if($arr1[$mid] == $x) {
            return true;
        }
 
        if ($x < $arr1[$mid]) {
            
            $high = $mid -1;
        }
        else {
           
            $low = $mid + 1;
        }
    }
     
    
    return false;
}

//insertion sort

public static function insertionSort()
{
    echo "Enter the size of array:\n";
$n=Utility::inputInteger();

$arr=[];
echo "enter the array:\n";
for($i=0;$i<$n;$i++)
{
    $arr[$i]=Utility::input();
}
    $sortedArray=array();
    for($i=0;$i< count($arr);$i++)
    {
        $element=$arr[$i];
        $j=$i;
        while($j>0 && $sortedArray[$j-1]> $element)
        {
            $sortedArray[$j] = $sortedArray[$j-1];
            $j=$j-1;
        }
        $sortedArray[$j]=$element;
    }
    return $sortedArray;
}


//BUbble sort

public static function bubbleSort()
{
    echo "Enter the size of array:\n";
$n=Utility::inputInteger();

$arr=[];
echo "enter the array:\n";
for($i=0;$i<$n;$i++)
{
    $arr[$i]=Utility::input();
}


for ($j = 0; $j < count($arr) - 1; $j++) {

    for ($k = $j+1; $k < count($arr); $k++) {
        if ($arr[$j] > $arr[$k]) {
            $temp = $arr[$j];
            $arr[$j] = $arr[$k];
            $arr[$k] = $temp;
        }
    }

}
return $arr;
}

//stopwatch

public static function stopwatch($startTime,$stopTime)
{
    $timeElapsed=($stopTime-$startTime);
    return $timeElapsed;
}
}
?>