<?php
//include "Utility.php";
include "ComercialData.php";

echo "-----Comercial data processing-----\n";
echo "1.Create account\n";
echo "2.buy share\n";
echo "3.sell share\n";
echo "4.print report\n";
echo "5.exit\n";

echo "Enter the choice:\n";
$n=Utility::inputInteger();

    switch ($n)
    {
        case 1:createAccount();
         break;
        
        case 2:buyShare();
         break;

        case 3:sellShare();
        break;
       
        case 4:printReport();
        break;

        case 5:exitProcessing();
         break;
        
        default:echo "choose correct option only\n ";
       
    }



?>