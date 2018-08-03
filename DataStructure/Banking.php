<?php

include "Utility.php";

$balance=500;
 echo "Enter the number of person:\n";
 $person=Utility::inputInteger();

// echo "Enter the size of queue:\n";
// $size=Utility::inputInteger();

    
    Utility::banking($person,$balance);


?>