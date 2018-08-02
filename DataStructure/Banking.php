<?php

include "Utility.php";
include "Queue.php";
$balance=500;
echo "Enter the number of person:\n";
$person=Utility::inputInteger();

echo "Enter the size of queue:\n";
$size=Utility::inputInteger();

    $q=new Queue($person,$size);
    Utility::banking($q,$person,$balance);


?>