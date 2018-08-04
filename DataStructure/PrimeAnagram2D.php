<?php
include "Utility.php";
function PrimeAnagram2D()
       {
        $prime=Utility::primeNumber();
        $primeAna=Utility::primeAnagram();
           $j = 0;
           $range=range(200,200);
           $arr = new $range;
           $row = 0;
           $row1 = 0;
           for ($i = 0; $i < 169; $i++)
           {
               if ($primeAna[$j] != $prime[$i])
               {
                   $arr=range($row,0);
                   foreach ($arr as $a) {
                   $a = $prime[$i];
                   $row++;
                   }
               }
               else
               {
                $arr=range($row1,1);
                foreach ($arr as $a)
                   $a= $prime[$i];
                   $j++;
                   $row1++;
               }
           }
           for ($i = 0; $i< 100; $i++)
           {
               for ($j1 = 0; $j1 < 2; $j1++)
               {
                $arr=range($i,$j1)!=0;
                foreach ($arr as $a)
                 //  if ($arr[$i,$j1] != 0)
                       echo "$a". " ";
               }
           echo "";
           }
       }


?>