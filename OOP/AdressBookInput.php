<?php
include "AdressBook.php";
// include "Utility.php";

echo "---Select  option ---\n";
echo "1.creating account\n";
echo "2.update the information\n";
echo "3.View profile\n";
echo "4.delete the information\n";

$n=Utility::inputInteger();

    switch($n)
    {
        case 1:createAccount();
            break;

        case 2:update();
            break;

        case 3:view();
            break;       
   
        case 4:delete();
            break;
    
        default: echo "choose correct option only \n";
    
}
?>