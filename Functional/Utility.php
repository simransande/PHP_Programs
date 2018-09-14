<?php
class Utility
{
public static function inputString()
{
    fscanf(STDIN,"%s",$str);
    if(is_numeric($str))
    {
        echo "Enter the character only...";
        
    }else
    return $str;
}
  
public static function inputInteger()
{
    fscanf(STDIN,"%d",$num);
    if(is_numeric($num))
    return $num;
    
}

// method for leap year
public static function leapYear($year)
{
if(strlen($year)==4)
{
    if($year%4==0||$year%100==0||$year%400==0)
    {
        
                //echo "Year is leap year\n";
                return true;
            
        }else
    //echo "Year is not leap year\n";
   return false;

}else
echo "Enter the 4 digit year only\n";
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
        echo "1/$i"."+";
    }
    return $num;
}

//prime factors
public static function primeFactors($value)
{
    $fact;
    $j;

    for($i=2;$i<$value;$i++)
    {
        $n=$i;
        for($j=2;$j<=$n;$j++)
        {
            if($n%$j==0)
            {
                break;
            }
        }
    
    if($j==$n)
    {
        if($value%$n==0)
        {
            echo "factors are: $n\n";
        }
        
    }
    }
}

//Gambler
public static function Gambler($trails,$stake,$goal)
{
    $cash=0;
    $loss=0;
    $win=0;

    if($stake<$goal)
    {
        for($i=0;$i<$trails;$i++)
        {
            $cash==$stake;
            while($cash>0&&$cash<$goal)
            {
                $bet++;
                $random=mt_rand(0,1);
                if($random<0.5)
                $cash++;
                else
                $cash--;



            }
            if($cash=$goal)
            {
                $win++;
            }else
            {
                $loss++;
            }
        }
       
        echo "percent of games won="."100 * $win / $trails". "%";
        echo "percent of games loss="." 100 * $loss / $trails". "%";

    } else {
            echo "cash is maximum plz entered valis ammount";
    }

        }
    

}
?>