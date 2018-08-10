<?php
  
 
  $values=array("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace");
  $suits=array("Clubs", "Diamonds", "Hearts", "Spades");
   $deck = array();
        $n = 0;
        for ($i = 0; $i < sizeof($values); $i++) {
            for ($j = 0; $j < sizeof($suits); $j++) {
                $deck[$n] = $values[$i] . " of " . $suits[$j];
                $n++;
            }
        }
       
  
        $a1 = [[]];
        $a = $deck;
        for ($i = 0; $i < sizeof($deck); $i++) {
            $r = rand(0, 51);
            $temp = $a[$r];
            $a[$r] = $a[$i];
            $a[$i] = $temp;
        }
        $n1 = 0;
        for ($i = 0; $i < 4; $i++) {
            for ($j = 0; $j < 9; $j++) {
                $a1[$i][$j] = $a[$n1];
                $n1++;
            }
        }

        for ($i = 0; $i < 4; $i++) {
            echo "Player ($i) \n";
            for ($j = 0; $j < 9; $j++) {
               echo $a1[$i][$j]."\n" ;
            }
            echo "\n";
        }
        return $a;
    
?>

