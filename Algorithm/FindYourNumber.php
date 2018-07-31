<?php
include "Utility.php";

    echo " Enter the number that 2's power number:\n";
           $num = Utility::inputInteger();
            $upper = $num;
           $lower = 0;
           $counter = 0;
           $middle = ($upper + $lower) / 2;

        $result=Utility::magicnumber($num,$lower,$counter,$middle)

          


?>