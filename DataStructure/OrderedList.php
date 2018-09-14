<?php

include "Utility.php";
//include "LinkedList.php";

$list=new LinkList();

$filename = "/var/www/html/DataStructure/number.txt";
            $fp = fopen($filename, "r");

//$content = fread($fp, filesize($filename));
            while(($line=fgets($fp))!==false)           //till line not get empty
                {
                    $lines = explode(" ", $line);     //thespace and give another value as a string
                    asort($lines);
                    foreach($lines as $word)
              {

                 $list->insert($word);
              }
              //sort($list);
                }

                //print_r($lines);
                $list->show($list);


            echo "Enter target keyword:\n";
            $val=Utility::inputInteger();
            //echo $val;

            $status=$list->search($val);
            //fscanf($val,$list);

            if($status==true)
        {
              echo "$val is found \n";
              //file_put_contents($filename, "null", FILE_APPEND | LOCK_EX);
             $list->delete($val);
            // unlink($val);
           // $list = str_replace("$val", "", "$filename");

             $list->show($list);


            //echo "target is found";
  
        }
        else
        {
        echo "$val not found\n";
        echo "\n";
        $list->insert($val);
        file_put_contents($filename, $val, FILE_APPEND | LOCK_EX);
        echo "after adding the new value list is:\n";
        $list->show($list);
    //     {
    //         $lines = explode("\n", $line);
    //         asort($lines);
    //         foreach($lines as $word)
    //   {

    //      $list->insert($word);
    //   }
    //   $list->show(asort($list));
    //     //echo $array;
    //     // $list->show($list);
    //     }
       
            echo "";
            
            fclose($fp);
    }
?>