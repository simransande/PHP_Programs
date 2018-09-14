<?php
 include "Utility.php";
  echo "enter the number which you want to convert into binary:\n";
  $n=Utility::inputInteger();

  $result=Utility::dectobinary($n);
    echo "dec to binary conversion is:".$result."\n";
?>