<?php

include "Utility.php";
include "Logging.php";

echo "Enter the year:\n";
$year=Utility::inputInteger();
try{

Utility::leapYear($year);
}catch(LengthException $e)
{
    log::logger($e);
    echo "message:". $e->getMessage();
    
}

?>