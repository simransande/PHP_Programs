<?php

$suits= array("Clubs", "Diamonds", "Hearts", "Spades");
$ranks = array("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace");

// $result = array_merge($suits, $ranks);
// print_r($result);
// $deck = array();
 
foreach ($suits as $suit) {
    foreach ($ranks as $face) {
        $cards[] = array ("face"=>$face, "suit"=>$suit);
    }
}
shuffle($cards);

$n=count($suits)*count($ranks);

for($i=0;$i<$n;$i++)
 {
    $r = $i +(rand(1,0) * ($n-$i));
    $temp = $cards[$r];
    $cards[$r] = $cards[$i];
    $cards[$i] = $temp;
$card = array_shift($cards);
 
echo $card['face'] . ' of ' . $card['suit']."\n";

 }
 for($i = 0; $i < 4; $i++) 
{
 echo "---------- PLAYER NUMBER: " . ($i) . " HAVE CARDS ARE BELOW ----------\n";
    for ($j = 0; $j < 9; $j++) 
     {
     echo $cards[$i+$j*4] . " (Card " . ($i+$j*4).")\n";
      
     }
    }
// $n = count($suits)*count($ranks);
// echo $n;

// // // $deck=[];
// for($i = 0; $i < count($ranks); $i++) 
// {
//    for ($j = 0; $j < count($suits); $j++) 
//     {
//       $cards[count($suits)*$i + $j] = $ranks[$i] . " of " . $suits[$j];
//     }
// }
// for ($i = 0; $i < $n; $i++) 
// {
//    $r = $i +(rand(1,0) * ($n-$i));
//    $temp = $cards[$r];
//    $cards[$r] = $cards[$i];
//    $cards[$i] = $temp;
// }
// for($i = 0; $i < 4; $i++) 
// {
//  echo "---------- PLAYER NUMBER: " . ($i) . " HAVE CARDS ARE BELOW ----------\n";
//    for ($j = 0; $j < 9; $j++) 
//     {
//       echo $cards[$i+$j*4] . " (Card " . ($i+$j*4).")\n";
      
//     }
    


    



?>