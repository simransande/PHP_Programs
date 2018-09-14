<?php

include "Utility.php";

echo "enter day:\n";
$day=Utility::inputInteger();

echo "enter month:\n";
$month=Utility::inputInteger();

echo "enter year:\n";
$year=Utility::inputInteger();

$result=Utility::dayofweak($day,$month,$year);

switch ($result) {
    case 1:
        echo "MONDAY\n";
        break;
    
    case 2:
        echo "TUESDAY\n";
      break;

    case 3:
        echo "WEDNESDAY\n";
    break;

    case 4:
        echo "THURSDAY\n";
    break;

    case 5:
        echo "FRIDAY\n";
    break;

    case 6:
        echo "SATURDAY\n";
    break;

    case 7:
        echo "SUNDAY\n";
    break;

    
}

?>