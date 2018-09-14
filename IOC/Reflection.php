<?php

include "Conn.php";

$x=new ReflectionClass("Add");
$method = $x->getMethods();
$a=$x->getPrototype(); //gets a method prototype
print_r($a);
?>