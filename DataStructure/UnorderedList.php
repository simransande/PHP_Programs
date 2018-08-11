<?php

include "Utility.php";
//include "LinkedList.php";

$list=new LinkList();

$filename = "/var/www/html/DataStructure/word.txt";
            $fp = fopen($filename, "r");

//$content = fread($fp, filesize($filename));
            while(($line=fgets($fp))!==false)           //till line not get empty
            {
                $lines = explode(" ", $line);
                foreach($lines as $word)
                {
                    $list->insert($word);
                }
            }

                //print_r($lines);
                $list->show($list);


            echo "Enter target keyword:\n";
            $val=Utility::inputString();
            //echo $val;

            $status=$list->search($val);
            //fscanf($val,$list);

            if($status==true)
         {
              echo "$val is found \n";
             $list->delete($val);
             //str_replace($val,"null");

             $list->show($list);


            //echo "target is found";
  
        }
        else
        {
        echo "$val not found\n";
        echo "\n";
        $list->insert($val);
        //file_put_contents($filename ,$val);
        file_put_contents($filename, $val, FILE_APPEND | LOCK_EX);   /*FILE_APPEND − If file filename already 
                                                                     exists, append the data to the file 
                                                                       instead of overwriting it.
                                                                       
                                                                       LOCK_EX − Acquire an exclusive lock on
                                                                        the file while proceeding to the writing.*/
        //  file_get_contents()

        echo "after adding the new value list is:\n";
        $list->show($list);
        }
            echo "";
            
            fclose($fp);
?>