<?php

include "Utility.php";
include "LinkedList.php";

$list=new LinkList();

$filename = "/var/www/html/DataStructure/word.txt";
            $fp = fopen($filename, "r");

//$content = fread($fp, filesize($filename));
            while(($line=fgets($fp))!==false)           //till line not get empty
                {
                    $lines = explode(" ", $line);
                    foreach($lines as $word)
              //  {
                 $list->insert($word);
             //   }
                }

                //print_r($lines);
                $list->show($list);


            echo "Enter target keyword:\n";
            $val=Utility::input();
            //echo $val;

            $status=$list->search($val);
            //fscanf($val,$list);

            if($status==true)
        {
              echo "$val is found \n";
            // $value=$list->delete($val);

                //echo $value;

            //echo "target is found";
  
        }
        else
        {
        echo "$val not found\n";
        }
            echo "";
            
            fclose($fp);
?>