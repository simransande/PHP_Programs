<?php
include "Queue.php";
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

public static function primeAnagram()
{
	$array=Utility::primeNumber();
        print_r($array);
       // $test =count($array);


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
}

public static function dayofweak($day,$month,$year)
{


    $y0 = floor($year - (14 - $month) / 12);
    $x = floor(($y0 + $y0/4) - ($y0/100 + $y0/400));
    $m0 = floor(($month + 12) * (14 - $month) / (12 - 2));
    $d0 = floor(($day + $x + (31*$m0)/ 12) % 7)+1;
  
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
					$q->dequeue();

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

	// //palindrome check

	// public static function palindrome($str)
	// {
		
	// 	$q=new Queue();
	// 	$front;
	// 	$rear;
	// 	$f = 0;
	// 	for($i=0;$i<strlen($str);$i++)
	// 	{
	// 		$q->enqueue(substr($str,$i));
	// 	}
	// 	do
	// 	{	
	// 	$front =$q->enqueue() ;
	// 	if($q->isEmpty())
	// 	{	
	// 	break;
	// 	}	
	// 	$rear =$q->dequeue();
	// 	if($front!=$rear)
	// 	{	
	// 	$f = 1;
	// 	break;
	// 	}

	// 	}while(!$q->isEmpty());
	// 	if( $f == 1 )
	// 	{
	// 	echo "strings is not palindrome";
	// 	}	
	// 	else
	// 	{
	// 	echo "strings is palindrome";
	// 	}

	// }
   
	//binary search tree..

	public function fact($i)
	{
		if($i<=1)
		{
			return $i;
		}
		return $i*Utility::fact($i-1);
	}
	
	public static function binarysearchtree($n)
	{
		$cn=(Utility::fact(2*$n))/(Utility::fact($n+1)*Utility::fact($n));
		echo $cn."\n";
	}
	public static function PrimeNumb($primeVal)
	{
		$arr = array( 001, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 );
		$r = 10;
		 $c = 27;
		 //  $k, $b;
		echo "PRIME NUMBERS 1-1000\n";

		$a = [];
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
				// if ($a[$i][$j] != null)
				// {
					echo $a[$i][$j];
				// }

			}
		   echo "\n";
		}

	}
}
?>