<?php

include "Utility.php";
echo "Enter the ammount:\n";
$money=Utility::inputInteger();
$notes=array(2000,500,200,100,50,20,10,5,1);
$i=0;
Utility::vendingmachine($money,$notes,$i);



?>