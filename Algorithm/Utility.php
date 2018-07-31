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

//Find your number

public static function magicNumber($num,$lower,$counter,$middle)
{
    $upper=$num;
    echo "the range of number is between ".$lower . " and " .$upper."\n";
    echo "the  imagined number may be " .$middle . "\n";
    echo"Enter as High or Low or Yes \n";
    $input = Utility::inputString();
    while ($lower <= $upper)
    {
        if ($input=="high")
        {
            $lower = $middle;
            $counter++;
        }
        else if ($input=="low")
        {
            $upper = $middle;
            $counter++;
        }
        else if ($input=="yes")
        {
            $counter = $counter + 1;
            echo "the imagined number is ".$middle ."\n";
            break;
        }
        if ($counter < $num)
        {
            $middle = floor(($lower + $upper + 1) / 2);   //for flooring the number 1.5=1
            echo "Is your number ".$middle .":";
            $input =Utility::inputString();
        }

    }

}



//Binary search

public static function binarySearch( $arr1, $x)
{
    //$arr1=sort($arr);
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

//vending machine


    public static  function vendingmachine($money,$notes,$i)
    {
    
        $total=0;
      if($money==0)
      {
          return -1;
      }
      else
      {
          if($money>=$notes[$i])
          {
              // logic for Calculating The notes
              $calNotes =floor($money/$notes[$i]);
              $rem = floor($money % $notes[$i]);
              $money = $rem;
              $total += $calNotes;
              echo $notes[$i]." Rs. Notes ---> ".$calNotes."\n";
          }
         $i++;
          return Utility::vendingmachine($money,$notes,$i);
      }
    }   
//day of the year

public static function dayofweak($day,$month,$year)
{


    $y0 = $year - (14 - $month) / 12;
    $x = $y0 + $y0/4 - $y0/100 + $y0/400;
    $m0 = $month + 12 * ((14 - $month) / 12) - 2;
    $d0 = ($day + $x + (31*$m0)/ 12) % 7;
  
    return $d0;
}

//temperature conversion 

public static function temperature($temp)
{
   $F=0;
    echo "1.convert into celcius:\n";
    echo "2.convert into farenite:\n";
    $choice=Utility::inputInteger();

    switch ($choice)
     {
        case 1:
            $F = ($temp * 9 / 5) + 32;
            break;
        
        case 2:
            $F = ($temp - 32) * 5 / 9;
            break;

        default:
            echo "error..\n";
    }
    return $F;



}

//monthly salary
public static function monthlysalary($P,$Y,$R)
{
    $n=12*$Y;
    $R1 = $R / (12 * 100);
	$payment = ($P * $R1) / (1 - (pow((1 + $R1), -$n)));
	return $payment;
}

//square root of non negative number

public static function squareroot($c)
{
    $t = $c;
    $epsilon = 1e-15;
    while (abs($t - $c / $t) > $epsilon * $t)
     {
        $t = ($c / $t + $t) / 2.0;
    }
    return $t;
}

// covert number decimal into binary

public static function dectobinary($n)
{
    $dec=$n;
    $binStr = '';
   
    while ($dec>=1){
    $bin = $dec % 2;
    $dec = round($dec/2, 0, PHP_ROUND_HALF_DOWN);
    $binStr .= $bin;
}
   $binStr = strrev($binStr);
    return $binStr;
		
	}


//stopwatch

public static function stopwatch($startTime,$stopTime)
{
    $timeElapsed=($stopTime-$startTime);
    return $timeElapsed;
}
}
?>