<?php
include "Queue1.php";
include "Stack.php";
include "LinkedList.php";
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
  public static function inputBoolean()
  {
    fscanf(STDIN,"%s",$num);
    if(filter_var($num, FILTER_VALIDATE_BOOLEAN))
    {
        return $num;
    }
    else{ 
    
        echo "Error..plz enter only boolean value.\n";
        return Utility::inputBoolean();
    }
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
public static function reverse($n)
{
	$sum=0;
	while($n>0)
	{
		$x=$n%10;
		$sum=$sum*10+$x;
		$n=floor($n/10);
	}
	return $sum;
}

public static function leapYear($year)
{
    //echo "this is :". strlen($year);
            if(strlen($year)!=4)
            {
                throw new LengthException("enter only 4 digit year");
            }
           else 
            {
                if($year%4==0||$year%100==0||$year%400==0)
                {echo "Year is leap year\n";
                        
                        
                }
                else
                {
                    echo "Year is not leap year\n"; 
                }

            }
          

}

public static function primeNumber()
{
   $array=[];
   $k=0;
    for ($x = 1; $x <= 1000; $x++)
    {		
	  for ($i = 2; $i < $x; $i++)   //for prime numbers only ths for loopis included
	  {		
		  if ($x % $i == 0)
		   {
  
              break;
          }
      }
	  if ($x == $i) 
	  {
        $array[$k]= $x;
        $k++;
        
      }
     
  }
  return $array;
}
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

public static function primeAnagram()
{
	$array=Utility::primeNumber();
      //  print_r($array);
       // $test =count($array);


        for ($i = 0; $i < count($array); $i++)
        {
            for($j=$i+1;$j < count($array); $j++)
            {
                $result=Utility::anagram($array[$i],$array[$j]);
                if($result)
                {
                   //echo $array[$i]." ".$array[$j]." " ;
                }
            }
		}
		return $array;
}

public static function dayofweak($month,$day,$year)
{


    $y0 = floor($year - (14 - $month) / 12);
    $x = floor(($y0 + $y0/4) - ($y0/100 + $y0/400));
    $m0 = floor(($month + 12) * (14 - $month) / (12 - 2));
    $d0 = floor(($day + $x + (31*$m0)/ 12) % 7);
  
    return $d0;
}


//banking

public static function banking($person,$balance)
{
	$q=new Queue();
	$count = 0;
	// $person;
		while ($count < $person)
		 {
			$flag;
			echo "Bank Counter:\n";
			do {
				echo "";

				echo "1.Deposit\n";
				echo "2.Withdraw\n";
				echo "3.check Current Balance is \n";
				echo "4.Number of person in queue\n";
				// echo "5.Dequeue\n";
				// echo "6.Enqueue\n";
				echo "Enter your choice\n";
				$choice = Utility::inputInteger();
                switch ($choice) 
                {

				case 1:
					echo "Enter the amt to deposit:\n";
					$amt =Utility::inputInteger();
					$balance = $balance + $amt;
					$q->enqueue($balance);
					echo "Balance is ". $balance ."\n";
					break;

				case 2: {
					echo "Enter the amt to withdraw:\n";
					$withdrawal = Utility::inputInteger();
                    if ($withdrawal < $balance)
                     {
					$q->deque();

						$bal = $balance - $withdrawal;
					        $balance = $balance - $withdrawal;
							echo "Balance is: ".$balance."\n";
						

                    }
                    else 
                    {
                        echo " U dont have sufficient balance...\n";
                    }
				}
					// else { System.out.println("Insufficient balance"); }
					break;

				case 3:
					echo "Current balance is " .$balance."\n";
					break;

				case 4:
					$number = $q->sizeOfQue();
					echo "Number of person in Queue" . " " .$number."\n";
					break;

				// case 5:
				// 	$q->dequeue();
				// 	$number = $q->sizeOfQue();
				// 	echo "Number of person in Queue" . " " .$number."\n";
				// 	break;

				// case 6:
				// 	$q->enqueue();
				// 	$number = $q->sizeOfQue();
				// 	echo "Number of person in Queue" . " " .$number."\n";
				// 	break;

				default:
					echo "Invalid choice";
					break;

				}
				echo "Do you want to continue the transaction..\n";
				echo "Press true or false:\n";

				$flag = Utility::inputString();
			} while ($flag=='true');
			// if($flag=='false')
			// {  
			// 	echo "THANK YOU:\n";
			// 	break;
			// }
			//$q->deQue();
			$count++;
		//}
			}	

	}

//palindrome

public static function palindrome($stra)
{
	$a=str_split($stra,1);
	//print_r($str);
	$q=new Queue();
	$front=0;
	$rear=0;
	//$f = 0;
	// while( $q->isEmpty()!=0 )
	// {
			for($i=0;$i<floor(count($a)/2);$i++)    //half part of string enqueue
			{
				$front=$q->enqueue($a[$i]);
			}	
			$i=$front;
			
			//$s=array($stra);
			$s=strrev($stra);
			
			$s=str_split($s,1);
			
			for($m=0; $m<floor(count($s)/2) ; $m++)    //half part after reversing
			{
				$k=$q->deque();
				if($s[$m]==$k)
				{
					$i++;
					continue;
				}

				else{
					break;
				}
			}

			$str=$q->isEmpty();
			if($str)
			{
				echo " string is pal";
			}else{
				echo " string is not pal";

			}
		}
	//binary search tree..

	public function fact($i)
	{
		if($i<=1)
		{
			return $i;
		}
		return $i*Utility::fact($i-1);
	}
	
	// BINARY SEARCH
	public static function binarysearchtree($n)
	{
		$cn=(Utility::fact(2*$n))/(Utility::fact($n+1)*Utility::fact($n));
		echo $cn."\n";
	}

	
public static function PrimeAnagram2D($prime,$primeAna)
{
	 $j = 0;
	$arr = array(array(),array());
	$row = 0;
	 $row1 = 0;
	for ($i = 0; $i < 167; $i++)
	{
		if ($primeAna[$j] != $prime[$i])
		{
			$arr[$row][0] = $prime[$i];
			$row++;
		}
		else
		{
			$arr[$row1][1] = $prime[$i];
			$j++;
			$row1++;
		}
	}
	for ($i = 0; $i < 100; $i++)
	{
		for ($j1 = 0; $j1 < 2; $j1++)
		{
			if ($arr[$i][$j1] != 0)
				echo $arr[$i][$j1] . " ";
		}
		echo "";
	}
}
	//PRIME NUMBER IN 2D
	public static function PrimeNumber2D($primeVal)
	{
		$arr = array( 1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 );
		$r = 10;
		 $c = 27;

		// $myvalue=range($primeVal[$arr[0]],$primeVal[$arr[1]]);
		 $a=array_fill(0,10,array_fill(0,25,0));
		// print_r($a);
		 //  $k, $b;
		echo "PRIME NUMBERS 1-1000\n";

		// $a = array_fill(0,0);
		for ($i = 0; $i < count($arr) - 1; $i++)
		{
			$k = -1;
			$m = $arr[$i];
			 $m1 = $arr[$i + 1];
			for ($j = 0; $j < count($primeVal) ;$j++)
			{
				if ($primeVal[$j] > $m && $primeVal[$j] < $m1)
				{
					$k++;
					$a[$i][$k] = $primeVal[$j];
				}
			}
		}

		for ($i = 0; $i < count($arr)- 1; $i++)
		{
			$p = $arr[$i];
			 $p1 = $arr[$i + 1];
		   echo $p ."-" . $p1 . " ";
		   
			for ($j = 0; $j < 25; $j++)
			{
			
				 if ($a[$i][$j] != 0)
				{
					echo $a[$i][$j]." ";
				}
			

			}
		   echo "\n";
		}
		return $primeVal;
	}

	//prime anagram stack

	public static function primeanastack($number)
	{
		$s = new Stackclass();
		$l=new LinkList();

		//print_r($number);
		$len=count($number);
		//echo $len;
	//	$arr=[[]];
		for($i=0;$i<$len;$i++)
		{
			if(Utility::primeNumber($i))
			{
				$s=Utility::reverse($i);
				if(Utility::anagram($i,$s))
				{
					$l->insert($i);
				}
			}
		}
		$r=$l->size();
		for($i=0;$i<=$r;$i++)
		{
			$k=$l->getLast($i);
			$s->push($k);
		}
		for($i=1;$i<=$r;$i++)
		{
			$k=$s->pop();
			echo 
			$k." " ."\n";
		}
		}
	
	// 	//prime anagram queue
	// 	public static function primeanaqueue($number)
	// {
	// 	// $q=new Queue();
	// 	// $q->enqueue(10);
	// 	$l=new LinkList();
	// 	//echo $s;
	// 	//print_r($number);
	// 	//$len=count($number);
	// 	//echo $len;
	// //	$arr=[[]];
	// 	for($i=0;$i<$number;$i++)
	// 	{
	// 		if(Utility::primeNumber($i))
	// 		{
	// 			$s=Utility::reverse($i);
	// 			if(Utility::anagram($i,$s))

	// 			{
	// 				$l->insert($i);
	// 			}
	// 		}
	// 	}
	// 	$r=$l->size();
	// 	$s=new Queue();
	// 	for($i=0;$i<=$r;$i++)
	// 	{
	// 		$k=$l->getLast($i);
	// 		$m=$s->enqueue($k);
	// 		echo $m;
			
	// 	}
	// 	for($i=1;$i<=$r;$i++)
	// 	{
	// 		$k=$s->deque();
	// 		echo $k." " ."\n";
			
	// 	}
	// 	}
	


}
?>