<?php
class Utility
{
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

/*public static function inputArray()
{
    fscanf(STDIN,"%f",$fNum);
    if(is_float($fNum))
    return $fNum;
}*/

// method for leap year
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

//flip a coin and calculate head and tail.
public static function flipCoin($number)
{
    $headcount=0;
    $tailcount=0;
   if($number>0)
   {

for($i=0;$i<$number;$i++)
{
    $random=mt_rand(0,1);
    if($random>0.5)
    {
        $headcount++;
       // echo "$headcount";
    }
    else
    {
        $tailcount++;
        //echo "$tailcount";
    }
}

}
echo "number of heads are:$headcount\n";
echo "number of tails are:$tailcount\n";

$per1=($headcount/$number)*100;
$per2=($tailcount/$number)*100;

echo "percentage of headcount:$per1%\n";
echo "percentage of tailcount:$per2%\n";

}

//power of 2
public static function powerOf2($number)
{
    $power=1;
for($i=1;$i<=$number;$i++)
{
    $power=$power*2;
    echo "2^". "$i" ."=$power\n";

}

}

//harmonic number of n
public static function harmonicNumber($value)
{
    $num=0;
    for($i=1;$i<=$value;$i++)
    {
        $num=$num+(1.0/$i);
        echo "1/$i"." + ";
    }
    return $num;
}

//prime factors
public static function primeFactors($value)
{
     $j = $value;
    for ($i = 2; $i * $i <= $j; $i++)
    {
        while ($value % $i == 0)
        {
            $value = $value / $i;
            echo $i."\n";
        }
       
    }
    
   
}

//Gambler game
public static function Gambler($trails,$stake,$goal)
{
    $cash=0;
    $loss=0;
    $win=0;

    if($stake<$goal)
    {
        for($i=0;$i<$trails;$i++)
        {
            $cash=$stake;
            while($cash>0 && $cash<$goal)
            {
                $random=mt_rand(0,1);
                if($random<0.5)
                {
                $cash++;
                }else{
                $cash--;
                }
            }
            if($cash==$goal)
            {
                $win++;
                
            }else
            {
                $loss++;
            }
        }
       $per1=($win/$trails)*100;
       $per2=($loss/$trails)*100;
       echo "number os win=".$win."\n";
        echo "percent of games win=".$per1."\n";
        echo "percent of games loss=".$per2."\n";

    } else 
    {
            echo "cash is maximum plz entered valid ammount\n";
    }

}

//coupon number

public static function couponNumber($n)
    {
        $flag = false;
        $distinct = array_fill(0,$n,0);
        for ($i = 0; $i < $n; $i++) {
             $random=mt_rand(10,99);
            for ($j = 0; $j < $n; $j++) {
                if ($distinct[$j] == $random) {
                    break;
                }
                if (!$flag) {
                    $distinct[$i] = $random;
                }
            }
        }
       foreach ($distinct as $value) {
           echo "$value";}
       
    }

// 2D Array

public static function array2D($row,$column,$choice)
{
   switch($choice)
   {
   case 1: $arr = [[]];
                echo "Enter elemnts into Matrix:\n";
                for ($i = 0; $i < $row; $i++) {
                    for ($j = 0; $j < $column; $j++) {
                        $arr[$i][$j] = Utility::inputInteger();
                    }
                }
                echo "Your Matrix is:\n";
                for ($i=0; $i < $row ; $i++) { 
                     for ($j=0; $j < $column; $j++) { 
                        print ($arr[$i][$j]." ");
                     }
                     echo "\n";
                }break;
    case 2: $arr=[[]];
                echo "Enter elements into matrix:\n";
                for ($i = 0; $i < $row; $i++) {
                    for ($j = 0; $j < $column; $j++) {
                        $arr[$i][$j] = Utility::inputString();
                    }
                }
                echo "Your Matrix is:\n";
                for ($i=0; $i < $row ; $i++) { 
                     for ($j=0; $j < $column; $j++) { 
                        print ($arr[$i][$j]." ");
                     }
                     echo "\n";
                }break;
    case 3: $arr=[[]];
                echo "Enter elements into matrix:\n";
                for ($i = 0; $i < $row; $i++) {
                    for ($j = 0; $j < $column; $j++) {
                        $arr[$i][$j] = Utility::inputFloat();
                    }
                }
                echo "Your Matrix is:\n";
                for ($i=0; $i < $row ; $i++) { 
                     for ($j=0; $j < $column; $j++) { 
                        print ($arr[$i][$j]." ");
                     }
                     echo "\n";
                }break;
    }
}

//Triplet

public static function triplet($array)
{
    $f=0;
    for($i=0;$i<count($array);$i++)
    {
       
        for($j=$i+1;$j<count($array);$j++)
        {
            for($k=$j+1;$k<count($array);$k++)
            {
                if($array[$i]+$array[$j]+$array[$k]==0)
                {
                    echo "Triplets are:".$array[$i].",".$array[$j].",".$array[$k]."\n";
                    $f++;
                }
            }
        }
       
    }
    if($f==0)
    {
        echo "No triplets found...";
    } 
}

//Distance

public static function distance($x,$y) 
{
    $x1=0;
    $y1=0;
   
    $distance=sqrt(pow($x-$x1,2) + pow($y-$y1,2));
    return $distance;
}

//permutation

public static function permute($str, $l, $r)
{
    if ($l == $r)
        echo $str. "\n";
    else
    {
        for ($i = $l; $i <= $r; $i++)
        {
            $str = Utility::swap($str, $l, $i);
            Utility::permute($str, $l + 1, $r);
            $str = Utility::swap($str, $l, $i);
        }
    }
}
 

public static function swap($a, $i, $j)
{
    $temp;
    $charArray = str_split($a);
    $temp = $charArray[$i] ;
    $charArray[$i] = $charArray[$j];
    $charArray[$j] = $temp;
    return implode($charArray);
}


//Quadratic

public static function quadratic($a,$b,$c)
{
   // $delta = ( $b * $b) ­- ( 4 * $a * $c);
    $delta=($b * $b)-(4 * $a * $c);
    echo "delta=".$delta."\n";
    if($delta!=0)
    {
    $sqrtdelta=sqrt($delta);
    $x1=(-$b + $sqrtdelta)/(2 * $a);
    $x2=(-$b - $sqrtdelta)/(2 * $a);

    echo "Roots of x are:(".$x1 . "," .$x2 .")\n";
    }
}

//Wind speed

public static function windchill($t,$v)
{
    $pow=pow($v,0.16);
    $w=(35.74 + 0.6215 * $t + (0.4275 * $t - 35.75) * $pow);
    echo "Windchill=".$w."\n";
}


//stopwatch

public static function start() 
{
    $startTimer1=microtime();
    $startTimer =(($startTimer1 / 100) );
    
    //echo "Start-Time:"." "$seconds;
    return $startTimer;
}
public static function stop() 
		{
			$stopTimer1=microtime();
			$stopTimer =(($stopTimer1 / 100));
            // //echo "Stop-Time:"." "$seconds1);
            return $stopTimer;
        }
        
public static function stopwatch($start,$stop)
{

    //  $startTimer=0;
	// 	$stopTimer=0;
    //     $elasped=0;
       
	// 	$elasped=$stopTimer-$startTimer;		
    //         $elapsedTime=$elasped."."/1000;
    //         return $elapsedTime;
			
    $timeLapsed=($stop-$start);
    echo "\ntime lapsed between start and end=\n".$timeLapsed."\n";
}
}

?>