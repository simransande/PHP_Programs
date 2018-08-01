<?php

include "Utility.php";
include "LinkedList.php";

$list=new LinkList();
$file=fopen("/var/www/html/DataStructure/word.txt","r") or die("unable to open");

while($wordarray=fgets($file)!== false)
{
    $array=explode(" ",strtolower($wordarray));
    
        foreach($array as $word);
        $list->insert($word);
}
$list->show($list);
?>