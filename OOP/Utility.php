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

public static function Deckofcards($deck)
{
    $a1 = [[]];
        $a =$deck;
        //shuffeling the cards
        for ($i = 0; $i < sizeof($deck); $i++) 
        {
            $r = rand(0, 51);
            $temp = $a[$r];
            $a[$r] = $a[$i];
            $a[$i] = $temp;
        }
        $n1 = 0;
        //distributing the cards in 4 players
        for ($i = 0; $i < 4; $i++)
         {
            for ($j = 0; $j < 9; $j++) 
            {
                $a1[$i][$j] = $a[$n1];
                $n1++;
            }
        }
        //display the cards 
        for ($i = 0; $i < 4; $i++) 
        {
            echo "Player ($i) \n";
            for ($j = 0; $j < 9; $j++) 
            {
               echo $a1[$i][$j]."\n" ;
            }
            echo "\n";
        }
        return $a;

}
}
?>


