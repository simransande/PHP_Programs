<?php
include "Utility.php";
    
$values=array("2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A");
$suits=array("Clubs", "Diamonds", "Hearts", "Spades");
$deck = array();

        $n = 0;
        //for giving values to each suits 
        for ($i = 0; $i < sizeof($values); $i++)
         {
            for ($j = 0; $j < sizeof($suits); $j++) 
            {
                $deck[$n] = $values[$i] . " of " . $suits[$j];
                $n++;
            }
        }
        //return $deck;
        $result=Utility::Deckofcards($deck);
 
?>

