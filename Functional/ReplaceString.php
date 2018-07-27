<?php
include "Utility.php";

$str="Hello <<UserName>>, How are you?";
echo "$str\n";
echo "Enter the name you want to print:\n";
$name = Utility::inputString();

{
    if(strlen($name)<=3)
    {
        echo "Check the characters in name(Should be minimum 3 char)\n";
    }else
    echo str_replace("<<UserName>>",$name,"$str\n");
}


?>